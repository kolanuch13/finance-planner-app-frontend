import style from './ModalPopUp.module.css';
import svgImg from '../../images/PopUp/close-popup.svg';

export default function ModalPopUp({ handleModalClose }) {
  return (
    <>
      <div className={style.box}>
        <div className={style.textarea}>
          <h2 className={style.heading}>Hooray! Congratulations!</h2>
          <p className={style.paragraph}>
            You did it! We are so proud of you and wish you all the best as you
            embark on this exciting new chapter of your life.
          </p>
          <img
            onClick={handleModalClose}
            className={style.svg}
            src={svgImg}
            alt="Close PopUp"
          />
        </div>
      </div>
    </>
  );
}
