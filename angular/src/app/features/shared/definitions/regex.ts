export const US_PHONE_MASK = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const US_PHONE_REGEX = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;

export const EMAIL_REGEX =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

export const PASSWORD_REGEX =
  /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*([^\w\s]|[_]))\S{8,}$/;

export const SPECIAL_CHARACTER_REGEX = /(?=\S*([^\w\s]|[_]))/;

export const EMAIL_AND_US_PHONE_REGEX = /^(?:\d{10}|\w+@\w+\.\w{2,})$/;

export const MENTION_ALLOWED_CHARS = /^[A-Za-z\sÅÄÖåäö]*$/;

export const VERSION_MASK = [/[0-9]/, '.', /[0-9]/, '.', /[0-9]/];

export const PAGE_PATH_REGEX = /^[a-z][a-z0-9\-]*$/;

export const PROJECT_SETTING_AND_ENVIRONMENT_VARIABLE_KEY_REGEX =
  /^[a-zA-Z\_][a-zA-Z0-9\_]+$/;

export const PROJECT_KEY_REGEX = /^[a-z0-9][a-z0-9\-]*$/;

export const PROJECT_NAME_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9\W]*$/;

export const PHONE_NUMBER_CLEANSE_REGEX = /[\-\(\)\s]/g;
