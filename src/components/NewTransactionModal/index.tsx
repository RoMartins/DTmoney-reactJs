import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from './style'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'


export function NewTransactionModal() {

  return (

    <Dialog.Portal>
    <Overlay/>
    <Content>
      <Dialog.Title>Nova transação</Dialog.Title>
      <Close asChild>
        < X size={24}/>
      </Close>

      <form action="">
        <input type="text" placeholder='Descrição' required/>
        <input type="text" placeholder='Preço' required/>
        <input type="text" placeholder='Categoria' required/>

        <TransactionType>
            <TransactionTypeButton value='income'variant='income'>
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24}/>
              Saída
            </TransactionTypeButton>
        </TransactionType>
     
        <button type="submit">
          Cadastrar
        </button>
      </form>

    
    </Content>
  </Dialog.Portal>
  )
}