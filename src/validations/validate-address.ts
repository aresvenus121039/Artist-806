import * as Yup from 'yup';
import { AnyObject } from 'yup/lib/types';

//! FUNCTION TO VALIDATE THE ADDRESS
export const validateAddress = async (value: string) => {
  if (value !== undefined) {
    const autoCompleteService = new window.google.maps.places.AutocompleteService();

    const getPredictions = (input: string): Promise<Array<any>> => {
      return new Promise((resolve, reject) => {
        autoCompleteService?.getPlacePredictions(
          { input, componentRestrictions: {} },
          (predictions: any, status: any) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
              resolve(predictions);
            } else {
              reject(status);
            }
          }
        );
      });
    };

    const formatAddress = (input: string) => {
      // remove ", usa" from the end of the string
      const formattedAddress = input.replace(/, usa$/i, '');
      return formattedAddress;
    }

    try {
      const predictions = await getPredictions(value);

      return predictions
        .map((prediction) => formatAddress(prediction.description.toLowerCase()))
        .includes(value.toLowerCase());
    } catch (error) {
      console.error('Error fetching predictions:', error);
      return false;
    }
  }
  return false;
};


//! FUNCTION PASSED TO THE YUP SCHEMA
export async function AddressTest(
  this: Yup.TestContext<AnyObject>,
  value: string | undefined | null
) {
  if (value !== undefined && value !== null) {
    try {
      const isValid = await validateAddress(value);
      return (
        isValid || this.createError({ message: 'Invalid address format.' })
      );
    } catch (error) {
      return this.createError({ message: 'Error during validation.' });
    }
  }
  return true;
}
