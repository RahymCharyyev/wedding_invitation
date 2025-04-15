import { I18nProviderClient } from '@/locales/client';
import theme from '@/theme/themeConfig';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata, Viewport } from 'next';
import { Literata } from 'next/font/google';
import { ReactElement } from 'react';
import './globals.css';
import Loading from './loading';

const literata = Literata({
  variable: '--font-literata',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#9E0000',
};

export const metadata: Metadata = {
  title: 'Wedding Invitation',
  description: 'Wedding Invitation (Rahym & Mahri)',
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
      <body className={`${literata.className} antialiased`}>
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
