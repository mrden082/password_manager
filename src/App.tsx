import React, { useState } from "react";
import AccountList from "./components/AccountList";
import Modal from "./components/Modal";
import ModalTwo from "./components/ModalTwo";
import "./App.css";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalTwo, setShowModalTwo] = useState<boolean>(false);
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    </div>
  );
};

export default App;
