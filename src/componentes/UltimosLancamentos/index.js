import { livros } from './dadosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const LivrosContainer = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LivroImg = styled.img`
    width: 150px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00' 
                tamanhoFonte='36px'
                >Últimos Lançamentos
            </Titulo>

            <LivrosContainer>
                {livros.map( livro => (
                    <LivroImg key={livro.id} src={livro.src} alt={livro.nome} />
                ))}
            </LivrosContainer>

            <CardRecomenda 
                titulo='Talvez você se interesse por ...'
                subtitulo='Angula 11'
                descricao='Construino uma aplicação com a plataforma Goglee'
                img={imagemLivro}
            />

        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos