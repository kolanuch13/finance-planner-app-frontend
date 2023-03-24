import { useState } from 'react';
import { useSelector } from 'react-redux';
//import { NavLink } from 'react-router-dom';

import css from './UserNav.module.css';

function Navigation() {
  const token = useSelector(state => state.auth?.token);
  const [isModalOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);

  return (
    <nav>
      <div className={css.userNav}>
        {/* <NavLink to="/login"> */}
        <button type="button" className={css.login} onClick={openModal}>
          Log in
        </button>
        {/* </NavLink> */}

        {/* <NavLink to="/register"> */}
        <button type="button" className={css.register} onClick={openModal}>
          Registration
        </button>
        {/* </NavLink> */}
      </div>
    </nav>
  );
}

export default Navigation;
