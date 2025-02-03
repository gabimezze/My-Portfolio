import '../../routes/routes'
import '../../style/estilo.css'
import Card from '../Cards/CardPerfil'
import curriculo from '../../pdf/curriculoGabriela.pdf'

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
            <a href={curriculo} className="bntc">currículo</a>
            </div>
        </div>
    </div>
    );
};