import React from 'react';
import {PageContainer} from "../shared/Layout";
import {useResource} from "../../hooks/use-resource";
import PlaceCard from "../shared/PlaceCard";

const Burgers = () => {
  const burgers = useResource({path: 'burgers'});

  return (
      <>
        <PageContainer>
          <h1>Burger Places</h1>
          { burgers.map( place => <PlaceCard key={place.id} place={place} />)}
        </PageContainer>
      </>
  );
};

export default Burgers;