import {useCallback, useReducer} from 'react';

export const ACTION = {
  UNDO: 'UNDO',
  REDO: 'REDO',
  SET: 'SET',
  CLEAR: 'CLEAR'
};

const initialState = {
  past: [],
  present: null,
  future: []
};

const reducer = (state, action) => {
  const {past, present, future} = state;

  switch (action.type) {
    case ACTION.UNDO:
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      };
    case ACTION.REDO:
      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };
    case ACTION.SET:
      const {newPresent} = action;

      return {
        past: [...past, present],
        present: {...state.present, ...newPresent},
        future: []
      };
    case ACTION.CLEAR:
      const {initialPresent} = action;

      return {
        ...initialState,
        present: initialPresent
      };

    default:
      return state;
  }
};

export function useUndo (initialPresent) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresent
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(
      () => {
        if (canUndo) {
          dispatch({type: ACTION.UNDO});
        }
      },
      [canUndo, dispatch]
  );

  const redo = useCallback(
      () => {
        if (canRedo) {
          dispatch({type: ACTION.REDO});
        }
      },
      [canRedo, dispatch]
  );

  const set = useCallback(
      newPresent => dispatch({type: ACTION.SET, newPresent}),
      [dispatch]
  );

  const clear = useCallback(
      () => dispatch({type: ACTION.CLEAR, initialPresent}),
      [dispatch]
  );

  return {state: state.present, set, undo, redo, clear, canUndo, canRedo};
};
