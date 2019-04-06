export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  // dispatch({type: 'ADD_ITEM_REQUEST'})
  // return axios('blabla', 'getState().').then(response => dispatch({ type: 'ADD_ITEM_SUCCESS', response})).catch()

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
