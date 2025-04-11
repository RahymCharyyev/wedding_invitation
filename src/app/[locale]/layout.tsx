import { I18nProviderClient } from '@/locales/client';
import theme from '@/theme/themeConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Viewport } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { ReactElement } from 'react';
import './globals.css';
import Loading from './loading';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const viewport: Viewport = {
  themeColor: '#9E0000',
};

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head />
      <body className={`antialiased`}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <I18nProviderClient locale={locale} fallback={<Loading />}>
              {children}
            </I18nProviderClient>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
