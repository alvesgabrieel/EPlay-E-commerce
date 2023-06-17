import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

//background-image da mais controle sobre o posicionamento da imagem
export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover; //ocupa toda largura disponivel
  font-weight: bold;

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; //faz que com inicie da parte de baixo, ou seja, faz com que o botao nao fique tao grande.
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
