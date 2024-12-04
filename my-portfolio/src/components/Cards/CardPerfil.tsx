import perfil from '../../img/perfil.jpg'

export default function CardPerfil() {
    return (
        <div className='img-container'>
            <img src={perfil} width={400} height={400} alt="foto-gabriela" />
        </div>
    )
}