import { useEffect, createContext, useReducer, useMemo } from 'react';
import ReactLoading from 'react-loading';
import CheckAvailabilityForm from './components/checkAvailabilityForm/index.jsx';
import { getRoomsService } from './services/checkAvailability';
import { reducer, initialState } from './reducers/rooms-reducer';
import AvailableRooms from './components/availableRooms/index.jsx';
import lang from './lang.js';

export const Context = createContext(null);
lang();

function App() {
  const [{ loading, error, roomsData }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const provider = useMemo(
    () => ({
      roomsData,
      actions: {
        setSelectedRoom(id) {
          return dispatch({
            type: 'SELECTED_ROOM',
            payload: id,
          });
        },
        setSelectedDates(dates) {
          return dispatch({
            type: 'SELECTED_DATE',
            payload: dates,
          });
        },
        checkingAvailablity() {
          return dispatch({
            type: 'CHECKING_AVAILABILITY_ROOMS',
            payload: true,
          });
        },
      },
    }),
    [roomsData]
  );

  useEffect(() => {
    getRooms();
    async function getRooms() {
      try {
        const rooms = await getRoomsService();
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: rooms,
        });
      } catch (error) {
        //console.log(error);
        dispatch({
          type: 'FETCH_ERROR',
          payload: 'An Error has ocurred, please try it again',
        });
      }
    }
  }, []);

  if (loading) {
    return (
      <ReactLoading
        className="loading-calendar"
        type="cylon"
        color="#889166"
        height="auto"
        width={90}
      />
    );
  }

  if (error) {
    return <p>An Error has ocurred, please try it again</p>;
  }

  return (
    <Context.Provider value={provider}>
      <CheckAvailabilityForm />
      {roomsData.isCheckingAvailability && <AvailableRooms />}
    </Context.Provider>
  );
}

export default App;
