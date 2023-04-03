import { useTranslation } from 'react-i18next';
import '../i18n';

export function useGetYearWord(number) {
  const { t } = useTranslation();
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return t('dynamics.yearResultCountPrimary');
  } else if (
    (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) &&
    !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
  ) {
    return t('dynamics.yearResultCountSecondary');
  } else {
    return t('dynamics.yearResultCountMany');
  }
}

export function useGetMonthWord(number) {
  const { t } = useTranslation();
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = [
    t('dynamics.monthResultCountPrimary'),
    t('dynamics.monthResultCountSecondary'),
    t('dynamics.monthResultCountMany'),
  ];
  const index =
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];
  return titles[index];
}
