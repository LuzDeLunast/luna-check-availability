import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Calendar from 'react-calendar';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Context } from '../../App';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import styles from './CalendarRange.module.css';
import { startDay } from '../../helpers';

function CalendarRange() {
  const { roomsData, actions } = useContext(Context);
  const [value, onChange] = useState([startDay(), new Date()]);
  const { t } = useTranslation();

  useEffect(() => {
    actions.setSelectedDates(value);
  }, [value]);

  return (
    <div className={styles['calendar-range-wrapper']}>
      <div className={styles['calendar-picker']}>
        <Calendar
          minDate={new Date()}
          selectRange={true}
          onChange={onChange}
          value={value}
          locale={roomsData.lang}
        />
      </div>
      <div className={styles['calendar-range']}>
        {/* <h3 data-select-room-title className={styles['calendar-range-title']}>
          Seleccione su estadia
          <span className={styles['calendar-range-title--arrow']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 17.98">
              <defs>
                <style>
                  {
                    '.calendar-range .cls-1{fill:none;stroke:#a2aa79;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px}'
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
        </h3> */}
        <div className={styles['calendar-range-inputs']}>
          <h4 className={styles['calendar-range-inputs--indicator-input']}>
            {t('Arrival')}
          </h4>
          <DateRangePicker
            minDate={new Date()}
            isOpen={true}
            rangeDivider={'-----'}
            calendarIcon={null}
            clearIcon={null}
            disableCalendar={true}
            onChange={onChange}
            value={value}
            locale={roomsData.lang}
          />
          <h4 className={styles['calendar-range-inputs--indicator-output']}>
            {t('Departure')}
          </h4>
        </div>
        <div className={styles['calendar-range-summary']}>
          <div>
            <h3>
              {value[0]?.getDate()}{' '}
              {value[0]?.toLocaleString(`${roomsData.lang}`, { month: 'long' })}
            </h3>
            <h4> {t('Arrival')}</h4>
          </div>
          <div className={styles['calendar-range-separator']}>
            <svg
              className={styles['calendar-range-summary--arrow']}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#A4AC7E"
                d="m502.6 278.6-128 128c-12.51 12.51-32.76 12.49-45.25 0-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32c-17.69 0-32-14.3-32-32.9S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128c12.43 12.53 12.43 32.73-.07 45.23z"
              />
            </svg>
          </div>
          <div>
            <h3>
              {value[1]?.getDate()}{' '}
              {value[1]?.toLocaleString(`${roomsData.lang}`, { month: 'long' })}
            </h3>
            <h4> {t('Departure')}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarRange;
