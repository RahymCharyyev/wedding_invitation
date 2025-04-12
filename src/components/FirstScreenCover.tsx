import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { ChevronRight } from 'lucide-react';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';

interface FirstScreenCoverProps {
  setUnlocked: Dispatch<SetStateAction<boolean>>;
}

const FirstScreenCover: FC<FirstScreenCoverProps> = ({ setUnlocked }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const languages = ['ru', 'tk'];

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    setSliderValue(value);

    if (value >= 90) {
      setUnlocked(true);
    }
  };
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-yellow-50 bg-opacity-90 z-50'>
      <div
        className='absolute inset-0 -z-10 opacity-40'
        style={{
          backgroundImage: "url('/bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className='text-center mb-4 px-4 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-serif mb-2 text-yellow-800'>
          {t('weddingInvitation')}
        </h1>
        <h2 className='text-4xl font-serif mb-8 text-yellow-800'>
          {t('names')}
        </h2>
        <p className='text-lg text-yellow-700 max-w-[300px]'>
          {t('slideToUnlock')}
        </p>
      </div>
      <div className='flex gap-2 justify-center mb-4'>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => changeLocale(lang as never)}
            className={cn(
              'px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer',
              currentLocale === lang
                ? 'bg-yellow-700 text-white shadow-md'
                : 'bg-white text-yellow-700 border border-yellow-300 hover:bg-yellow-100'
            )}
          >
            {lang === 'ru' ? 'Русский' : 'Türkmençe'}
          </button>
        ))}
      </div>
      <div className='w-4/5 max-w-md bg-white rounded-full p-2 shadow-lg border border-gold'>
        <div className='relative h-12 flex items-center px-2'>
          <input
            type='range'
            min='0'
            max='100'
            value={sliderValue}
            onChange={handleSliderChange}
            className='absolute w-full h-full opacity-0 cursor-pointer z-10'
          />
          <div
            className='absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full'
            style={{ width: `${sliderValue}%` }}
          />
          <div
            className={cn(
              'absolute flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-md transition-all duration-300',
              'text-white'
            )}
            style={{
              left: `calc(${sliderValue}% - ${sliderValue * 0.1}px)`,
            }}
          >
            <ChevronRight className='h-6 w-6' />
          </div>
          <div className='absolute w-full text-center text-yellow-700 font-medium'>
            {t('unlockInvitation')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreenCover;
