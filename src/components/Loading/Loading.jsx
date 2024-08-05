import { Audio } from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <Audio
      height="500"
      width="400"
      radius="9"
      color="blue"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={styles.wrapper}
    />
  );
};

export default Loading;
