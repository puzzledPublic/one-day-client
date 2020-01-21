import React, { useReducer } from "react";

interface UseInputsAction {
    name: string;
    value: any;
}

function reducer<T>(state: T, action: UseInputsAction | null): T {
  if (!action) {
    const initialState: any = {};
    Object.keys(state).forEach(key => {
      initialState[key] = "";
    });
    return initialState;
  }
  return { ...state, [action.name]: action.value };
}

function useInputs<T>(inputs: T) {
  const [state, dispatch] = useReducer(reducer, inputs) as [T, any];

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.type) {
      case "checkbox":
        return dispatch({
          name: event.target.name,
          value: event.target.checked
        });
      default:
        return dispatch({ name: event.target.name, value: event.target.value });
    }
  };
  const onReset = () => {
    dispatch(null);
  };

  return [state, onChange, onReset, dispatch] as [
    typeof state,
    typeof onChange,
    typeof onReset,
    typeof dispatch
  ];
}

export default useInputs;
