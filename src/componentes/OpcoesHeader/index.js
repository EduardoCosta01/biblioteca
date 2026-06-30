import { Link } from 'react-router-dom'
import styled from 'styled-components'

const OpcoesContainer = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`


const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return(
        <OpcoesContainer>
          { textoOpcoes.map((texto) => (
            <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader