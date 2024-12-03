import logo from '../../img/logo-mezze.png'
import '../../estilo.css'
import '../../routes/routes'
export default function HomeHeader() {
    return (
        <header>
            <img src={logo} alt="logo-mezze" />
            <nav>
                <ul>
                    <li className="link"><a className='active' href="/"></a>Home</li>
                    <li className="link"><a href="/sobre"></a>Sobre mim</li>
                    <li className="link"><a href="/projetos"></a>Projetos</li>
                </ul>
            </nav>
        </header>
    )
}