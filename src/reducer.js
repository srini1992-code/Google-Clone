export const initialState = {
  term: null,
  //   initially nosearchtyped,when searche dvalue isequal to searchitem
};
export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  //   search is typed "elonmusk" is equl to setsearchterm
  // dispatched an action from app to datalayer where state changed
};
// work of reducer is anychange in state then  listen to change and push to datalayer
const reducer = (state, action) => {
  // reducer has two params-1.state(initialstate,action-changein stateor dispatch from app to datalayer is action which is by reducer)
  console.log(action);
  //   log the action//elonmusk
  switch (action.type) {
    //   when there is change in action or state retun the state
    // if not return prevous state
    // return type is like object has stateand action
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
