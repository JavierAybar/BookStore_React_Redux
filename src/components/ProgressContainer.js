import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../style/ProgressContainer.css';

function ProgressContainer() {
  return (
    <section className="progress__container">
      <div className="graphic__container">
        <CircularProgressbar value={66} />
      </div>
      <div className="stats__container">
        <p className="stats__percent">66%</p>
        <p className="stats__completed">completed</p>
      </div>
      <div className="current__chapter-container">
        <div>
          <p className="current__chapter-title">Current Chapter</p>
          <p className="current__chapter-num">Chapter 22</p>
        </div>
        <div>
          <button className="update__btn" type="button">Update Progress</button>
        </div>
      </div>
    </section>
  );
}

export default ProgressContainer;
