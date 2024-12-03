import '../../routes/routes'
import '../../estilo.css'
import Card from '../Cards/CardPerfil'
export default function MainContent() {
    return (
    <div className="container-home">
        <div>
        <Card />
        </div>
        <div className='card-content'>
        <h1>Gabriela Gomes</h1>
        <p>Desenvolvimento Front End <br />
        Sou uma desenvolvedora web fascinada, com foco na <br /> construção de sites modernos, interativos e fáceis de usar.
        </p>
        <div className='bnt-container'>
            <a href='/sobre' className="sb">saiba mais</a>
            <a href='' className="bntc">currículo</a>
            </div>
        </div>
    </div>
    );
};