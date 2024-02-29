import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Account {
  username: string;
  password: string;
  url: string;
}

type AccountStore = {
  accounts: Account[];
  selectedAccount: Account | null;
  addAccount: (account: Account) => void;
  editAccount: (account: Account) => void;
  setAccounts: (accounts: Account[]) => void;
};

export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      accounts: [],
      selectedAccount: null,
      addAccount: (account) =>
        set((state) => ({
          accounts: [...state.accounts, account],
          selectedAccount: null,
        })),
      editAccount: (account) =>
        set((state) => ({
          accounts: state.accounts.map((acc) =>
            acc === state.selectedAccount ? account : acc
          ),
          selectedAccount: null,
        })),
      setAccounts: (accounts) =>
        set((state) => ({
          ...state,
          accounts: accounts,
        })),
    }),
    { name: "accountStore" }
  )
);
