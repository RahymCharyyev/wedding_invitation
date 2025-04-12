import { useI18n } from '@/locales/client';
import { Clock } from 'lucide-react';

const ScheduleSection = () => {
  const t = useI18n();
  const schedule = [
    { time: '18:00', event: t('guestArrival') },
    { time: '19:15', event: t('entrance') },
    { time: '19:20', event: t('banket') },
    { time: '22:00', event: t('ending') },
  ];
  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-serif mb-10 text-center text-yellow-800'>
          {t('scheduleTitle')}
        </h2>
        <div className='relative border-l-2 border-yellow-200 pl-6 ml-4 md:ml-8'>
          {schedule.map((item, index) => (
            <div key={index} className='mb-10 relative'>
              <div className='absolute -left-8 w-4 h-4 rounded-full bg-yellow-600 border-4 border-white' />
              <div className='flex items-start'>
                <div className='min-w-24'>
                  <div className='flex items-center'>
                    <Clock className='h-4 w-4 mr-1 text-yellow-600' />
                    <span className='font-medium text-yellow-700'>
                      {item.time}
                    </span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-xl font-medium text-yellow-800'>
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
