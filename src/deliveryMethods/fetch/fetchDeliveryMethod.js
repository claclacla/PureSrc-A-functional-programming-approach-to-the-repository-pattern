import { stringToJson } from '../../lib/Json/'
import PureSrcError from '../../errors/PureSrcError'
import DeliveryError from '../../errors/DeliveryError'

export const DATA_TYPE_JSON = "JSON";

export default async function fetchDeliveryMethod(source, options, dataType) {
  let data = null;
  let response = null;

  try {
    response = await fetch(source, options);
  } catch (error) {
    throw new PureSrcError(`Failed to connect to ${source}`);
  }

  if(!response.ok) {
    throw new DeliveryError({
      status: response.status,
      message: response.statusText
    });
  }

  switch (dataType) {
    case DATA_TYPE_JSON:
      let responseText = await response.text();

      if (responseText) {
        try {
          data = stringToJson(responseText);
        } catch (error) {
          throw new Error("Error parsing response data");
        }
      }
      else {
        data = responseText;
      }

      break;
  }

  return data;
}