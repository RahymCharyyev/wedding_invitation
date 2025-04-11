import { useI18n } from '@/locales/client';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const t = useI18n();
  return (
    <section className='bg-black bg-bottom relative h-screen flex flex-col items-center justify-center text-center text-white'>
      <div className='px-4 py-8 rounded-lg z-0'>
        <h1 className='text-5xl md:text-7xl font-serif mb-4'>{t('rahym')}</h1>
        <h2 className='text-5xl md:text-7xl font-serif mb-4'>&</h2>
        <h2 className='text-5xl md:text-7xl font-serif mb-4'>{t('mahri')}</h2>
      </div>
      <div className='absolute bottom-10 animate-bounce'>
        <p className='text-black text-sm mb-2'>{t('scrollDown')}</p>
        <ChevronRight className='h-6 w-6 rotate-90 mx-auto text-black' />
      </div>
    </section>
  );
};

export default HeroSection;
