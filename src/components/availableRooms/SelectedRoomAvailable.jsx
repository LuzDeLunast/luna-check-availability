import { useTranslation } from 'react-i18next';
import CardRoom from '../shared/CardRoom';
import styles from './index.module.css';

function SelectedRoomAvailable({ selectedRoom, rooms }) {
  const { t } = useTranslation();

  const filterRoomBySelected = rooms?.filter(
    (room) => selectedRoom == room?.num
  );

  if (filterRoomBySelected.length == 1) {
    return (
      <>
        <p className={styles.norooms}>
          {t('Congratulations, the room you selected is available!')}
        </p>
        <CardRoom variant="book" rooms={filterRoomBySelected} />
      </>
    );
  }

  return (
    <>
      <p
        style={{ fontWeight: 'bold', fontSize: '16px' }}
        className={styles.norooms}
      >
        {t('At the moment, the room you have selected is not available.')}
      </p>
      <p className={styles.norooms}>
        {t('But we have found other available rooms:')}
      </p>
      <CardRoom variant="book" rooms={rooms} />
    </>
  );
}

export default SelectedRoomAvailable;
