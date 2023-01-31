﻿import { useReducer, useCallback } from "react";

/*
Hook de uso exclusivo del componente SearchForm
*/

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const ACTION_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
};

const REDUCER = (state, action) => {
  const actionReducer = ACTION_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: decodeURIComponent(initialKeyword),
    rating: decodeURIComponent(initialRating),
    times: 0,
  });
  const { keyword, times, rating } = state;

  const updateKeyword = useCallback(
    (keyword) => {
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      });
    },
    [dispatch]
  );

  const updateRating = useCallback(
    (rating) => {
      dispatch({
        type: ACTIONS.UPDATE_RATING,
        payload: rating,
      });
    },
    [dispatch]
  );

  return {
    keyword,
    times,
    rating,
    updateKeyword,
    updateRating,
  };
}
