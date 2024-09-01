import backgroundImage from "../assets/background-image.jpg";
const Home = () => {
  return (
    <div className=" bg-homeBackgroundImage bg-center bg-cover h-screen">
      <img src={backgroundImage} />
    </div>
  );
};

export default Home;
