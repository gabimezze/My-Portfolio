import perfil from '../../img/perfil.jpg'

export default function CardPerfil() {
    return (
        <div className='img-container'>
            <img src={perfil} width={320} height={320} alt="foto-gabriela" />
        </div>
    )
}