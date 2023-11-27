/* eslint-disable no-unused-vars */
import React from "react";

import styled from "styled-components";

import { useCharacters } from "../hooks/useCharacters";

import { Link } from "react-router-dom";

import { FaArrowAltCircleDown } from "react-icons/fa";
import Search from "./Search";

const WrapperAll = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  background-color: goldenrod;
  height: 100%;
  width: 100%;
  h1 {
    text-align: center;
    padding-bottom: 30px;
  }
`;

const CharactersListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  img {
    border-radius: 50%;
  }

  h2 {
    text-align: center;

    padding: 30px 0;
  }
`;

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong...</h1>;

  return (
    <WrapperAll>
      <Link to="/search" style={{ fontSize: "25px" }}>
        Search
      </Link>
      <h1>Rick & Morty Characters</h1>
      <CharactersListDiv>
        {data.characters.results.map((character) => {
          return (
            <Link to={`/${character.id}`} key={character.id}>
              <h2>{character.name}</h2>
              <FaArrowAltCircleDown style={{ marginLeft: "45%" }} />
              <img src={character.image} alt="character image" />
            </Link>
          );
        })}
      </CharactersListDiv>
    </WrapperAll>
  );
};

export default CharactersList;
