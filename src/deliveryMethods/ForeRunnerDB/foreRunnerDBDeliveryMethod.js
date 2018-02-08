//import { stringToJson } from '../../lib/Json/'
//import ForeRunnerDB from 'forerunnerdb'

export const DATA_TYPE_JSON = "JSON";

// TODO: Rename ineach file the 'address' property name with 'source'
// TODO: According to the previous change, update the README.md file 

export default async function foreRunnerDBDeliveryMethod(address, options, dataType) {
  return address.collection(address);

  /*
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
  */

  //return data;
}