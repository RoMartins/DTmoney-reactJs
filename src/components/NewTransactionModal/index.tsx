import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from './style'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/transactionContext'
import { api } from '../../utils/api'


export function NewTransactionModal({closeModal}) {

  const newTransactionFormSchema = z.object({
    title : z.string(),
    amount: z.string(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
  })

  type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

  const {register, control, handleSubmit, formState: {isSubmitting}} = useForm<newTransactionFormInputs>({
    resolver : zodResolver(newTransactionFormSchema)
  })


  async function  handleNewTransaction(data: newTransactionFormInputs) {

    const {
      amount,
      category,
      title,
      type }  = data

      const amountNumber = Number(amount)

      try {
        await api.post('/transactions', {
          amount: amountNumber,
          category,
          title,
          type
        })
      } catch (error) {
        console.log(error)
      }
    
      closeModal(false)
  }

  return (
    <Dialog.Portal>
    <Overlay/>
    <Content>
      <Dialog.Title>Nova transação</Dialog.Title>
      <Close asChild>
        < X size={24}/>
      </Close>

      <form onSubmit={handleSubmit(handleNewTransaction)}>
        <input 
        type="text" 
        {...register('title')}
        placeholder='Descrição' required/>
        <input 
        type="text" 
        {...register('amount')}
        placeholder='Preço' required/>
        <input 
        type="text" 
        {...register('category')}
        placeholder='Categoria' required/>

        <Controller 
          control={control}
          name='type'
          render={({field}) => {

           return(
            <TransactionType onValueChange={field.onChange} value={field.value}>
            <TransactionTypeButton value='income'variant='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24}/>
              Saída
            </TransactionTypeButton>
        </TransactionType>
           )
          }}
        
        />
     
        <button type="submit" disabled={isSubmitting}>
          Cadastrar
        </button>
      </form>

    
    </Content>
  </Dialog.Portal>

  )
}