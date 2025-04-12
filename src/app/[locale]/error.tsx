'use client';
import { useI18n } from '@/locales/client';

export default function Error() {
  const t = useI18n();
  return (
    <section className='flex flex-col gap-10 items-center max-w-[1660px] xl:max-w-7xl lg:max-w-[800px] md:max-w-[600px] sm:max-w-[357px] mx-auto py-10'>
      <h2 className='text-3xl font-medium text--colors_primaryRed uppercase'>
        {t('error')}
      </h2>
    </section>
  );
}
