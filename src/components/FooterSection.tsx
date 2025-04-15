import { useI18n } from '@/locales/client';
import { FC } from 'react';

interface FooterSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const FooterSection: FC<FooterSectionProps> = ({ side }) => {
  const t = useI18n();
  return (
    <footer className='py-8 px-6 bg-gray-400 bg-cover  bg-center text-center'>
      <h2 className='text-2xl md:text-3xl font-serif mb-4 text-white'>
        {t('rahym')} & {t('mahri')}
      </h2>
      <p className='text-white'>{t('footerText')}</p>
      {side !== 'girl' ? (
        <p className='mt-6 text-sm text-white'>{t('weddingDayRahym')}</p>
      ) : (
        <p className='mt-6 text-sm text-white'>{t('weddingDay')} • MSM Hall</p>
      )}
    </footer>
  );
};

export default FooterSection;
