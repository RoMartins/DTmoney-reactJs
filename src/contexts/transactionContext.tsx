import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../utils/api';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
     const response = await api.get('/transactions') 
     const data = response.data.transactions
     console.log(data)

     setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions}}>
      {children}
    </TransactionsContext.Provider>
  );
}