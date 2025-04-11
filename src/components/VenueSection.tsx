import { useI18n } from '@/locales/client';
import { Button } from 'antd';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const VenueSection = () => {
  const t = useI18n();
  return (
    <section className='py-16 px-6 bg-emerald-800 text-white'>
      <div className='max-w-2xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-serif mb-8'>
          {t('venueTitle')}
        </h2>
        <p className='text-xl mb-6'>{t('venueText')}</p>
        <div className='relative h-[360px] w-full rounded-xl overflow-hidden mb-8'>
          <Image src='/msm.jpg' alt='MSM Hall' fill className='object-cover' />
        </div>
        <Button
          className='bg-white text-emerald-800 hover:bg-emerald-100'
          onClick={() =>
            window.open('https://maps.app.goo.gl/gepVU9Z2BCysp3bZ8', '_blank')
          }
        >
          <MapPin className='mr-2 h-4 w-4' />
          {t('venueLocation')}
        </Button>
      </div>
    </section>
  );
};

export default VenueSection;
