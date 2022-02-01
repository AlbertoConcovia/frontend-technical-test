// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehiclesPrices>>}
 */
// TODO: All API related logic should be made inside this function.

export default async function getData() {
  const vPrice = [];
  try {
    const res = await fetch('/api/vehicles.json');
    const allVehicles = await res.json();

    await Promise.all(
      allVehicles.map((vehicle, index) => fetch(vehicle.apiUrl)
        .then((response) => response.json())
        .then((details) => {
          const newArrayVehiclesDetails = { ...allVehicles[index], ...details, };
          if (details.price) vPrice.push(newArrayVehiclesDetails);
        })
        .catch((error) => ({ error })))
    );

    return vPrice;
  } catch (error) {
    console.log(error);
  }
}
