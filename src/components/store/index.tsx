import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Account } from "../interfaces";

type AccountState = {
  accounts: Account[];
  setAccounts: (accounts: Account[]) => void;
  addAccount: (account: Account) => void;
  deleteAccount: (account: Account) => void;
  editAccount: (account: Account) => void;
};

export const useAccountStore = create<AccountState>() (
  devtools(
    persist(
      (set) => ({
        accounts: [],
        setAccounts: (accounts) => set({ accounts }),
        addAccount: (account) =>
          set((state) => ({ accounts: [...state.accounts, account] })),
        deleteAccount: (account) =>
          set((state) => ({
            accounts: state.accounts.filter((acc) => acc !== account),
          })),
        editAccount: (account) =>
          set((state) => ({
            accounts: state.accounts.map((acc) =>
              acc === state.selectedAccount ? account : acc
            ),
          })),
      }),
      {
        name: "accountStore",
        getStorage: () => sessionStorage,
      }
    )
  )
);
