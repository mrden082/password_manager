import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Account {
  username: string;
  password: string;
  url: string;
}

type AccountStore = {
  accounts: Account[];
  addAccount: (account: Account) => void;
  getAccountById: (id: number) => Account;
};

export const useAccountStore = create<AccountStore>()(
  persist(
    (set, get) => ({
      accounts: [],
      addAccount: (account) =>
        set((state) => ({
          accounts: [...state.accounts, account],
        })),
      getAccountById: (id: number) => get().accounts[id],
    }),
    { name: "accountStore" },
  ),
);
