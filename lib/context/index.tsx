import React, { useReducer, useContext, createContext, Dispatch } from "react";

interface musicObj {
  coverImg: string;
  title: string;
  name: string;
  musicSrc: string;
  songId: string;
}

interface listObj {
  cover_url : string;
  song_url : string;
  title : string;
  artist : string;
  song_id : string | number;
}

type State = {
  musicInformation: musicObj;
  list: any[];
};

type Action =
  | { type: "MUSIC_CHANGE"; musicInformation: musicObj }
  | { type: "SET_MUSIC_LIST"; list: musicObj[] };

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "MUSIC_CHANGE":
      return {
        ...state,
        musicInformation: action.musicInformation,
      };
    case "SET_MUSIC_LIST":
      return {
        ...state,
        list: action.list,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    musicInformation: {
      coverImg: "",
      title: "곡이 없습니다",
      name: "---",
      musicSrc: "",
      songId: "",
    },
    list: [],
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
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function setValue() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
