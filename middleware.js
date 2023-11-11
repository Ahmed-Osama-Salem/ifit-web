import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

function getLocale(request) {
  const headers = { 'accept-language': request.headers.get('accept-language') };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log('====================================');
  console.log(pathname);
  console.log('====================================');
  // Check if the pathname starts with a supported locale
  const localeMatch = pathname.match(/^\/(en|ar)\b/);
  if (localeMatch) {
    const locale = localeMatch[1];
    // Update the locale in the request object
    request.locale = locale;
    return;
  }

  // Redirect if there is no locale in the pathname
  const locale = getLocale(request);
  console.log('====================================');
  console.log(locale);
  console.log('====================================');
  request.nextUrl.pathname = `/${locale}${pathname}`;
  Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
