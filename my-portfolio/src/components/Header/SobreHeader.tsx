import Logo from '../../../public/favicon.ico'
import '../../style/estilo.css'
import '../../routes/routes'
export default function SobreHeader() {
    return (
        <header>
            <img src={Logo} alt="logo-mezze" />
            <nav>
                <ul className='cabecalho'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">Sobre mim</a></li>
                    <li><a href="/projetos">Projetos</a></li>
                </ul>
            </nav>
        </header>
    );
};