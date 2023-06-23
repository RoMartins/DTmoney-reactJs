import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./styles"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/transactionContext"

export function SearchForm() {  
  const {loadTransactions} = useContext(TransactionsContext)

  const {register, handleSubmit, formState:{isSubmitting}} = useForm<SearchTransactionInput>()
  type SearchTransactionInput ={
    query : string
  }
  function handleSearchTransactions(data: SearchTransactionInput) {
    loadTransactions(data.query)
  }

  return(

    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input 
          type="text" 
          placeholder="Busque por transações" 
          {...register('query')}
          />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
    </SearchFormContainer>
  )
}