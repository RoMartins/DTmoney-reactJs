import * as Dialog from '@radix-ui/react-dialog'
import * as Radio from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vh;
inset: 0;
background: rgba(0,0,0,0.75);

`

export const Content = styled(Dialog.Content)`
min-width: 32rem;
border-radius: 6px;
padding: 2.5rem 3rem;
background: ${props => props.theme['gray-800']};
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
    color: ${props => props.theme['gray-500']};

    }
   
  
  }

  button[type="submit"] {
      height: 58px;
      border: 0;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    border-radius: 6px;
    margin-top: 1.5rem;
    padding: 0 1.25rem;
    font-weight: bold;
    cursor: pointer;
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  
    &:not(:disabled):hover {
      background: ${props => props.theme['green-700']};
      transition: background-color 0.2s;
    }
    } 
}


`

export const Close = styled(Dialog.Close)`

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;

`
export const TransactionType = styled(Radio.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`


interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}
export const TransactionTypeButton = styled(Radio.Item)<TransactionTypeButtonProps>`
 display: flex;
padding: 1rem;
align-items: center;
justify-content: center;
gap: 0.5rem;
border-radius: 6px;
border: 0;
cursor: pointer;
background: ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-300']};

svg {
  color : ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};

}

&[data-state='checked'] {
  color: ${props => props.theme.white};
  background : ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
  
  svg {
    color: ${props => props.theme.white};
  }
}

&[data-state='unchecked']:hover {
  background : ${props =>props.theme['gray-600']};

  }
`