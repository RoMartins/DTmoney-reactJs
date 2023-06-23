import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../utils/api';

interface Transaction {
  id: number;
  title: string;
  type: 'income' | 'outcome';
  amount: number;
  category: string;
  create_at: string;
}

interface newTransactionProps {
  title : string;
  amount: string;
  category: string;
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[];
  loadTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: newTransactionProps ) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(query?: string) {
    if(query) {
      const response = await api.get('/transactions', {
        params: {
          query: query
        }
      }) 
      const data = response.data.filteredTransactions
 
      setTransactions(data)
    } else {
      const response = await api.get('/transactions') 
      const data = response.data.transactions
      console.log(data)
 
      setTransactions(data)
    }
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  async function  createNewTransaction(data: newTransactionProps) {
    const {
      amount,
      category,
      title,
      type }  = data

      const amountNumber = Number(amount)

       const response = await api.post('/transactions', {
          amount: amountNumber,
          category,
          title,
          type
        })

        const newTransactions = response.data[0]

        setTransactions(state => [newTransactions,...state])
  }

 

  return (
    <TransactionsContext.Provider value={{ transactions, loadTransactions, createNewTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}