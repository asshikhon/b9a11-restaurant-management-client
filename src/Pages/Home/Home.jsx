import { Helmet } from "react-helmet-async";
import logoHome from "../../assets/images/home.png";
import Banner from "./Banner";
import WhatsPopular from "./WhatsPopular";
import OurServices from "./OurServices";
const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={logoHome} />
        <title>RestaurantRealm || Home</title>
      </Helmet>
      <Banner></Banner>
      <WhatsPopular></WhatsPopular>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
