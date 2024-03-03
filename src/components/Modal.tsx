import React, { useState, useEffect } from 'react';
import { Account, ModalCombinedProps } from './interfaces';
import { useAccountStore } from '../store';

const Modal: React.FC<ModalCombinedProps> = ({
  onClose,
  onSaveAccount,
  onCloseModalTwo,
  onSaveAccountTwo,
  selectedAccount,
  selectedAccountTwo,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);

  useEffect(() => {
    if (selectedAccount) {
      setUsername(selectedAccount.username);
      setPassword(selectedAccount.password);
      setUrl(selectedAccount.url);
    } else if (selectedAccountTwo) {
      setUsername(selectedAccountTwo.username);
      setPassword(selectedAccountTwo.password);
      setUrl(selectedAccountTwo.url);
    }
  }, [selectedAccount, selectedAccountTwo]);

  const handleSave = () => {
    if (!username || !password || !url) {
      setInvalidInput(true);
      return;
    }

    const account: Account = {
      username,
      password,
      url,
    };
    
    if (selectedAccount) {
      onSaveAccountTwo(account);
    } else {
      onSaveAccount(account);
    }

    setInvalidInput(false);
    setUsername('');
    setPassword('');
    setUrl('');
  };

  const handleClose = () => {
    if (selectedAccount) {
      onCloseModalTwo();
    } else {
      onClose();
    }
    
    setInvalidInput(false);
    setUsername('');
    setPassword('');
    setUrl('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
      <h2>{selectedAccount ? 'Изменить Аккаунт' : 'Добавить Аккаунт'}</h2>
      <button className="close" type="button" onClick={handleClose}>X</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="inputs">
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        {invalidInput && (
          <p className="error">Пожалуйста, заполните все поля.</p>
        )}
          <button className='save-btn' type="submit" onClick={handleSave}>
            {selectedAccount ? 'Сохранить' : 'Добавить'}
          </button>
      </form>
      </div>
    </div>
  );
};

export default Modal;
