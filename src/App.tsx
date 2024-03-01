import React, { useState } from "react";
import AccountList from "./components/AccountList";
import Modal from "./components/Modal";
import ModalTwo from "./components/ModalTwo";
import "./App.css";
import { useAccountStore, Account } from "./store";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalTwo, setShowModalTwo] = useState<boolean>(false);
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  const accounts = useAccountStore<Account[]>((state) => state.accounts);
  const setAccounts = useAccountStore((state) => state.setAccounts);
  const deleteAccount = useAccountStore((state) => state.deleteAccount);
  const addAccount = useAccountStore((state) => state.addAccount);
  const editAccount = useAccountStore((state) => state.editAccount);

  const [selectedAccount, setSelectedAccount] = useState<Account | null>(
    null
  );

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModalTwo = (account: Account) => {
    setSelectedAccount(account);
    setShowModalTwo(true);
  };

  const handleCloseModalTwo = () => {
    setShowModalTwo(false);
  };

  const handleTogglePasswords = () => {
    setShowPasswords((prevState) => !prevState);
  };

  const handleDeleteAccount = (account: Account) => {
    deleteAccount(account);
  };

  const handleAddAccount = (account: Account) => {
    addAccount(account);
    setShowModal(false);
  };

  const handleSaveAccount = (updatedAccount: Account) => {
    editAccount(updatedAccount);
    setShowModalTwo(false);
    setSelectedAccount(null);
  };

  return (
    <div className="container">
      <h1>Ваши Аккаунты</h1>
      <div className="header">
        <div className="buttons">
          <button onClick={handleShowModal} className="btn">
            Добавить Аккаунт
          </button>
          <button onClick={handleTogglePasswords} className="btn">
            {showPasswords
              ? "Скрыть Список Аккаунтов"
              : "Показать Список Аккаунтов"}
          </button>
        </div>
      </div>
      <div className="content">
        <h2>Список Сохранённых Аккаунтов</h2>
        {showPasswords && (
          <AccountList
            accounts={accounts}
            onEditAccount={handleShowModalTwo}
            onDeleteAccount={handleDeleteAccount}
          />
        )}
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal} onSaveAccount={handleAddAccount} />
      )}
      {showModalTwo && (
        <ModalTwo
          onClose={handleCloseModalTwo}
          selectedAccount={selectedAccount}
          onSaveAccount={handleSaveAccount}
        />
      )}
    </div>
  );
};

export default App;