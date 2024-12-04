import Header from "../../components/Header/HomeHeader";
import MainContent from "../../components/Main/HomeMain";
import Rodape from "../../components/Rodape/Rodape";
import '../../estilo.css'

export default function Home() {
    return (
        <div>
            <Header />
            <MainContent />
            <Rodape />
        </div>
    );
};