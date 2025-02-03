import '../../style/estilo.css'
import blue from '../../img/blueocean.png'
import port from '../../img/portfolio.png'
import porto from '../../img/porto.png'

export default function ProjetosCard () {
    return (
<div className="p-container">
            <h1>Projetos</h1>
            <div className="pcard">
                <a href="https://blueoceann.netlify.app/"><img src={blue} width={290} height={150} alt="blueocean" /></a>
                <h2>BlueOcean</h2>
                <p>Projeto Front End para a conscientização da poluição marinha.</p>
            </div>
            <div className="pcard">
                <a href="https://mezzedev.vercel.app/"><img src={port} width={290} height={150} alt="portfolio" /></a>
                <h2>Portfólio</h2>
                <p>Projeto Front End para apresentar minhas habilidades.</p>
            </div>
            <div className='pcard'>
                <a href="https://challengefiap.vercel.app/"><img src={porto} width={290} height={150} alt="porto" /></a>
                <h2>Porto Seguro</h2>
                <p>Case da faculdade Fiap com a Porto Seguro.</p>
            </div>
            </div>
    );
};