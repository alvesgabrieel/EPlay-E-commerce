import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

//background-image da mais controle sobre o posicionamento da imagem
export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover; //ocupa toda largura disponivel
  font-weight: bold;
  position: relative;

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; //faz que com inicie da parte de baixo, ou seja, faz com que o botao nao fique tao grande.
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
