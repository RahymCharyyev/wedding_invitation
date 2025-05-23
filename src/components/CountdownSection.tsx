import { useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { FC, useEffect, useState } from 'react';

interface CountdownSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const CountdownSection: FC<CountdownSectionProps> = ({ side }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const t = useI18n();

  const weddingDate =
    side !== 'girl'
      ? new Date('2025-04-30T11:00:00')
      : new Date('2025-04-29T18:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-16 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2
          className={cn(
            'text-3xl md:text-4xl font-serif mb-10',
            side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
          )}
        >
          {t('countdownTitle')}
        </h2>
        <div className='grid grid-cols-4 gap-2 md:gap-6'>
          <div className='bg-white p-4 rounded-lg shadow-md border border-yellow-100'>
            <div
              className={cn(
                'text-3xl md:text-5xl font-bold',
                side !== 'girl' ? ' text-red-700' : 'text-yellow-700'
              )}
            >
              {countdown.days}
            </div>
            <div
              className={cn(
                'text-sm md:text-base',
                side !== 'girl' ? ' text-red-600' : 'text-yellow-600'
              )}
            >
              {t('days')}
            </div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-yellow-100'>
            <div
              className={cn(
                'text-3xl md:text-5xl font-bold',
                side !== 'girl' ? ' text-red-700' : 'text-yellow-700'
              )}
            >
              {countdown.hours}
            </div>
            <div
              className={cn(
                'text-sm md:text-base',
                side !== 'girl' ? ' text-red-600' : 'text-yellow-600'
              )}
            >
              {t('hours')}
            </div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-yellow-100'>
            <div
              className={cn(
                'text-3xl md:text-5xl font-bold',
                side !== 'girl' ? ' text-red-700' : 'text-yellow-700'
              )}
            >
              {countdown.minutes}
            </div>
            <div
              className={cn(
                'text-sm md:text-base',
                side !== 'girl' ? ' text-red-600' : 'text-yellow-600'
              )}
            >
              {t('minutes')}
            </div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-yellow-100'>
            <div
              className={cn(
                'text-3xl md:text-5xl font-bold',
                side !== 'girl' ? ' text-red-700' : 'text-yellow-700'
              )}
            >
              {countdown.seconds}
            </div>
            <div
              className={cn(
                'text-sm md:text-base',
                side !== 'girl' ? ' text-red-600' : 'text-yellow-600'
              )}
            >
              {t('seconds')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
