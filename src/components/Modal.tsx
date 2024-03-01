import React, { useState } from 'react';
import { Account } from './store';

interface ModalProps {
  onClose: () => void;
  onSaveAccount: (account: Account) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onSaveAccount }) => {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const urlRef = React.useRef<HTMLInputElement>(null);

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

    onSaveAccount(account);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">
          &times;
        </span>
        <h2>Добавить Аккаунт</h2>
        <div>
          <input
            type="text"
            ref={usernameRef}
            placeholder="Введите логин"
            className={invalidInput ? 'invalid-input' : ''}
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Введите пароль"
            className={invalidInput ? 'invalid-input' : ''}
          />
          <input
            type="text"
            ref={urlRef}
            placeholder="Введите URL"
            className={invalidInput ? 'invalid-input' : ''}
          />
        </div>
        <button className="save-btn" onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default Modal;
