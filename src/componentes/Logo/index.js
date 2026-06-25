import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
    width: 40px;
    height: auto;
`


function Logo() {
    return (
        <LogoContainer>
            <LogoImg 
                src={logo} 
                alt='logo da alura books'
            />
          
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;