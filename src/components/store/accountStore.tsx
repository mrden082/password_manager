import create, { GetState } from 'zustand';

interface Account {
  username: string;
  password: string;
  url: string;
}

type AccountStore = {
  accounts: Account[];
  showModal: boolean;
  showPasswords: boolean;
  setShowModal: (show: boolean) => void;
  handleShowPasswords: () => void;
  addAccount: (account: Account) => void;
};

const useAccountStore = create<AccountStore>((set, get) => ({
  accounts: [],
  showModal: false,
  showPasswords: false,
  setShowModal: (show) => set({ showModal: show }),
  handleShowPasswords: () => set((state) => ({ showPasswords: !state.showPasswords })),
  addAccount: (account) =>
    set((state) => {
      const newAccounts = [...state.accounts, account];
      localStorage.setItem('accounts', JSON.stringify(newAccounts));
      return { accounts: newAccounts };
    }),
}));

const initializeStore = () => {
  const storedAccounts = localStorage.getItem('accounts');
  const initialAccounts: Account[] = storedAccounts ? JSON.parse(storedAccounts) : [];

  useAccountStore.setState((state) => ({
    ...state,
    accounts: initialAccounts,
  }));
};

initializeStore();

export { useAccountStore };
