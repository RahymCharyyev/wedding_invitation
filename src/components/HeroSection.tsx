import { useI18n } from '@/locales/client';
import { ChevronRight } from 'lucide-react';
import { Great_Vibes } from 'next/font/google';
import type { FC } from 'react';

interface HeroSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
});

const HeroSection: FC<HeroSectionProps> = ({ side }) => {
  const t = useI18n();

  return side === 'girl' ? (
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
  ) : (
    <section className='relative h-screen flex flex-col items-center justify-end text-center text-white overflow-hidden'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src='/video_intro.mp4' type='video/mp4' />
      </video>
      <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-10'></div>
      <div className='absolute bottom-28 z-20'>
        <h1 className={`${greatVibes.className} text-5xl md:text-7xl mb-4`}>
          {t('rahym')}
        </h1>
        <h2 className={`${greatVibes.className} text-5xl md:text-7xl mb-4`}>
          &
        </h2>
        <h2 className={`${greatVibes.className} text-5xl md:text-7xl mb-4`}>
          {t('mahri')}
        </h2>
      </div>
      <div className='absolute bottom-2 animate-bounce z-20'>
        <p className='text-white text-sm mb-2'>{t('scrollDown')}</p>
        <ChevronRight className='h-6 w-6 rotate-90 mx-auto text-white' />
      </div>
    </section>
  );
};

export default HeroSection;
