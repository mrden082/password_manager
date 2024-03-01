import React, { useState, useEffect } from "react";
import { Account } from "./interfaces";

interface ModalTwoProps {
  onClose: () => void;
  selectedAccount: Account | null;
  onSaveAccount: (updatedAccount: Account) => void;
}

const ModalTwo: React.FC<ModalTwoProps> = ({
  onClose,
  selectedAccount,
  onSaveAccount,
}) => {
  const [editedAccount, setEditedAccount] = useState<Account | null>(null);
  const [editedUsername, setEditedUsername] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedUrl, setEditedUrl] = useState("");

  useEffect(() => {
    if (selectedAccount) {
      setEditedAccount(selectedAccount);
      setEditedUsername(selectedAccount.username);
      setEditedPassword(selectedAccount.password);
      setEditedUrl(selectedAccount.url);
    }
  }, [selectedAccount]);

  const handleSave = () => {
    if (editedAccount) {
      const updatedAccount: Account = {
        ...editedAccount,
        username: editedUsername,
        password: editedPassword,
        url: editedUrl,
      };

      onSaveAccount(updatedAccount);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close">
          &times;
        </span>
        <h2>Изменить Аккаунт</h2>

        {editedAccount && (
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