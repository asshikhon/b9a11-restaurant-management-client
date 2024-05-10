import { Helmet } from "react-helmet-async";
import logoHome from "../../assets/images/home.png"
const Home = () => {
    return (
        <div>

<Helmet>
<link rel="icon" type="image/svg+xml" href={logoHome} />
<title>RestaurantRealm || Home</title>
</Helmet>

            <h2>this is home</h2>
        </div>
    );
};

export default Home;