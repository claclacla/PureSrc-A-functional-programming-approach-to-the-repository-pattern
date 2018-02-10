import { stringToJson } from '../../lib/Json/'
import PureSrcError from '../../errors/PureSrcError'
import DeliveryError from '../../errors/DeliveryError'
import FetchDeliveryResponse from './responses/FetchDeliveryResponse'

export default async function fetchDeliveryMethod(address, options) {
  let body = null;
  let fetchResponse = null;

  try {
    fetchResponse = await fetch(address, options);
  } catch (error) {
    throw new PureSrcError(`Failed to connect to ${address}`);
  }

  if (!fetchResponse.ok) {
    throw new DeliveryError({
      status: fetchResponse.status,
      message: fetchResponse.statusText
    });
  }

  let fetchResponseBody = await fetchResponse.text();

  if (fetchResponseBody) {
    try {
      body = stringToJson(fetchResponseBody);
    } catch (error) {
      throw new Error("Error parsing response data");
    }
  }
  else {
    body = fetchResponseBody;
  }

  let response = new FetchDeliveryResponse({ status: fetchResponse.status, body });

  return response;
}