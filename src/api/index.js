// eslint-disable-next-line no-unused-vars
import { request } from "./helpers";

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehiclesPrices>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  // Fetch the list of vehicles with summaries
  const vehiclesResponse = await fetch('/api/vehicles.json').then(
    (response) => {
      return response.json();
    }
  );

  console.log(`vehiclesResponse ${JSON.stringify(vehiclesResponse)}`);

  // const vehiclesPrices = [];

  // vehiclesResponse.forEach((vehicle) => {
  //     // Get the details for the vehicle
  //     fetch(vehicle.apiUrl)
  //         .then((response) => {
  //             return response.json();
  //         })
  //         .then((vehicleDetails) => {
  //             // Check that the vehicle has a valid price
  //             if (
  //                 vehicleDetails.price !== "" &&
  //                 vehicleDetails.price !== null
  //             ) {
  //                 vehiclesPrices.push(vehicle);
  //             }
  //         });
  // });
  // return vehiclesPrices;
  return vehiclesResponse;
}
