const domain = 'villahomes.com';
const cookieName = 'aduss-do-not-track';
const cookieValue = 'true';
const secure = false;
const path = '/';

function expires(days=30) {
  daysValidMs = days * 24 * 60 * 60 * 1000;
  return new Date(new Date().getTime() + daysValidMs).toUTCString();
}

document.cookie = `${cookieName}=${cookieValue}; expires=${expires()}; Domain=${domain}; Secure=${secure}; Path=${path}`;