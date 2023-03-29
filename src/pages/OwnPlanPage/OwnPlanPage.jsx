import PlanInput from "components/OwnPlan/PlanInput/PlanInput";
// import { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectorPlanData } from "redux/plan/plan-selectors";
// import { addPersonalPlanAPI, currentPersonalPlanAPI, getPersonalPlan } from "redux/plan/plan-operations";
import PeriodPlan from "components/OwnPlan/PeriodPlan/PeriodPlan";
// import ModalAddBalance from "components/OwnPlan/ModalAddBalance/ModalAddBalance";
// import { balanceSelector } from "redux/auth/auth-selectors";
import styles from "./OwnPlanPage.module.css";

const OwnPlanPage = () => {
  // const dispatch = useDispatch();
  // const isExistBalance = useSelector(balanceSelector);
  // const newPlanData = useSelector(selectorPlanData);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = useCallback(() => {
  //   setIsModalOpen((p) => (p === false && isExistBalance ? p : !p));
  // }, [isExistBalance]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   !newPlanData.id
  //     ? dispatch(addPersonalPlanAPI(newPlanData))
  //     : dispatch(currentPersonalPlanAPI(newPlanData));
  // };


  // useEffect(() => {
  //   !isExistBalance && toggleModal();
  // }, [isExistBalance, toggleModal]);

  // useEffect(() => {
  //   isUserExist && dispatch(getPersonalPlan());
  // }, [dispatch, isUserExist]);

  return (

      <div className={styles.container}>
        {/* <form className={styles.form} */}
        {/* // onSubmit={handleSubmit} */}
        {/* > */}
          <PlanInput />
          {/* <PeriodPlan openModalAddBalance={toggleModal} /> */}
          <PeriodPlan />
        {/* </form> */}
        {/* {isModalOpen && <ModalAddBalance closeModal={toggleModal} />} */}
      </div>

  );
};

export default OwnPlanPage;
