import { useI18n } from '@/locales/client';
import { Button, Input, Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

const RsvpSection = () => {
  const t = useI18n();
  const [rsvpData, setRsvpData] = useState({
    fullname: '',
    attending: '',
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to a server
    alert(
      `Thank you ${rsvpData.fullname} for your response: ${
        rsvpData.attending === 'yes' ? 'Attending' : 'Not attending'
      }`
    );
  };
  return (
    <section className='py-16 px-6 bg-emerald-50'>
      <div className='max-w-md mx-auto'>
        <h2 className='text-3xl md:text-4xl font-serif mb-8 text-center text-emerald-800'>
          {t('rsvp')}
        </h2>
        <p className='text-center mb-8 text-emerald-700'>{t('rsvpText')}</p>
        <form
          onSubmit={handleRsvpSubmit}
          className='bg-white p-6 rounded-lg shadow-md'
        >
          <div className='mb-6'>
            <Input
              placeholder={t('fullName')}
              id='fullname'
              value={rsvpData.fullname}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, fullname: e.target.value })
              }
              className='mt-1 border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500'
              required
            />
          </div>
          <div className='mb-6'>
            <div className='text-emerald-800 block mb-2 font-bold'>
              {t('willYouAttend')}
            </div>
            <Radio.Group
              value={rsvpData.attending}
              onChange={(e: RadioChangeEvent) =>
                setRsvpData({ ...rsvpData, attending: e.target.value })
              }
            >
              <div className='flex flex-col gap-2'>
                <Radio value='yes' className='text-emerald-800'>
                  {t('yes')}
                </Radio>
                <Radio value='no' className='text-emerald-800'>
                  {t('no')}
                </Radio>
                <Radio value='undefined' className='text-emerald-800'>
                  {t('undefinded')}
                </Radio>
              </div>
            </Radio.Group>
          </div>
          <Button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white'>
            {t('submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;
