const supportedLocales = ['ru', 'tm'];

export function getPathWithoutLocale(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (supportedLocales.includes(segments[0])) {
    segments.shift();
  }
  return '/' + segments.join('/');
}
