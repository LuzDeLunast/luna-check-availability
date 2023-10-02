import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../../App';
import CardRoom from '../shared/CardRoom';
import styles from './SelectRoom.module.css';

function SelectRoom() {
  const { roomsData, actions } = useContext(Context);
  const { t, i18n } = useTranslation();

  const onOptionChange = (e) => {
    const idRoom = Number(e.target.value);
    actions.setSelectedRoom(idRoom);
  };

  const RoomOptions = () => {
    return (
      <>
        {[
          <div key={crypto.randomUUID()} className={styles['options']}>
            <input
              type="radio"
              id="any"
              value={0}
              checked={roomsData.selectedRoom === 0}
              onChange={onOptionChange}
            />
            <label
              className={`${
                roomsData.selectedRoom === 0
                  ? styles['radio-label--active']
                  : styles['radio-label']
              } `}
              htmlFor="any"
            >
              {t('Any')}
            </label>
          </div>,

          <div
            key={crypto.randomUUID()}
            className={styles['options-each-room-wrapper']}
          >
            {...roomsData.allRooms.map((room, index) => (
              <div key={crypto.randomUUID()} className={styles['options']}>
                <input
                  type="radio"
                  id={room.id}
                  value={index + 1}
                  checked={roomsData.selectedRoom === index + 1}
                  onChange={onOptionChange}
                />
                <label
                  className={`${
                    roomsData.selectedRoom === index + 1
                      ? styles['radio-label--active']
                      : styles['radio-label']
                  } `}
                  htmlFor={room.id}
                >
                  {`${room.id}  ${t('Room')}`}
                </label>
              </div>
            ))}
          </div>,
        ]}
      </>
    );
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = Number(queryParams.get('room')) || 0;
    const selectingRoom = roomsData.allRooms[paramValue - 1];
    if (selectingRoom) {
      actions.setSelectedRoom(selectingRoom.numRoom);
    }
  }, []);

  return (
    <div className={styles['select-room']}>
      <h3 data-select-room-title className={styles['select-room-title']}>
        {t('Select room')}
        <span className={styles['select-room-title--arrow']}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 17.98">
            <defs>
              <style>
                {
                  '[data-select-room-title] .cls-1{fill:none;stroke:#a2aa79;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
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
      <div className={styles['options-rooms']}>
        <RoomOptions />
      </div>
      {roomsData.selectedRoom != 0 && (
        <>
          <h3
            data-select-room-title
            className={styles['select-room-title']}
            style={{ marginTop: '20px' }}
          >
            {t('Selected room')}

            <span className={styles['select-room-title--arrow']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 17.98">
                <defs></defs>
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
          <CardRoom
            rooms={[roomsData.allRooms[roomsData.selectedRoom - 1].data]}
          />
        </>
      )}
    </div>
  );
}

export default SelectRoom;
