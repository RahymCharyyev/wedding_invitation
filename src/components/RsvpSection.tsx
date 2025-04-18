import { useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { getPathWithoutLocale } from '@/utils/getPathname';
import { Button, Input, message, Radio, RadioChangeEvent } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';

interface RsvpSectionProps {
  side: 'boy' | 'girl' | 'selbi';
}

const RsvpSection: FC<RsvpSectionProps> = ({ side }) => {
  const t = useI18n();
  const [messageApi, contextHolder] = message.useMessage();
  const [rsvpData, setRsvpData] = useState({
    fullname: '',
    attending: '',
    site: '',
    wishes: '',
  });
  const pathname = usePathname();
  const cleanPath = getPathWithoutLocale(pathname);
  const lastSegment = cleanPath.split('/').pop();

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let site = 'rahym';

      if (lastSegment?.includes('mahri')) {
        site = 'mahri';
      } else if (lastSegment?.includes('selbi')) {
        site = 'selbi';
      }

      const dataToSubmit = {
        fullname: rsvpData.fullname,
        attending: rsvpData.attending,
        site,
        wishes: rsvpData.wishes,
      };

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
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

        setRsvpData({
          fullname: '',
          attending: '',
          site: '',
          wishes: '',
        });
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
        <h2
          className={cn(
            'text-3xl md:text-4xl font-serif mb-8 text-center',
            side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
          )}
        >
          {t('rsvp')}
        </h2>
        <p
          className={cn(
            'text-center mb-8',
            side !== 'girl' ? ' text-red-700' : 'text-yellow-700'
          )}
        >
          {t('rsvpText')}
        </p>
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
              className={cn(
                'mt-1',
                side !== 'girl'
                  ? ' border-red-200 focus:ring-red-500 focus:border-red-500'
                  : 'border-yellow-200 focus:ring-yellow-500 focus:border-yellow-500'
              )}
              required
            />
          </div>
          <div className='mb-6'>
            <div
              className={cn(
                'block mb-2 font-bold',
                side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
              )}
            >
              {t('willYouAttend')}
            </div>
            <Radio.Group
              value={rsvpData.attending}
              onChange={(e: RadioChangeEvent) =>
                setRsvpData({ ...rsvpData, attending: e.target.value })
              }
            >
              <div className='flex flex-col gap-2'>
                <Radio
                  value='yes'
                  className={cn(
                    side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
                  )}
                >
                  {t('yes')}
                </Radio>
                <Radio
                  className={cn(
                    side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
                  )}
                  value='no'
                >
                  {t('no')}
                </Radio>
                <Radio
                  className={cn(
                    side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
                  )}
                  value='undefined'
                >
                  {t('undefinded')}
                </Radio>
              </div>
            </Radio.Group>
          </div>
          <div className='mb-6'>
            <div
              className={cn(
                'block mb-2 font-bold',
                side !== 'girl' ? ' text-red-800' : 'text-yellow-800'
              )}
            >
              {t('wishesTitle')}
            </div>
            <TextArea
              rows={4}
              placeholder={t('wishesPlaceholder')}
              value={rsvpData.wishes}
              onChange={(e) =>
                setRsvpData({ ...rsvpData, wishes: e.target.value })
              }
              className={cn(
                side !== 'girl'
                  ? ' border-red-200 focus:ring-red-500 focus:border-red-500'
                  : 'border-yellow-200 focus:ring-yellow-500 focus:border-yellow-500'
              )}
            />
          </div>
          <Button
            htmlType='submit'
            className={cn(
              'w-full',
              side !== 'girl'
                ? ' bg-red-600 hover:bg-red-700 text-white'
                : 'bg-yellow-600 hover:bg-yellow-700 text-white'
            )}
          >
            {t('submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default RsvpSection;
