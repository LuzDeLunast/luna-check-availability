import { useContext, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Context } from '../../App';
import { differencesDays } from '../../helpers';

import styles from './CardRoom.module.css';

function CardRoom({ rooms, variant = 'defualt' }) {
  const { roomsData } = useContext(Context);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(roomsData.lang);
  }, []);

  function handleClickBookCTA(e) {
    e.preventDefault();
    const indexRoom = e.target.dataset.ctaRoom;
    const selectedRoomBooked = rooms[indexRoom];
    sessionStorage.setItem(
      'selectedRoomBooked',
      JSON.stringify({
        kitchen: selectedRoomBooked?.kitchen,
        nights: differencesDays(
          roomsData?.selectedDate[0],
          roomsData?.selectedDate[1]
        ),
        arrival: roomsData?.selectedDate[0],
        departure: roomsData?.selectedDate[1],
      })
    );
    window.location.href = e.target.href;
  }

  return (
    <div
      className={
        variant == 'book'
          ? `${
              rooms.length > 1
                ? styles['carrousel-swipe']
                : styles['carrousel-swipe-one-item']
            }`
          : null
      }
    >
      {rooms?.map((room, index) => {
        return (
          <div key={crypto.randomUUID()}>
            <div className={styles['room-card-wrapper']}>
              <div className={styles['room-card']}>
                <div className={styles['room-card-number']}>
                  <span>{room?.name?.split(' ')[1]?.slice(1)}</span>
                </div>
                <h3 className={styles['room-card-heading']}>{t('Room')}</h3>
                <div className={styles['room-card-body']}>
                  <div className={styles['room-card-illustration']} style={{"--bg": `url('${room["bg"]}')`}}>
                  </div>
                  <ul className={styles['room-card-features']}>
                    <li className={`${styles['max']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26.72 20.17"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <path
                              className={styles['cls-1']}
                              d="M7.43,8.53a3.18,3.18,0,1,1,3.18-3.19A3.19,3.19,0,0,1,7.43,8.53Zm0-3.36a.18.18,0,0,0-.18.17c0,.2.36.2.36,0A.18.18,0,0,0,7.43,5.17Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M19.29,6.36a3.18,3.18,0,1,1,3.18-3.18A3.19,3.19,0,0,1,19.29,6.36Zm0-3.36a.18.18,0,0,0-.18.18c0,.2.36.2.36,0A.18.18,0,0,0,19.29,3Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M25.22,18a1.5,1.5,0,0,1-1.5-1.5,4.43,4.43,0,0,0-8.86,0,1.5,1.5,0,0,1-3,0,7.43,7.43,0,0,1,14.86,0A1.5,1.5,0,0,1,25.22,18Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M13.36,20.17a1.5,1.5,0,0,1-1.5-1.5,4.43,4.43,0,0,0-8.86,0,1.5,1.5,0,0,1-3,0,7.43,7.43,0,0,1,14.86,0A1.5,1.5,0,0,1,13.36,20.17Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4>
                        Max
                        <span>{room['max-persons']}</span>
                      </h4>
                    </li>
                    <li className={`${styles['air-conditioner']}`}>
                      <svg
                        className={styles['fan']}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25.77 25.77"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <circle
                              className={styles['cls-1']}
                              cx="12.88"
                              cy="12.88"
                              r="1.78"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M12.88,25.77A12.89,12.89,0,1,1,25.77,12.88,12.9,12.9,0,0,1,12.88,25.77ZM12.88,2A10.89,10.89,0,1,0,23.77,12.88,10.89,10.89,0,0,0,12.88,2Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M10.73,11a2.2,2.2,0,0,0-.92-1.45,14.57,14.57,0,0,1-1.75-1.2A2.74,2.74,0,0,1,7.41,5a2.93,2.93,0,0,1,3.16-1.55A4.18,4.18,0,0,1,13.84,5.5s1.3,1.64.34,4.73A2.58,2.58,0,0,0,10.73,11Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M12.34,15.59a2.18,2.18,0,0,0-.8,1.53,14.25,14.25,0,0,1-.16,2.11,2.74,2.74,0,0,1-2.55,2.23,2.94,2.94,0,0,1-2.93-2,4.16,4.16,0,0,1,.15-3.86s.76-2,3.92-2.66A2.57,2.57,0,0,0,12.34,15.59Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M15.58,11.91a2.22,2.22,0,0,0,1.72-.06,16.09,16.09,0,0,1,1.92-.91,2.74,2.74,0,0,1,3.2,1.12,3,3,0,0,1-.26,3.52,4.17,4.17,0,0,1-3.44,1.77s-2.06.3-4.24-2.09A2.57,2.57,0,0,0,15.58,11.91Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4>{t('Fan')}</h4>
                    </li>
                    <li className={`${styles['refrigerator']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.72 24.77"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <path
                              className={styles['cls-1']}
                              d="M17,24.77H2.69A2.7,2.7,0,0,1,0,22.08V2.68A2.69,2.69,0,0,1,2.69,0H17a2.68,2.68,0,0,1,2.68,2.68v19.4A2.69,2.69,0,0,1,17,24.77ZM2.69,1A1.69,1.69,0,0,0,1,2.68v19.4a1.69,1.69,0,0,0,1.69,1.69H17a1.69,1.69,0,0,0,1.68-1.69V2.68A1.68,1.68,0,0,0,17,1Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M4.54,8A1.42,1.42,0,0,1,3.13,6.56V4.7A1.42,1.42,0,1,1,6,4.7V6.56A1.42,1.42,0,0,1,4.54,8Zm0-3.7a.42.42,0,0,0-.41.42V6.56A.42.42,0,0,0,4.54,7,.42.42,0,0,0,5,6.56V4.7A.42.42,0,0,0,4.54,4.28Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M4.54,17.41A1.41,1.41,0,0,1,3.13,16V13.3A1.42,1.42,0,1,1,6,13.3V16A1.41,1.41,0,0,1,4.54,17.41Zm0-4.53a.42.42,0,0,0-.41.42V16A.42.42,0,0,0,5,16V13.3A.42.42,0,0,0,4.54,12.88Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M19.22,22.39H.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,22.39Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M19.22,10.53H.5A.5.5,0,0,1,0,10a.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,10.53Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4>{t('Refrigerator')}</h4>
                    </li>
                    <li className={`${styles['bathroom']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15.04 25.87"
                      >
                        <g id="Capa_2" data-name="Capa 2">
                          <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                            <path
                              className={styles['cls-1']}
                              d="M13.54,16.45A1.5,1.5,0,0,1,12,15V6A3,3,0,1,0,6,6,1.5,1.5,0,0,1,3,6,6,6,0,1,1,15,6V15A1.5,1.5,0,0,1,13.54,16.45Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M13.54,25.87a1.5,1.5,0,0,1-1.5-1.5V15a1.5,1.5,0,0,1,3,0v9.42A1.5,1.5,0,0,1,13.54,25.87Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M3.55,10.05c-.17.35-.41.66-.58,1a1.47,1.47,0,0,0-.12,1.12,1.2,1.2,0,0,0,.39.5,1.34,1.34,0,0,0,1.58.11,1.45,1.45,0,0,0,.53-1.16,3.78,3.78,0,0,0-.29-1.28c-.18-.47-.37-.93-.59-1.38,0-.08-.07-.18-.15-.21a.25.25,0,0,0-.19,0,.78.78,0,0,0-.29.48A6.74,6.74,0,0,1,3.55,10.05Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M.79,13.57c-.17.36-.42.67-.59,1a1.46,1.46,0,0,0-.13,1.15,1.28,1.28,0,0,0,.4.52,1.4,1.4,0,0,0,1.63.11,1.52,1.52,0,0,0,.54-1.19,3.74,3.74,0,0,0-.3-1.32c-.19-.48-.38-1-.6-1.42,0-.08-.07-.18-.16-.22a.21.21,0,0,0-.19,0,.75.75,0,0,0-.3.49A7.87,7.87,0,0,1,.79,13.57Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M6.11,13.43c-.16.35-.4.66-.57,1a1.43,1.43,0,0,0-.13,1.12,1.28,1.28,0,0,0,.39.5,1.37,1.37,0,0,0,1.59.11A1.44,1.44,0,0,0,7.91,15a3.56,3.56,0,0,0-.29-1.28c-.18-.47-.37-.93-.58-1.39,0-.07-.07-.17-.16-.2a.26.26,0,0,0-.19,0,.83.83,0,0,0-.29.48A4.3,4.3,0,0,1,6.11,13.43Z"
                            />
                            <path
                              className={styles['cls-1']}
                              d="M1.05,8A3.46,3.46,0,0,1,8,8.23Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: t('Private bathroom'),
                        }}
                      ></h4>
                    </li>
                    {room['kitchen'] && (
                      <li className={`${styles['kitchen']}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 19.72 24.77"
                        >
                          <g id="Capa_2" data-name="Capa 2">
                            <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                              <path
                                className={styles['cls-1']}
                                d="M17,24.77H2.68A2.69,2.69,0,0,1,0,22.08V2.68A2.68,2.68,0,0,1,2.68,0H17a2.68,2.68,0,0,1,2.68,2.68v19.4A2.69,2.69,0,0,1,17,24.77ZM2.68,1A1.69,1.69,0,0,0,1,2.68v19.4a1.69,1.69,0,0,0,1.68,1.69H17a1.69,1.69,0,0,0,1.68-1.69V2.68A1.68,1.68,0,0,0,17,1Z"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M15,19.54h-10a1.33,1.33,0,0,1-1.33-1.33V12.12a1.34,1.34,0,0,1,1.33-1.33H15a1.34,1.34,0,0,1,1.33,1.33v6.09A1.33,1.33,0,0,1,15,19.54Zm-10-7.75a.33.33,0,0,0-.33.33v6.09a.33.33,0,0,0,.33.33H15a.33.33,0,0,0,.33-.33V12.12a.33.33,0,0,0-.33-.33Z"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M16.44,11.79H3.49A1.29,1.29,0,0,1,2.2,10.5v-.25A1.29,1.29,0,0,1,3.49,9h13a1.29,1.29,0,0,1,1.29,1.29v.25A1.29,1.29,0,0,1,16.44,11.79ZM3.49,10a.29.29,0,0,0-.29.29v.25a.28.28,0,0,0,.29.29h13a.28.28,0,0,0,.29-.29v-.25a.29.29,0,0,0-.29-.29Z"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="2.94"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="7.41"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="10.54"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="13.58"
                                cy="3.26"
                                r="1.17"
                              />
                              <circle
                                className={styles['cls-1']}
                                cx="16.67"
                                cy="3.26"
                                r="1.17"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M19.22,22.39H.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,22.39Z"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M19.22,6.18H.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.22a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.22,6.18Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <h4>{t('Kitchen')}</h4>
                      </li>
                    )}
                    {room['air-Conditioner'] && (
                      <li className={`${styles['Wifi']}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25.31 20.15"
                        >
                          <g id="Capa_2" data-name="Capa 2">
                            <g id="WEB_DISEÑO" data-name="WEB DISEÑO">
                              <rect
                                className={styles['cls-1']}
                                x="1"
                                y="1"
                                width="22.98"
                                height="8.77"
                                rx="3.47"
                              />
                              <line
                                className={styles['cls-2']}
                                x1="4.25"
                                y1="6.47"
                                x2="20.74"
                                y2="6.47"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M19.64,12.34c-.26,2.65.6,4.38,2.81,5.06"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M16.06,12.34c-.12,2.65.31,4.38,1.41,5.06"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M12.49,12.34V17.4"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M8.92,12.34C9,15,8.61,16.72,7.51,17.4"
                              />
                              <path
                                className={styles['cls-1']}
                                d="M5.34,12.34c.26,2.65-.6,4.38-2.81,5.06"
                              />
                              <circle
                                className={styles['cls-3']}
                                cx="20.74"
                                cy="4"
                                r="0.58"
                              />
                              <circle
                                className={styles['cls-3']}
                                cx="18.82"
                                cy="4"
                                r="0.58"
                              />
                              <circle
                                className={styles['cls-3']}
                                cx="16.91"
                                cy="4"
                                r="0.58"
                              />
                            </g>
                          </g>
                        </svg>
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: t('Air conditioner'),
                          }}
                        ></h4>
                      </li>
                    )}
                  </ul>
                </div>
                <div className={styles['room-card-footer']}>
                  {variant == 'defualt' && (
                    <a
                      style={{ textDecoration: 'underline' }}
                      href={`./rooms.php?room=${room.num}`}
                      className={styles['quick-links-see-more']}
                    >
                      See more
                    </a>
                  )}
                  {variant == 'book' && (
                    <a
                      style={{
                        textDecoration: 'underline',
                        paddingLeft: '44px',
                        paddingRight: '44px',
                      }}
                      data-cta-room={index}
                      href={`contact.php?room=${room?.name?.split(' ')[1]?.slice(1)}`}
                      onClick={handleClickBookCTA}
                      className={styles['quick-link-check-availability']}
                    >
                      Book
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardRoom;
