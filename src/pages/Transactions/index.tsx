import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { ColumnPrice, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
          <TransactionsTable >
        <tbody>
          <tr>
            <td width='50%'>Desenvolvimento do site</td>
            <ColumnPrice typeTransaction="income">R$ 17.400,00</ColumnPrice>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>

          <tr>
            <td width='50%'>Hamburguer</td>
            <ColumnPrice typeTransaction="outcome">R$ 400,00</ColumnPrice>
            <td>Alimentação</td>
            <td>15/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
       </TransactionsContainer>
    </div>
  )
}