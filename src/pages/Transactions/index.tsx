import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { ColumnPrice, TransactionsContainer, TransactionsTable } from "./styles";
import { api } from "../../utils/api";
import { TransactionsContext } from "../../contexts/transactionContext";
import { dateFormatter, priceFormattter } from "../../utils/formatter";

export function Transactions() {

  const {transactions} = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
          <TransactionsTable >
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr>
              <td width='50%'>{transaction.title}</td>
              <ColumnPrice typeTransaction={transaction.type}>{priceFormattter.format(transaction.amount)}</ColumnPrice>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.create_at))}</td>
            </tr>
  
            )
          })}
         
        </tbody>
      </TransactionsTable>
       </TransactionsContainer>
    </div>
  )
}