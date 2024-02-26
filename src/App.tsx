import React from 'react';
import AccountList from './components/AccountList';
import Modal from './components/Modal';
import { Account, useAccountStore } from './components/store/accountStore';
import './App.css';

const App: React.FC = () => {
  const showModal = useAccountStore((state) => state.showModal);
  const setShowModal = useAccountStore((state) => state.setShowModal);
  const handleShowPasswords = useAccountStore((state) => state.handleShowPasswords);
  const showPasswords = useAccountStore((state) => state.showPasswords);
  const addAccount = useAccountStore((state) => state.addAccount);
  const accounts = useAccountStore((state) => state.accounts);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveAccount = (account: Account) => {
    addAccount(account);
    handleCloseModal();
  };

  const handleShowAccountList = () => {
    handleShowPasswords();
  };

  return (
    <div>
      <button onClick={handleShowModal} className="btn">Add Account</button>
      <button onClick={handleShowAccountList} className="btn">Show Account List</button>
      {showPasswords && <AccountList accounts={accounts} />}
      {showModal && <Modal onSave={handleSaveAccount} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
