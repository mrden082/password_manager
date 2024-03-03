import React from 'react';
import { Account } from './interfaces';

type AccountListProps = {
  accounts: Account[];
  onEditAccount: (account: Account) => void;
  onDeleteAccount: (account: Account) => void;
};

const AccountList: React.FC<AccountListProps> = ({ accounts, onEditAccount, onDeleteAccount }) => (
  <div className="account-list">
    <ul>
      {accounts.map((account) => (
        <li onClick={() => onEditAccount(account)}>
          <span>Логин: {account.username}</span>
          <span>URL: {account.url}</span>
          <button className="delete-btn" onClick={(event) => {
              event.stopPropagation();
              onDeleteAccount(account);
          }}>Удалить</button>
        </li>
      ))}
    </ul>
  </div>
);

export default AccountList;
