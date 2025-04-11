import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  tk: () => import('./tk'),
  ru: () => import('./ru'),
});
