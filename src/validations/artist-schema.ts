import * as Yup from 'yup';
import { AddressTest } from './validate-address';

export const basicArtistSchema = {
  first_name: Yup.string().required('First name is a required field.').min(3),
  last_name: Yup.string().required('Last name is a required field.'),
  phoneNumber: Yup.string().required('A valid phone number is required'),
  instagram: Yup.string().required('Instagram is required field.'),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    )
    .required('Website is required field.'),
  about: Yup.string().required('About is a required field.').max(1500),
  fullAddress: Yup.string()
    .required('Address is required field.')
    .test('is-valid-address', 'Invalid address format.', AddressTest),
};
