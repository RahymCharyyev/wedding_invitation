import { useI18n } from '@/locales/client';
import { FC } from 'react';

interface FooterSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const FooterSection: FC<FooterSectionProps> = ({ side }) => {
  const t = useI18n();
  return (
    <footer className='py-8 px-6 bg-yellow-50 bg-cover  bg-center text-center'>
      <h2 className='text-2xl md:text-3xl font-serif mb-4 text-yellow-800'>
        {t('rahym')} & {t('mahri')}
      </h2>
      <p className='text-yellow-800'>{t('footerText')}</p>
      {side !== 'girl' ? (
        <p className='mt-6 text-sm text-yellow-800'>{t('weddingDayRahym')}</p>
      ) : (
        <p className='mt-6 text-sm text-yellow-800'>
          {t('weddingDay')} • MSM Hall
        </p>
      )}
    </footer>
  );
};

export default FooterSection;
