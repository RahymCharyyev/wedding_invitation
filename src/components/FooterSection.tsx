import { useI18n } from '@/locales/client';

const FooterSection = () => {
  const t = useI18n();
  return (
    <footer className='py-8 px-6 bg-emerald-900 text-white text-center'>
      <h2 className='text-2xl md:text-3xl font-serif mb-4'>
        {t('rahym')} & {t('mahri')}
      </h2>
      <p className='text-emerald-100'>{t('footerText')}</p>
      <p className='mt-6 text-sm text-emerald-200'>
        {t('weddingDay')} • MSM Hall
      </p>
    </footer>
  );
};

export default FooterSection;
