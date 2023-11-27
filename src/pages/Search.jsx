/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <li key={character.location.id}>{character.location.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
