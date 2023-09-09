import { useContext } from "react";
import { PlacesContext } from "../context";
import { Loader } from "./";

export const MapView = () => {
  const { userLocation, isLoading } = useContext(PlacesContext);

  if (isLoading) {
    return <Loader />;
  }

  return <div>{userLocation?.join(",")}</div>;
};
