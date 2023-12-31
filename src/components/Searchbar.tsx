import { ChangeEvent, useContext, useRef } from "react";
import { SearchResults } from ".";
import { PlacesContext } from "../context";

export const Searchbar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search place..."
        onChange={onQueryChanged}
      />

      <SearchResults />
    </div>
  );
};
