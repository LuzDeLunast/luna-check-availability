export const initialState = {
  loading: true,
  error: '',
  roomsData: {
    lang: document.querySelector('html').lang,
    allRooms: null,
    selectedRoom: 0,
    selectedDate: null,
    isCheckingAvailability: false,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        roomsData: {
          ...state.roomsData,
          allRooms: action.payload,
        },
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        roomsData: null,
      };
    case 'SELECTED_ROOM':
      return {
        ...state,
        roomsData: {
          ...state.roomsData,
          selectedRoom: action.payload,
          isCheckingAvailability: false,
        },
      };
    case 'SELECTED_DATE':
      return {
        ...state,
        roomsData: {
          ...state.roomsData,
          selectedDate: action.payload,
          isCheckingAvailability: false,
        },
      };
    case 'CHECKING_AVAILABILITY_ROOMS':
      return {
        ...state,
        roomsData: {
          ...state.roomsData,
          isCheckingAvailability: true,
        },
      };
    default:
      return state;
  }
};
