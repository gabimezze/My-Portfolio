import Logo from '../../../public/favicon.ico'
import '../../estilo.css'
import '../../routes/routes'
export default function ProjetosHeader() {
    return (
        <header className='cabecalho'>
            <img src={Logo} alt="logo-mezze" />
            <nav>
                <ul>
                    <li className="link"><a href="/"></a>Home</li>
                    <li className="link"><a href="/sobre"></a>Sobre mim</li>
                    <li className="link"><a className='active' href="/projetos"></a>Projetos</li>
                </ul>
            </nav>
        </header>
    )
}