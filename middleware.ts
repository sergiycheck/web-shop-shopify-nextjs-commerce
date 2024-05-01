import { NextResponse, NextRequest } from 'next/server';
// import { match } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';

const locales = ['en-US', 'uk-UA', 'uk'];
// const defaultLocale = 'uk-UA';

// function getLocale(request: NextRequest) {
//   const headers = request.headers;
//   const languages = new Negotiator({ headers }).languages();

//   // return match(languages, locales, defaultLocale);
// }

export function middleware(request: NextRequest) {
  console.log(request.url);

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = 'uk';

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/images|images|favicon.ico).*)']
};
