import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Account, AccountStore } from '../components/interfaces';

export const useAccountStore = create<AccountStore>() (
  persist(
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
        set((state) => ({
          accounts: state.accounts.map((acc) =>
            acc === updatedAccount ? updatedAccount : acc
          ),
        }));
      },
      searchAccounts: (query: string) => {
        set((state) => ({
          accounts: state.accounts.filter(
            (acc) =>
              acc.username.toLowerCase().includes(query.toLowerCase()) ||
              acc.url.toLowerCase().includes(query.toLowerCase())
          ),
        }));
      },
    }),
    {
      name: 'accountStore',
      getStorage: () => sessionStorage,
    }
  )
);
