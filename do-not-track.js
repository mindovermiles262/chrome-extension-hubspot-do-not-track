const domain = 'villahomes.com';
// https://knowledge.hubspot.com/privacy-and-consent/what-cookies-does-hubspot-set-in-a-visitor-s-browser
const cookieName = '__hs_do_not_track';
const cookieValue = 'yes';
const secure = false;
const path = '/';

function expires(days=30) {
  daysValidMs = days * 24 * 60 * 60 * 1000;
  return new Date(new Date().getTime() + daysValidMs).toUTCString();
}

document.cookie = `${cookieName}=${cookieValue}; expires=${expires()}; Domain=${domain}; Secure=${secure}; Path=${path}`;