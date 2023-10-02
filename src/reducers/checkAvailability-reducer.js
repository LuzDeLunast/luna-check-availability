export const initialState = {
  loading: true,
  error: '',
  availableRooms: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        availableRooms: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        res: null,
      };
    default:
      return state;
  }
};
