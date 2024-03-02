export interface Account {
  username: string;
  password: string;
  url: string;
}

export interface AccountListProps {
accounts: Account[];
onEditAccount: (account: Account) => void;
onDeleteAccount: (account: Account) => void;
}

export interface ModalProps {
onClose: () => void;
onSaveAccount: (account: Account) => void;
}

export interface AccountStore {
accounts: Account[];
addAccount: (account: Account) => void;
deleteAccount: (account: Account) => void;
editAccount: (account: Account) => void;
}
