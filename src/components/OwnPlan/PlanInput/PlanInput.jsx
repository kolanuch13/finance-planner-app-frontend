import { useDispatch, useSelector } from 'react-redux';
import { addPersonalPlanPreAPI } from 'redux/plan/plan-operations';
import { selectorPlanData } from 'redux/plan/plan-selectors';
import InputsList from '../InputList/InputsList';
import styles from './PlanInput.module.css';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { balance } from 'redux/auth/auth-selectors'

const PlanInput = ({data, setData}) => {
  const {t} = useTranslation();
  const dataInput = [
    {
      name: 'salary',
      title: t('personalPlane.firstInput'),
      placeholder: t('personalPlane.placeholderFirstInput'),
    },
    {
      name: 'passiveIncome',
      title: t('personalPlane.secondInput'),
      placeholder: t('personalPlane.placeholderSecondInput'),
    },
    {
      name: 'savings',
      title: t('personalPlane.thirdInput'),
      placeholder: t('personalPlane.placeholderThirdInput'),
    },
    {
      name: 'cost',
      title: t('personalPlane.fourthInput'),
      placeholder: t('personalPlane.placeholderFourthInput'),
    },
    {
      name: 'footage',
      title: t('personalPlane.fifthInput'),
      placeholder: t('personalPlane.placeholderFifthInput'),
    },
    {
      name: 'procent',
      title: t('personalPlane.sixthInput'),
      placeholder: t('personalPlane.placeholderSixthInput'),
      descr: t('personalPlane.additionalInfoSixthInput'),
    },
  ];
  const userBalance = useSelector(balance)
  const dispatch = useDispatch();
  const curPlanData = useSelector(selectorPlanData);

  const onChange = event => {
    const { name, value } = event.target;
    userBalance === 0 ? Notify.warning('At first enter the balance at the bottom of the page⬇') : 
    setData(prev => ({
      ...prev,
      [name]: value === '' ? value : Number(value),
    }));
  };

  const onBlur = () => {
    if (Object.values(data).filter(element => element === '').length)
      return;
    if (JSON.stringify(curPlanData) === JSON.stringify(data)) return;
    dispatch(addPersonalPlanPreAPI(data));
  };

  return (

      <div className={styles.container}>
        <ul className={styles.list}>
          {dataInput.map((element, index) => (
            <InputsList
              key={index}
              num={index + 1}
              {...element}
              value={data[element.name]}
              onChange={onChange}
              disabled={element.name === 'savings' && curPlanData?.id}
              onBlur={onBlur}
              type="numbers"
            />
          ))}
        </ul>
        <div className={styles.bg}></div>
      </div>

  );
};

export default PlanInput;
