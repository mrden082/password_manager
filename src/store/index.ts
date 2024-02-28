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
};

export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      accounts: [],
      addAccount: (account) =>
        set((state) => ({
          accounts: [...state.accounts, account],
        })),
    }),
    { name: "accountStore" },
  ),
);
