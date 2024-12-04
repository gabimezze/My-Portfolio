import Logo from '../../../public/favicon.ico'
import '../../estilo.css'
import '../../routes/routes'
export default function HomeHeader() {
    return (
        <header className='cabecalho'>
            <img src={Logo} alt="logo-mezze" />
            <nav>
                <ul>
                    <li><a className='active' href="/"></a>Home</li>
                    <li><a href="/sobre"></a>Sobre mim</li>
                    <li><a href="/projetos"></a>Projetos</li>
                </ul>
            </nav>
        </header>
    );
};