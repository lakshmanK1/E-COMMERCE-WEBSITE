export const reducer =(state, action)=>{
    if (action.type === "REMOVE") {
        return {
          ...state,
          DisplayItems: state.DisplayItems.filter((curElem) => {
            return curElem.id !== action.payload;
          }),
        };
      }
    return state;
}