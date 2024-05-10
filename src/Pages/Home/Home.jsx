import { Helmet } from "react-helmet-async";
import logoHome from "../../assets/images/home.png"
import Banner from "./Banner";
const Home = () => {
    return (
        <div >

<Helmet>
<link rel="icon" type="image/svg+xml" href={logoHome} />
<title>RestaurantRealm || Home</title>
</Helmet>
<Banner></Banner>
        
        </div>
    );
};

export default Home;