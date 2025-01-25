import Logo from '../../../public/favicon.ico'
import '../../estilo.css'
import '../../routes/routes'
export default function ProjetosHeader() {
    return (
        <header className='cabecalho'>
            <img src={Logo} alt="logo-mezze" />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre mim</a></li>
                    <li><a href="/projetos">Projetos</a></li>
                </ul>
            </nav>
        </header>
    );
};