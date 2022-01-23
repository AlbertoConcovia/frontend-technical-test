// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehiclesPrices>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {

const vehiclesResponse = await fetch('/api/vehicles.json').then((data) => data.json());
  try {
    const vehicleResponses = await Promise.all(
      vehiclesResponse.map((element) => fetch(element.apiUrl)
        .then((response) => response.json())
        .catch((error) => ({ error })))
    );

    const newArrayBeforeFilter = vehiclesResponse.map((element, i) => (
      {
        ...element,
        price: vehicleResponses[i].price ? vehicleResponses[i].price : null,
        description: vehicleResponses[i].description ? vehicleResponses[i].description : null,
      }
    ));

    const vPrice = [];
    newArrayBeforeFilter.forEach((key) => { if (key.price) vPrice.push(key); });

    return vPrice;

  } catch (error) {
    console.log(error);
  }


}
