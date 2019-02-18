import React from 'react';
import {PageContainer} from "../shared/Layout";
import {useResource} from "../../hooks/use-resource";

const Burgers = () => {
  const burgers = useResource({path: 'burgers'});

  return (
      <>
        <PageContainer>
          <h1>Burger Places</h1>
          <pre>{JSON.stringify(burgers)}</pre>
        </PageContainer>
      </>
  );
};

export default Burgers;