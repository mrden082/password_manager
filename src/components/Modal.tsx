import React, { useRef } from "react";
import { Account, useAccountStore } from "../store";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const addAccount = useAccountStore((state) => state.addAccount);

  const handleSave = () => {
    const account: Account = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
      url: urlRef.current!.value,
    };
    addAccount(account);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">
          &times;
        </span>
        <h2>Add Account</h2>
        <div>
          <input type="text" ref={usernameRef} placeholder="Enter username" />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
          />
          <input type="text" ref={urlRef} placeholder="Enter URL" />
        </div>

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
