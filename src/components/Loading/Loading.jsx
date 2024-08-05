import { Audio } from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <Audio
      height="400"
      width="500"
      radius="9"
      color="blue"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={styles.wrapper}
    />
  );
};

export default Loading;
