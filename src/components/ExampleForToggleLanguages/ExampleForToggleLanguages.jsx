import { useTranslation } from 'react-i18next';

const ExampleForToggleLanguages = () => {
  const { t } = useTranslation();

  return <div>{t('example.test')}</div>;
};

export default ExampleForToggleLanguages;
