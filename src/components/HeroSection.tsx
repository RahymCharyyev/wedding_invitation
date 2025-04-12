import { useI18n } from '@/locales/client';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const t = useI18n();
  return (
    <section className='bg-[url(/hero_section_bg.webp)] bg-cover bg-center relative h-screen flex flex-col items-center justify-end text-center text-white'>
      <div className='absolute bottom-28'>
        <h1 className='text-5xl md:text-7xl font-serif mb-4'>{t('rahym')}</h1>
        <h2 className='text-5xl md:text-7xl font-serif mb-4'>&</h2>
        <h2 className='text-5xl md:text-7xl font-serif mb-4'>{t('mahri')}</h2>
      </div>
      <div className='absolute bottom-2 animate-bounce'>
        <p className='text-white text-sm mb-2'>{t('scrollDown')}</p>
        <ChevronRight className='h-6 w-6 rotate-90 mx-auto text-white' />
      </div>
    </section>
  );
};

export default HeroSection;
