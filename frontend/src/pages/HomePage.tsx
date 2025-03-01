// import LeadGrid from "../components/LeadGrid";
// import FreeRoomsLogo from '../assets/freeRoomsLogo.png';
import ActionAreaCard from '../components/ActionAreaCard';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar';

function HomePage() {
    return (
        <div >
            <Header/>
            <SearchBar/>
            <ActionAreaCard/>
            {/* <h1>Home Page :3</h1> */}
        </div>
    );
}

export default HomePage;