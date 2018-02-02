import { stringToJson } from '../../lib/Json/'

export const DATA_TYPE_JSON = "JSON";

export default async function fetchDeliveryMethod(address, options, dataType) {
  let data = null;

  let response = await fetch(address, options);

  switch (dataType) {
    case DATA_TYPE_JSON:
      let responseText = await response.text();
      
      if(responseText) {
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