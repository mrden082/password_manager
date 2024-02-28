import React, { useState } from "react";
import AccountList from "./components/AccountList";
import Modal from "./components/Modal";
import "./App.css";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPasswords, setShowPasswords] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    </div>
  );
};

export default App;
