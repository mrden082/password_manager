import React from "react";
import { useAccountStore} from "./store";

interface AccountListProps {
  showModalTwo: () => void;
}

const AccountList: React.FC<AccountListProps> = ({ showModalTwo }) => {
  const accounts = useAccountStore((state) => state.accounts);
  const setAccounts = useAccountStore((state) => state.setAccounts);

  const handleDeleteAccount = (index: number) => {
    const updatedAccounts = [...accounts];
    updatedAccounts.splice(index, 1);
    setAccounts(updatedAccounts);
  };

  return (
    <div className="account-list">
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>
              <div onClick={showModalTwo}>
                <span>Логин: {account.username}</span>
                <br />
                <span>URL: {account.url}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteAccount(index)}
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
