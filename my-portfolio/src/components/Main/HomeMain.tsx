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
        <h2>Desenvolvimento Front End </h2>
        <p>Sou uma desenvolvedora web fascinada, <br /> com foco na construção de sites modernos, interativos e fáceis de usar.</p>
        <div className='bnt-container'>
            <a href='/sobre' className="sb">saiba mais</a>
            <a href='/src/pdf/curriculoGabriela.pdf' className="bntc">currículo</a>
            </div>
        </div>
    </div>
    );
};