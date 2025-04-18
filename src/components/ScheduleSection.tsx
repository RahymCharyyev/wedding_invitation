import { useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { Clock } from 'lucide-react';
import { FC } from 'react';

interface ScheduleSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const ScheduleSection: FC<ScheduleSectionProps> = ({ side }) => {
  const t = useI18n();
  let schedule;

  if (side !== 'girl') {
    schedule = [
      { time: '11:00', event: t('guestArrival') },
      { time: '12:00', event: t('gelinalyjy') },
      { time: '18:00', event: t('gapyToy') },
      { time: '23:00', event: t('ending') },
    ];
  } else {
    schedule = [
      { time: '18:00', event: t('guestArrival') },
      { time: '19:15', event: t('entrance') },
      { time: '19:20', event: t('banket') },
      { time: '23:00', event: t('ending') },
    ];
  }

  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-2xl mx-auto'>
        <h2
          className={cn(
            'text-3xl md:text-4xl font-serif mb-10 text-center',
            side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
          )}
        >
          {t('scheduleTitle')}
        </h2>
        <div
          className={cn(
            'relative border-l-2  pl-6 ml-4 md:ml-8',
            side !== 'girl' ? 'border-red-200' : 'border-yellow-200'
          )}
        >
          {schedule.map((item, index) => (
            <div key={index} className='mb-10 relative'>
              <div
                className={cn(
                  'absolute -left-8 w-4 h-4 rounded-full  border-4 border-white',
                  side !== 'girl' ? 'bg-red-600' : 'bg-yellow-600'
                )}
              />
              <div className='flex items-start'>
                <div className='min-w-24'>
                  <div className='flex items-center'>
                    <Clock
                      className={cn(
                        'h-4 w-4 mr-1',
                        side !== 'girl' ? 'text-red-600' : 'text-yellow-600'
                      )}
                    />
                    <span
                      className={cn(
                        'font-medium',
                        side !== 'girl' ? 'text-red-700' : 'text-yellow-700'
                      )}
                    >
                      {item.time}
                    </span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3
                    className={cn(
                      'text-xl font-medium',
                      side !== 'girl' ? 'text-red-800' : 'text-yellow-800'
                    )}
                  >
                    {item.event}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
