import React, {useRef, useLayoutEffect} from 'react';
import {PageContainer} from "../shared/Layout";
import {useResource} from "../../hooks/use-resource";
import PlaceCard from "../shared/PlaceCard";
import {useModal} from "../../hooks/use-modal";
import {useClickOutside} from "../../hooks/use-click-outside";

const Burgers = () => {
  const burgers = useResource({path: 'burgers'});
  const modalRef = useRef();
  const {setVisible, Modal} = useModal('some content', 10000);

  useClickOutside(modalRef, () => setVisible(false));

  return (
      <>
        <PageContainer>
          <h1>Burger Places</h1>
          { burgers.map( place => <PlaceCard key={place.id} place={place} />)}
          <Modal ref={modalRef}/>
          <button onClick={() => setVisible(true)}>show</button>
          <button onClick={() => setVisible(false)}>hide</button>
        </PageContainer>
      </>
  );
};

export default Burgers;