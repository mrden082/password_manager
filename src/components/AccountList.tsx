import React from "react";
import { Account } from "./interfaces";

interface AccountListProps {
  accounts: Account[];
  onEditAccount: (account: Account) => void;
  onDeleteAccount: (account: Account) => void;
}

const AccountList: React.FC<AccountListProps> = ({
  accounts,
  onEditAccount,
  onDeleteAccount,
}) => {
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
                onClick={() => onDeleteAccount(account)}
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