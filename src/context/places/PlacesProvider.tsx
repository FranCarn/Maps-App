import React from "react";
import { PlacesContext } from "./placesContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: Props) => {
  return (
    <PlacesContext.Provider value={INITIAL_STATE}>
      {children}
    </PlacesContext.Provider>
  );
};
