import '../../style/estilo.css'
import '../../img/porto.png'

export default function ProjetosCard () {
    return (
<div className="p-container">
            <h1>Projetos</h1>
            <div className="pcard">
                <a href="https://blueoceann.netlify.app/"><img src="/src/img/blueocean.png" width={290} height={150} alt="blueocean" /></a>
                <h2>BlueOcean</h2>
                <p>Projeto Front End para a conscientização da poluição marinha.</p>
            </div>
            <div className="pcard">
                <a href=""><img src="src/img/portfolio.png" width={290} height={150} alt="portfolio" /></a>
                <h2>Portfólio</h2>
                <p>Projeto Front End para apresentar minhas habilidades.</p>
            </div>
            <div className='pcard'>
                <a href="https://caseportofiap.netlify.app/"><img src="/src/img/porto.png" width={290} height={150} alt="porto" /></a>
                <h2>Porto Seguro</h2>
                <p>Case da faculdade Fiap com a Porto Seguro.</p>
            </div>
            <div className="pcard">
                <a href=""><img src="/src/img/portavaliacoes.png" width={290} height={150} alt="Portofólio Avaliações" /></a>
                <h2>Portfólio de Avaliações</h2>
                <p>Projeto Full-Stack para mostrar notas dos alunos.</p>
            </div>
            </div>
    );
};