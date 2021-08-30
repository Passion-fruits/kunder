import React, { useReducer, useContext, createContext, Dispatch } from 'react';

interface musicObj{
    coverImg : string;
    title : string;
    name : string;
    musicSrc : string;
}

type State = {
  musicInformation : musicObj
};

type Action =
  | { type: 'MUSIC_CHANGE'; musicInformation : musicObj }

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'MUSIC_CHANGE':
      return {
        ...state,
        musicInformation : action.musicInformation
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
      musicInformation : { coverImg : '',title : '곡이 없습니다', name : '---', musicSrc : '' }
  });
  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function getValue() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function setValue() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}