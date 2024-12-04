import '../../estilo.css'
import '../../img/porto.png'

export default function ProjetosCard () {
    return (
<div className="p-container">
            <h1>Projetos</h1>
            <div className="pcard">
                <h2>BlueOcean</h2>
                <a href="https://blueoceann.netlify.app/"><img src="https://blueoceann.netlify.app/" alt="blueocean" /></a>
                <p>Projeto Front End para a conscientização da poluição marinha.</p>
            </div>
            <div className="pcard">
                <h2>Portfólio</h2>
                <a href=""><img src="]" alt="" /></a>
                <p>Projeto Front End para apresentar minhas habilidades.</p>
            </div>
            <div className='pcard'>
                <h2>Porto Seguro</h2>
                <a href="https://caseportofiap.netlify.app/"><img src="" alt="" /></a>
                <p>Case da faculdade Fiap com a Porto Seguro.</p>
            </div>
            <div className="pcard">
                <h2>Portfólio de Avaliações</h2>
                <a href=""></a>
                <p>Projeto Full-Stack para mostrar notas dos alunos.</p>
            </div>
            </div>
    );
};