export const BEGIN_REQUEST: string = 'BEGIN_REQUEST';
export const END_REQUEST: string = 'END_REQUEST';

export const NODE_ENVIRONMENTS: Record<string, string> = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  STAGING: 'staging',
};

export const REACT_APP_RECAPTCHA_KEY: string | undefined =
  process.env.NODE_ENV === NODE_ENVIRONMENTS.DEVELOPMENT
    ? process.env.REACT_APP_RECAPTCHA_KEY_DEVELOPMENT
    : process.env.NODE_ENV === NODE_ENVIRONMENTS.STAGING
    ? process.env.REACT_APP_RECAPTCHA_KEY_STAGING
    : process.env.REACT_APP_RECAPTCHA_KEY_PRODUCTION;

export const DEFAULT_SLIDER_MARKS = {
  0: '0',
  20: '20',
  40: '40',
  60: '60',
  80: '80',
  100: '100',
};
export const DEFAULT_SLIDER_MIN_VALUE = 0;
export const DEFAULT_SLIDER_MAX_VALUE = 100;

export const __DEV__ = process.env.NODE_ENV === NODE_ENVIRONMENTS.DEVELOPMENT;
export const ENVIRONMENT = process.env.NODE_ENV;
