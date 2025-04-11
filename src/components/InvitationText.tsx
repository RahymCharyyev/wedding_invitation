import { useI18n } from '@/locales/client';
import { Calendar } from 'lucide-react';

const InvitationText = () => {
  const t = useI18n();
  return (
    <section className='py-16 px-6 bg-emerald-50 text-center'>
      <div className='max-w-2xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-serif mb-8 text-emerald-800 uppercase'>
          {t('invitationTitle')}
        </h2>
        <p className='text-lg md:text-xl leading-relaxed mb-8'>
          {t('invitationText')}
        </p>
        <div className='mt-12 border-t border-b border-emerald-200 py-6'>
          <h3 className='text-2xl font-serif mb-4 text-emerald-700'>
            {t('invitationDate')}
          </h3>
          <div className='flex flex-col items-center'>
            <Calendar className='h-12 w-12 text-emerald-600 mb-4' />
            <p className='text-xl font-medium'> 29.04.2025 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationText;
