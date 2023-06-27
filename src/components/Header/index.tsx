import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoIMG from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseModal(status: boolean) {
    setIsOpen(status)
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIMG} alt="" />

        <Dialog.Root open={isOpen} onOpenChange={handleCloseModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal closeModal={handleCloseModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
