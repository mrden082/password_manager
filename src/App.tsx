import React, { useState } from 'react';
import AccountList from './components/AccountList';
import Modal from './components/Modal';
import SearchList from './components/SearchList';
import { Account } from './components/interfaces';
import { useAccountStore } from './store';
import './App.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const accounts = useAccountStore((state) => state.accounts);
  const addAccount = useAccountStore((state) => state.addAccount);
  const deleteAccount = useAccountStore((state) => state.deleteAccount);
  const editAccount = useAccountStore((state) => state.editAccount);
  const searchAccounts = useAccountStore((state) => state.searchAccounts);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddAccount = (account: Account) => {
    addAccount(account);
    setShowModal(false);
  };

  const handleDeleteAccount = (account: Account) => {
    deleteAccount(account);
  };

  const handleSaveAccount = (updatedAccount: Account) => {
    editAccount(updatedAccount);
    setShowModal(false);
  };

  const handleSearch = (query: string) => {
    searchAccounts(query);
  };

  return (
    <div className="container">
      <h1>Ваши Аккаунты</h1>
      <div className="header">
        <button onClick={handleShowModal} className="btn">
          Добавить Аккаунт
        </button>
        <SearchList onSearch={handleSearch} />
      </div>
      <div className="content">
        <h2>Список Сохранённых Аккаунтов</h2>
        <AccountList
          accounts={accounts}
          onEditAccount={handleShowModal}
          onDeleteAccount={handleDeleteAccount}
        />
      </div>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          onSaveAccount={handleAddAccount}
          onDeleteAccount={handleDeleteAccount}
          onUpdateAccount={handleSaveAccount}
        />
      )}
    </div>
  );
};

export default App;
