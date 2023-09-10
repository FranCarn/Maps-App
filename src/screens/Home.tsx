import { BtnMyLocation, MapView, ReactLogo, Searchbar } from "../components";

export const Home = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <Searchbar />
    </div>
  );
};
