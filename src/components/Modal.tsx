<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { useAccountStore, Account } from "./store";
=======
import React, { useRef } from "react";
import { Account, useAccountStore } from "../store";
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const addAccount = useAccountStore((state) => state.addAccount);
<<<<<<< HEAD

  const [invalidInput, setInvalidInput] = useState<boolean>(false);

  const handleSave = () => {
    const username = usernameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    const url = urlRef.current?.value.trim();

    if (!username || !password || !url) {
      setInvalidInput(true);
      return;
    }

    const account: Account = {
      username,
      password,
      url,
    };

=======

  const handleSave = () => {
    const account: Account = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
      url: urlRef.current!.value,
    };
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55
    addAccount(account);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">
          &times;
        </span>
<<<<<<< HEAD
        <h2>Добавить Аккаунт</h2>
        <div>
          <input
            type="text"
            ref={usernameRef}
            placeholder="Введите логин"
            className={invalidInput ? "invalid-input" : ""}
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Введите пароль"
            className={invalidInput ? "invalid-input" : ""}
          />
          <input
            type="text"
            ref={urlRef}
            placeholder="Введите URL"
            className={invalidInput ? "invalid-input" : ""}
          />
=======
        <h2>Add Account</h2>
        <div>
          <input type="text" ref={usernameRef} placeholder="Enter username" />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
          />
          <input type="text" ref={urlRef} placeholder="Enter URL" />
>>>>>>> c437d49a94a4ea80e8321b2fa386a83fb2347a55
        </div>
        <button className="save-btn" onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default Modal;
