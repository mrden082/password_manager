import React, { useState } from "react";
import AccountList from "./components/AccountList";
import Modal from "./components/Modal";
<<<<<<< HEAD
import ModalTwo from "./components/ModalTwo";
=======
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55
import "./App.css";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
<<<<<<< HEAD
  const [showModalTwo, setShowModalTwo] = useState<boolean>(false);
=======
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

<<<<<<< HEAD
  const handleShowModalTwo = () => {
    setShowModalTwo(true);
  };

  const handleCloseModalTwo = () => {
    setShowModalTwo(false);
  };

  return (
    <div className="container">
      <h1>Ваши Аккаунты</h1>
      <div className="header">
        <div className="buttons">
          <button onClick={handleShowModal} className="btn">
            Добавить Аккаунт
          </button>
          <button
            onClick={() => setShowPasswords(!showPasswords)}
            className="btn"
          >
            {showPasswords
              ? "Скрыть Список Аккаунтов"
              : "Показать Список Аккаунтов"}
          </button>
        </div>
      </div>
      <div className="content">
        <h2>Список Сохранённых Аккаунтов</h2>
        {showPasswords && <AccountList showModalTwo={handleShowModalTwo} />}
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
      {showModalTwo && <ModalTwo onClose={handleCloseModalTwo} />}
=======
  return (
    <div>
      <button onClick={handleShowModal} className="btn">
        Add Account
      </button>
      <button onClick={() => setShowPasswords(!showPasswords)} className="btn">
        Show Account List
      </button>
      {showPasswords && <AccountList />}
      {showModal && <Modal onClose={handleCloseModal} />}
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55
    </div>
  );
};

export default App;
