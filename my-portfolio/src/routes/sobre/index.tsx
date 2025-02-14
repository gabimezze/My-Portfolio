import SobreHeader from '../../components/Header/SobreHeader'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import email from '../../img/email.png'
import linkedin from '../../img/linkedin.png'
import Rodape from '../../components/Rodape/Rodape'
import '../../style/estilo.css'
export default function Sobre() {
    return (
        <div>
            <SobreHeader />
        <div className="sobre-container">
            <div className='redes-container'>
            <a href='https://www.linkedin.com/in/gabimezze/'><img src={linkedin} alt="linkedin" width={40} height={40} /></a>
            <a href='https://github.com/gabimezze'><img src={github} alt="github" width={40} height={40} /></a>
            <a href='https://www.instagram.com/gabimezze/'><img src={instagram} alt="instagram" width={40} height={40} /></a>
            <a href='mailto:contatogabim@outlook.com'><img src={email} alt="email" width={40} height={40} /></a>
            </div>
            <div className='texts-container'>
            <h1>Sobre Mim</h1>
            <p>Meu nome é Gabriela, tenho 19 anos, e a tecnologia sempre desempenhou um papel central em minha vida, despertando meu interesse desde cedo. Essa curiosidade crescente levou-me ao fascinante mundo da programação.
            Atualmente, estou cursando o terceiro semestre na FIAP e já possuo conhecimentos autodidatas adquiridos antes de iniciar a faculdade. Meu objetivo é evoluir constantemente como profissional, contribuindo 
            de maneira significativa para as equipes com as quais colaboro. Estou aberta a oportunidades que me permitam aplicar minhas habilidades e adquirir novos conhecimentos em tecnologias emergentes.</p>
            </div>
                <h1>Skills</h1>
                <div className='skill-container'>
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"} />
                <img alt="Gabi-Js" height={"40"} width={"40"} src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"} />
            </div>
        </div>
        <Rodape />
        </div>
    );
};