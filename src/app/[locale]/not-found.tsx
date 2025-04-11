import { getI18n } from '@/locales/server';
import Button from 'antd/es/button';

export default async function NotFound() {
  const t = await getI18n();
  return (
    <section className='flex flex-col gap-10 items-center max-w-[1660px] xl:max-w-7xl lg:max-w-[800px] md:max-w-[600px] sm:max-w-[357px] mx-auto py-10'>
      <h2 className='text-3xl font-medium uppercase'>{t('error')}</h2>
      <h3 className='text-6xl'>404</h3>
      <p>{t('notFoundText')}</p>
      <Button type='primary' block href='/' className='w-28'>
        {t('main')}
      </Button>
    </section>
  );
}
