import { Helmet } from "react-helmet-async";
import logoHome from "../../assets/images/home.png";
import Banner from "./Banner";
import WhatsPopular from "./WhatsPopular";
import ViewDishes from "./ViewDishes";

const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={logoHome} />
        <title>RestaurantRealm || Home</title>
      </Helmet>
      <Banner></Banner>
      <WhatsPopular></WhatsPopular>
      <ViewDishes></ViewDishes>
    </div>
  );
};

export default Home;
