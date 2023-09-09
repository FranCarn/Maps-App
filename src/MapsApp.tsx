import { PlacesProvider } from "./context";
import { Home } from "./screens";

import "./styles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <Home />
    </PlacesProvider>
  );
};
