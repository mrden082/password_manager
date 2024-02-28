import React from "react";
import { useAccountStore } from "../store";

const AccountList: React.FC = () => {
  const accounts = useAccountStore((state) => state.accounts);

  return (
    <div>
      <h1>Saved Accounts</h1>
      <ul>
        {accounts.map((account, index) => (
          <li key={index}>
            <span>Username: {account.username}</span>
            <span>Password: {account.password}</span>
            <span>URL: {account.url}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
