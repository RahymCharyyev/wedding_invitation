import { useI18n } from '@/locales/client';
import { Button, Input, message, Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';

const RsvpSection = () => {
  const t = useI18n();
  const [messageApi, contextHolder] = message.useMessage();
  const [rsvpData, setRsvpData] = useState({
    fullname: '',
    attending: '',
  });

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rsvpData),
      });

      if (response.ok) {
        const statusLabel =
          rsvpData.attending === 'yes'
            ? t('attendingYes')
            : rsvpData.attending === 'no'
            ? t('attendingNo')
            : t('attendingMaybe');

        messageApi.success(
          `${t('thankYou', { name: rsvpData.fullname })}\n${t('response', {
            status: statusLabel,
          })}`
        );

        setRsvpData({ fullname: '', attending: '' });
      } else {
        messageApi.error(t('submitError'));
      }
    } catch (error) {
      console.error(error);
      messageApi.error(t('unknownError'));
    }
  };

  return (
    <section className='py-16 px-6 bg-[url(/rsvp.webp)] bg-cover bg-center'>
      {contextHolder}
      <div className='max-w-md mx-auto'>
        <h2 className='text-3xl md:text-4xl font-serif mb-8 text-center text-yellow-800'>
          {t('rsvp')}
        </h2>
        <p className='text-center mb-8 text-yellow-700'>{t('rsvpText')}</p>
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
              className='mt-1 border-yellow-200 focus:ring-yellow-500 focus:border-yellow-500'
              required
            />
          </div>
          <div className='mb-6'>
            <div className='text-yellow-800 block mb-2 font-bold'>
              {t('willYouAttend')}
            </div>
            <Radio.Group
              value={rsvpData.attending}
              onChange={(e: RadioChangeEvent) =>
                setRsvpData({ ...rsvpData, attending: e.target.value })
              }
            >
              <div className='flex flex-col gap-2'>
                <Radio value='yes' className='text-yellow-800'>
                  {t('yes')}
                </Radio>
                <Radio value='no' className='text-yellow-800'>
                  {t('no')}
                </Radio>
                <Radio value='undefined' className='text-yellow-800'>
                  {t('undefinded')}
                </Radio>
              </div>
            </Radio.Group>
          </div>
          <Button
            htmlType='submit'
            className='w-full bg-yellow-600 hover:bg-yellow-700 text-white'
          >
            {t('submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;
