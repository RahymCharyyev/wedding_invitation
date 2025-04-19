import { useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { Calendar } from 'lucide-react';
import { FC } from 'react';

interface InvitationTextProps {
  side: 'boy' | 'girl' | 'selbi';
}

const InvitationText: FC<InvitationTextProps> = ({ side }) => {
  const t = useI18n();
  return (
    <section className='py-16 px-6 bg-[url(/text_bg.webp)] text-center bg-center bg-cover'>
      <div className='max-w-2xl mx-auto'>
        <h2
          className={cn(
            'text-3xl md:text-4xl font-serif mb-8 mt-20 md:mt-0 uppercase',
            side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
          )}
        >
          {t('invitationTitle')}
        </h2>
        <p
          className={cn(
            'text-lg md:text-xl leading-relaxed mb-8',
            side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
          )}
        >
          {t('invitationText')}
        </p>
        <div
          className={cn(
            'mt-12 border-t border-b py-6',
            side !== 'girl' ? ' border-red-200' : 'border-yellow-200'
          )}
        >
          <h3
            className={cn(
              'text-2xl font-serif mb-4 ',
              side !== 'girl' ? ' text-red-700' : 'text-yellow-700'
            )}
          >
            {t('invitationDate')}
          </h3>
          <div className='flex flex-col items-center'>
            <Calendar
              className={cn(
                'h-12 w-12  mb-4',
                side !== 'girl' ? ' text-red-600' : 'text-yellow-600'
              )}
            />
            <p
              className={cn(
                'text-xl font-medium',
                side !== 'girl' ? ' text-red-600' : 'text-yellow-600'
              )}
            >
              {side != 'boy' ? '29.04.2025 - 18:00' : '30.04.2025 - 11:00'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationText;
