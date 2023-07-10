import React, { createContext, useContext, useReducer, Dispatch } from "react";

import { Swatch } from "@/types/global";

export interface AppState {
  swatches: Swatch[];
  selectedSwatch?: number;
  selectedShade?: number;
}
interface Action {
  type: "SET_SWATCHES" | "ADD_SWATCH" | "REMOVE_SWATCH";
  payload: any;
}

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case "SET_SWATCHES":
      return { ...state, swatches: action.payload };
    case "ADD_SWATCH":
      return { ...state, swatches: [...state.swatches, action.payload] };
    case "REMOVE_SWATCH":
      return {
        ...state,
        swatches: state.swatches.splice(action.payload, 1),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

interface ContextProps {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const initialState: AppState = {
  swatches: [
    { name: "Swatch 1", keyHexColors: ["#000000", "#ffffff"], shades: [] },
  ],
};

const AppStateContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

export function useAppStateContext() {
  return useContext(AppStateContext);
}

export function AppStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}
