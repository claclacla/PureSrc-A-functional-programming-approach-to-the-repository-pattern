import createPureSrc from '../../../src/createPureSrc'

import fetchDeliveryMethod, { DATA_TYPE_JSON } from '../../../src/deliveryMethods/fetch/fetchDeliveryMethod'

import jsonHeaders from '../../../src/deliveryMethods/fetch/headers/jsonHeaders'
import fetchDeliveryGetOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryGetOptions'
import fetchDeliveryPostOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryPostOptions'
import fetchDeliveryPutOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryPutOptions'
import fetchDeliveryDeleteOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryDeleteOptions'

import restGetRequest from '../../../src/repositories/rest/restGetRequest'
import restGetByUidRequest from '../../../src/repositories/rest/restGetByUidRequest'
import restInsertRequest from '../../../src/repositories/rest/restInsertRequest'
import restUpdateRequest from '../../../src/repositories/rest/restUpdateRequest'
import restDeleteRequest from '../../../src/repositories/rest/restDeleteRequest'

import Source from './dtos/Source'
import { jsonToString } from '../../../src/lib/Json'

const API_ADDRESS = "http://localhost:3000";

// Create the repository

let productRepository = createPureSrc(`${API_ADDRESS}/sources`, fetchDeliveryMethod, DATA_TYPE_JSON);

// Create the repository methods

let productGetRequest = productRepository(restGetRequest, fetchDeliveryGetOptions());
let productGetByUidRequest = productRepository(restGetByUidRequest, fetchDeliveryGetOptions());
let productInsertRequest = productRepository(restInsertRequest, fetchDeliveryPostOptions(jsonHeaders()));
let productUpdateRequest = productRepository(restUpdateRequest, fetchDeliveryPutOptions(jsonHeaders()));
let productDeleteRequest = productRepository(restDeleteRequest, fetchDeliveryDeleteOptions());

(async () => {

  // Insert a new Source

  let source = new Source("PureSource");

  try {
    await productInsertRequest(jsonToString(source));  
  } catch (error) {
    console.log(error);
    console.log("Product insert error");
    return;
  }

  // Retrieve all the sources

  let sources = null;
  
  try {
    sources = await productGetRequest('');    
  } catch (error) {
   console.log("Products retrieve error"); 
   return;
  }

  // Retrieve a source by uid

  source = sources.data[0];

  try {
    await productGetByUidRequest(source.uid);    
  } catch (error) {
   console.log("Product retrieve error"); 
   return;
  }

  // Update a source by uid

  source.name = "LiquidSource";

  try {
    await productUpdateRequest(source.uid, jsonToString(source)); 
  } catch (error) {
    console.log("Product update error");
    return;
  }

  // Delete a source by uid

  try {
    await productDeleteRequest(source.uid); 
  } catch (error) {
    console.log("Product delete error");
    return;
  }
})();