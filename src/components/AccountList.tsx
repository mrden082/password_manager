import React from "react";
import { AccountListProps, Account } from "./interfaces";
import { useAccountStore } from "../store";

const AccountList: React.FC<AccountListProps> = ({
  accounts,
  onEditAccount,
  onDeleteAccount,
}) => {
  const deleteAccount = useAccountStore((state) => state.deleteAccount);

  const handleDeleteAccount = (account: Account) => {
    deleteAccount(account);
    onDeleteAccount(account); // Added onDeleteAccount callback
  };

  return (
    <div className="account-list">
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account) => (
            <li key={account.username}>
              <div onClick={() => onEditAccount(account)}>
                <span>Логин: {account.username}</span>
                <br />
                <span>URL: {account.url}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteAccount(account)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет сохранённых аккаунтов.</p>
      )}
    </div>
  );
};

export default AccountList;
