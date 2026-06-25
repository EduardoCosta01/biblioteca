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


const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE',  'FAVORITOS']

function OpcoesHeader() {
    return(
        <OpcoesContainer>
          { textoOpcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader