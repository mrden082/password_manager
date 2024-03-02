import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Account, AccountStore } from "../components/interfaces";

export const useAccountStore = create<AccountStore>() (persist(
  (set) => ({
    accounts: [] as Account[],
    addAccount: (account: Account) => {
      set((state) => ({
        accounts: [...state.accounts, account],
      }));
    },
    deleteAccount: (account: Account) => {
      set((state) => ({
        accounts: state.accounts.filter((acc) => acc !== account),
      }));
    },
    editAccount: (updatedAccount: Account) => {
      set(
        produce((state) => {
          const index = state.accounts.findIndex(
            (account) => account.id === updatedAccount.id
          );
          if (index !== -1) {
            state.accounts[index] = updatedAccount;
          }
        })
      );
    },
  }),
  {
    name: "accountStore",
    getStorage: () => sessionStorage,
  }
));
