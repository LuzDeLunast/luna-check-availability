import { useEffect, useContext, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';
import CardRoom from '../shared/CardRoom';
import { Context } from '../../App';
import { checkAvailability } from '../../services/checkAvailability';
import {
  reducer,
  initialState,
} from '../../reducers/checkAvailability-reducer.js';

import styles from './index.module.css';
import SelectedRoomAvailable from '../availableRooms/SelectedRoomAvailable';

function AvailableRooms() {
  const { roomsData } = useContext(Context);
  const { t } = useTranslation();
  const [{ loading, error, availableRooms }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    if (roomsData.isCheckingAvailability) {
      checkRangeDatesRooms();
    }
    async function checkRangeDatesRooms() {
      try {
        const [min, max] = roomsData.selectedDate;
        const result = await checkAvailability({
          min: min,
          max: max,
        });
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: await result,
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
    <div
      style={{
        marginTop: '48px',
        borderTop: '2px solid #868c66',
        paddingBottom: '20px',
      }}
    >
      <h3
        data-available-title
        className={styles['available-title']}
        style={{ paddingTop: '32px' }}
      >
        {t('Available rooms')}
        <span className={styles['available-title--arrow']}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 17.98">
            <defs>
              <style>
                {
                  '[data-available-title] .cls-1{fill:none;stroke:#a2aa79;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
                }
              </style>
            </defs>
            <g id="Capa_2" data-name="Capa 2">
              <g id="WEB_DISE\xD1O" data-name="WEB DISE\xD1O">
                <path
                  d="m1.5 16.48 10.28-7.73h0M22.06 16.48 11.78 8.75h0M1.5 9.23 11.78 1.5h0M22.06 9.23 11.78 1.5h0"
                  className="cls-1"
                />
              </g>
            </g>
          </svg>
        </span>
      </h3>
      {availableRooms?.length > 0 ? (
        <>
          {roomsData.selectedRoom == 0 ? (
            <CardRoom variant="book" rooms={availableRooms} />
          ) : (
            <SelectedRoomAvailable
              selectedRoom={roomsData.selectedRoom}
              rooms={availableRooms}
            />
          )}
        </>
      ) : (
        <p className={styles.norooms}>{t('no rooms')}</p>
      )}
    </div>
  );
}

export default AvailableRooms;
