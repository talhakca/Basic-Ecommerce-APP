import { pageDefinitions } from './page-definitions';

export const pathDefinitions = {
  homePagePath: '/',
  auth: {
    loginPath: `/${pageDefinitions.auth.url}/${pageDefinitions.auth.children.login.url}`,
    registerPath: `/${pageDefinitions.auth.url}/${pageDefinitions.auth.children.register.url}`,
    forgotPasswordPath: `/${pageDefinitions.auth.url}/${pageDefinitions.auth.children.forgotPassword.url}`,
  },
  error: {
    notFoundPath: `/${pageDefinitions.error.url}/${pageDefinitions.error.children.notFound.url}`,
  },
};
