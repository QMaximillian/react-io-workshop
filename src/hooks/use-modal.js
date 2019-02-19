import React, {useEffect, useState, forwardRef} from 'react';
import {createPortal} from 'react-dom';
import styled from '@emotion/styled';

export function useModal(content, delay) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), (delay || 1000));
    return () => clearTimeout(timer);
  });

  const ModalComponent = forwardRef((props, ref) => (
      <>
        {visible && (createPortal(<Modal ref={ref}>{content}</Modal>, document.body))}
      </>
  ));


  return {visible, setVisible, Modal: ModalComponent}
}

const Modal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: calc(50% - 150px);
  width: 300px;
  height: 50px;
  border-bottom: 1px solid red;
  border-left: 1px solid red;
  border-right: 1px solid red;
  background-color: white;      
`;

