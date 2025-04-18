import { useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { Button } from 'antd';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
interface VenueSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const VenueSection: FC<VenueSectionProps> = ({ side }) => {
  const t = useI18n();
  return (
    <section
      className={cn(
        'py-16 px-6 bg-yellow-50',
        side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
      )}
    >
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-serif mb-8'>
          {t('venueTitle')}
        </h2>
        <p className='text-xl mb-6'>
          {side !== 'girl' ? t('venueTextRahym') : t('venueText')}
        </p>
        <div className='relative h-[360px] w-full rounded-xl overflow-hidden mb-8'>
          {side !== 'girl' ? (
            <iframe
              className='md:w-[700px] md:h-[450px] w-[350px] h-[250px]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d556.3936668054729!2d58.429260169018235!3d37.920199717935596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffc5a1217e675%3A0xaf92f50686981390!2zODMvMSwgQcWfZ2FiYXQsINCi0YPRgNC60LzQtdC90LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1744734340350!5m2!1sru!2s'
              style={{ border: 0 }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          ) : (
            <Image
              sizes='100%'
              src='/msm.webp'
              alt='MSM Hall'
              fill
              className='object-cover'
            />
          )}
        </div>
        {side !== 'girl' ? undefined : (
          <Button
            className='bg-white'
            onClick={() =>
              window.open('https://maps.app.goo.gl/gepVU9Z2BCysp3bZ8', '_blank')
            }
          >
            <MapPin className='mr-2 h-4 w-4' />
            {t('venueLocation')}
          </Button>
        )}
      </div>
    </section>
  );
};

export default VenueSection;
