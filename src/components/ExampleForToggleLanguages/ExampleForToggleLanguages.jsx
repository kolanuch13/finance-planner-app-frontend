import { useTranslation } from 'react-i18next';
import '../../i18n';

const ExampleForToggleLanguages = () => {
  const { t } = useTranslation();

  return <div>{t('example.test')}</div>;
};

export default ExampleForToggleLanguages;
