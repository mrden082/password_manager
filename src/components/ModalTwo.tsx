import React, { useState } from "react";
import { useAccountStore, Account } from "./store";

interface ModalTwoProps {
  onClose: () => void;
}

const ModalTwo: React.FC<ModalTwoProps> = ({ onClose }) => {
  const selectedAccount = useAccountStore((state) => state.selectedAccount);
  const [editedUsername, setEditedUsername] = useState<string>(selectedAccount?.username || "");
  const [editedPassword, setEditedPassword] = useState<string>(selectedAccount?.password || "");
  const [editedUrl, setEditedUrl] = useState<string>(selectedAccount?.url || "");

  const handleSave = () => {
    if (selectedAccount) {
      const updatedAccount: Account = {
        ...selectedAccount,
        username: editedUsername,
        password: editedPassword,
        url: editedUrl,
      };

      useAccountStore.getState().editAccount(updatedAccount);
    }

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">
          &times;
        </span>
        <h2>Изменить Аккаунт</h2>

        {selectedAccount && (
          <>
            <p>
              Логин:{" "}
              <input
                type="text"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
            </p>
            <p>
              Пароль:{" "}
              <input
                type="text"
                value={editedPassword}
                onChange={(e) => setEditedPassword(e.target.value)}
              />
            </p>
            <p>
              URL:{" "}
              <input
                type="text"
                value={editedUrl}
                onChange={(e) => setEditedUrl(e.target.value)}
              />
            </p>

            <button onClick={handleSave}>Сохранить</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalTwo;
