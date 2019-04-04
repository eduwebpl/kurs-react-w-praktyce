export const routes = {
  home: '/',
  notes: '/notes',
  note: '/notes/details/:id',
  twitters: '/twitters',
  twitter: '/twitters/details/:id',
  articles: '/articles',
  article: '/articles/details/:id',
  login: '/login',
  new: '/:pageType(twitters|notes|articles)/new',
};
