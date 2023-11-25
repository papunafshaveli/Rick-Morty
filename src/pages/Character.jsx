/* eslint-disable no-unused-vars */
import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const CharacterDiv = styled.div`
  display: flex;

  img {
    width: 750px;
  }
`;

const CharacterContent = styled.div`
  margin-left: 2rem;
`;

const CharacterEpisode = styled.div`
  margin-top: 2rem;
`;

const Character = () => {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something went wrong...</h1>;
  return (
    <CharacterDiv>
      <img src={data.character.image} alt="Character Image" />
      <CharacterContent>
        <h1>{data.character.name}</h1>
        <CharacterEpisode>
          {data.character.episode.map((episode) => {
            return (
              <div key={episode.id}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </CharacterEpisode>
      </CharacterContent>
    </CharacterDiv>
  );
};

export default Character;
