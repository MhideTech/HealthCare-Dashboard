import Navbar from '../components/Navbar';
import styles from './OtherPagesStyle.module.css'

function Message() {
    return (
      <div className={styles.app}>
        <Navbar />
        <h1>Message</h1>
      </div>
    );
}

export default Message
