import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { cn } from '@/utils/cn';
import { FC } from 'react';

interface FirstScreenCoverProps {
  setUnlocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstScreenCover: FC<FirstScreenCoverProps> = ({ setUnlocked }) => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const languages = ['ru', 'tk'];

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
        <p className='text-lg text-yellow-700 max-w-[300px] mb-4'>
          {t('clickToOpen')}
        </p>
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

        <button
          onClick={() => setUnlocked(true)}
          className='px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transition'
        >
          {t('openInvitation')}
        </button>
      </div>
    </div>
  );
};

export default FirstScreenCover;
