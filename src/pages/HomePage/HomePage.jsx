import svgGoogle from '../../images/GoogleIcon.svg';
import css from '../HomePage/HomePage.module.css';

export const Home = () => {

  return (
    <main className={css.main}>
      <h1 className={css.title}>
        <span className={css.mainLogo}>PLANNER</span>FOR JOINT SAVINGS FOR AN
        APARTMENT
      </h1>

      <div className={css.signGoogle}>
        <img src={svgGoogle} alt="" />

        <p className={css.signText}>Sign in with Google</p>

      </div>
    </main>
  );
};

