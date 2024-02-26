import React, { useState } from 'react';
import { useAccountStore } from './store/accountStore';

interface ModalProps {
  onSave: (account: Account) => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onSave, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const handleSave = () => {
    const account: Account = { username, password, url };
    onSave(account);
    setUsername('');
    setPassword('');
    setUrl('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">&times;</span>
        <h2>Add Account</h2>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
