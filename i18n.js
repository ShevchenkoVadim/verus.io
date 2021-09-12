module.exports = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['navigation', 'footer', 'common'],
    '/': ['home'],
    '/economy': ['economy'],
    '/coin': ['coin', 'faq'],
    '/create-with-verus': ['create'],
    '/foundations': ['foundation'],
    '/global-network': ['globalNetwork', 'coins'],
    '/contribute': ['contribute', 'coins'],
    '/people': ['people'],
    '/wallet': ['wallet'],
    'rgx:/desktop': ['walletDesktop'],
    'rgx:/mobile': ['walletMobile'],
    '/verusid-lookup': ['verusid'],
    '/signatures': ['signatures'],
  },
}
