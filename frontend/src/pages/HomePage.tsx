import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
import Agsm from '../components/cards/Agsm';
import Ainsworth from '../components/cards/Ainsworth';
import Anitab from '../components/cards/Anitab';
import BiologicalScience from '../components/cards/BioSci';
import BiologicalScienceWest from '../components/cards/BioSciWest';
import Blockhouse from '../components/cards/Blockhouse';
import BusinessSchool from '../components/cards/BusinessSchool';
import CivilBuilding from '../components/cards/CivilBuilding';
import Colombo from '../components/cards/Colombo';
import CseBuilding from '../components/cards/CseBuilding';

function HomePage() {
    return (
        <div >
            {/* <h1>Home Page :3</h1> */}
            <Header/>
            <SearchBar/>

            <Agsm/>
            <Ainsworth/>
            <Anitab/>
            <BiologicalScience/>
            <BiologicalScienceWest/>
            <Blockhouse/>
            <BusinessSchool/>
            <CivilBuilding/>
            <Colombo/>
            <CseBuilding/>

        </div>
    );
}

export default HomePage;