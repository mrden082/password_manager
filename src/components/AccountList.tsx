import React from "react";
<<<<<<< HEAD
import { useAccountStore} from "./store";
=======
import { useAccountStore } from "../store";
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55

interface AccountListProps {
  showModalTwo: () => void;
}

const AccountList: React.FC<AccountListProps> = ({ showModalTwo }) => {
  const accounts = useAccountStore((state) => state.accounts);
<<<<<<< HEAD
  const setAccounts = useAccountStore((state) => state.setAccounts);

  const handleDeleteAccount = (index: number) => {
    const updatedAccounts = [...accounts];
    updatedAccounts.splice(index, 1);
    setAccounts(updatedAccounts);
  };
=======
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55

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
