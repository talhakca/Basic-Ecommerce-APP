import { pathDefinitions } from './path-definitions';

export const authRedirectionPaths = {
  register: {
    afterRegisterRedirectionPath: pathDefinitions.homePagePath,
  },
  login: {
    afterLoginRedirectionPath: pathDefinitions.homePagePath,
  },
};
