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

let sourceRepository = createPureSrc(`${API_ADDRESS}/sources`, fetchDeliveryMethod, DATA_TYPE_JSON);

// Create the repository methods

let sourceGetRequest = sourceRepository(restGetRequest, fetchDeliveryGetOptions());
let sourceGetByUidRequest = sourceRepository(restGetByUidRequest, fetchDeliveryGetOptions());
let sourceInsertRequest = sourceRepository(restInsertRequest, fetchDeliveryPostOptions(jsonHeaders()));
let sourceUpdateRequest = sourceRepository(restUpdateRequest, fetchDeliveryPutOptions(jsonHeaders()));
let sourceDeleteRequest = sourceRepository(restDeleteRequest, fetchDeliveryDeleteOptions());

export default async function fetchTest() {

  // Insert a new Source

  let source = new Source("PureSource");

  try {
    await sourceInsertRequest(jsonToString(source));  
  } catch (error) {
    console.log(error);
    console.log("Product insert error");
    return;
  }

  // Retrieve all the sources

  let sources = null;
  
  try {
    sources = await sourceGetRequest('');    
  } catch (error) {
   console.log("Products retrieve error"); 
   return;
  }

  // Retrieve a source by uid

  source = sources.data[0];

  try {
    await sourceGetByUidRequest(source.uid);    
  } catch (error) {
   console.log("Product retrieve error"); 
   return;
  }

  // Update a source by uid

  source.name = "LiquidSource";

  try {
    await sourceUpdateRequest(source.uid, jsonToString(source)); 
  } catch (error) {
    console.log("Product update error");
    return;
  }

  // Delete a source by uid

  try {
    await sourceDeleteRequest(source.uid); 
  } catch (error) {
    console.log("Product delete error");
    return;
  }
}