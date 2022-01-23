// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehiclesPrices>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {

  const allVehicles = await fetch('/api/vehicles.json').then((data) => data.json());

  try {
    const vehicleDetails = await Promise.all(
      allVehicles.map((vehicle) => 
        fetch(vehicle.apiUrl)
          .then((response) => response.json())
          .catch((error) => ({ error }))
      )
    );
    const newArrayBeforeFilter = allVehicles.map((element, i) => (
      {
        ...element,
        price: vehicleDetails[i].price ? vehicleDetails[i].price : null,
        description: vehicleDetails[i].description ? vehicleDetails[i].description : null,
      }
    ));
    const vPrice = [];
    newArrayBeforeFilter.forEach((key) => { if (key.price) vPrice.push(key); });
    return vPrice;
  } catch (error) {
    console.log(error);
  }
}
