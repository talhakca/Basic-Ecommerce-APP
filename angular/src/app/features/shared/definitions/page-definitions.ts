export const pageDefinitions = {
  auth: {
    name: 'Auth',
    title: 'Auth',
    url: 'auth',
    children: {
      login: {
        name: 'Login',
        title: 'Login',
        url: 'login',
      },
      register: {
        name: 'Register',
        title: 'Register',
        url: 'register',
      },
      forgotPassword: {
        name: 'Forgot Password',
        title: 'Forgot Password',
        url: 'forgot-password',
      },
    },
  },
  error: {
    name: 'Error',
    title: 'Error',
    url: 'error',
    children: {
      notFound: {
        name: 'Not Found',
        title: 'Not Found',
        url: '404',
      },
    },
  },
};
