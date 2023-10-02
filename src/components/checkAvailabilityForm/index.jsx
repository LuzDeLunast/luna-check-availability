import './index.css';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import CalendarRange from './CalendarRange';
import SelectRoom from './SelectRoom';
import { Context } from '../../App';

export default function CheckAvailabilityForm() {
  const { roomsData, actions } = useContext(Context);
  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();
    actions.checkingAvailablity();
  };

  return (
    <div className="check_availability">
      <h2 className="tile-check_availability"> {t('Check availability')}</h2>
      <form onSubmit={onSubmit}>
        <CalendarRange />
        <SelectRoom />
        <div className="check_availability-wrapper">
          <input
            type="submit"
            disabled={roomsData.isCheckingAvailability}
            className="check_availability-submit"
            value={t('Check availability')}
          />
        </div>
      </form>
    </div>
  );
}
