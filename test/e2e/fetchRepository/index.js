import createPureSrc from '../../../src/createPureSrc'

import fetchDeliveryMethod from '../../../src/deliveryMethods/fetch/fetchDeliveryMethod'

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

import Source from '../entities/Source';
import mapSourceDTOToSource from '../mapToEntities/mapSourceDTOToSource';
import mapSourceToSourceDTO from '../mapToDtos/mapSourceToSourceDTO';

import { jsonToString } from '../../../src/lib/Json'

const API_ADDRESS = "http://localhost:3000";

// Create the repository

let sourceRepository = createPureSrc(
  `${API_ADDRESS}/sources`,
  fetchDeliveryMethod,
  mapSourceDTOToSource,
  mapSourceToSourceDTO);

// Create the repository methods

let sourceGetRequest = sourceRepository(restGetRequest, fetchDeliveryGetOptions());
let sourceGetByUidRequest = sourceRepository(restGetByUidRequest, fetchDeliveryGetOptions());
let sourceInsertRequest = sourceRepository(restInsertRequest, fetchDeliveryPostOptions(jsonHeaders()));
let sourceUpdateRequest = sourceRepository(restUpdateRequest, fetchDeliveryPutOptions(jsonHeaders()));
let sourceDeleteRequest = sourceRepository(restDeleteRequest, fetchDeliveryDeleteOptions());

export default async function fetchTest() {

  // Insert a new Source

  let source = new Source({ name: "PureSource" });

  try {
    await sourceInsertRequest(source);
  } catch (error) {
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

  source = sources[0];

  try {
    await sourceGetByUidRequest(source.uid);
  } catch (error) {
    console.log("Product retrieve error");
    return;
  }

  // Update a source by uid

  source.name = "LiquidSource";

  console.log(await sourceGetRequest(''));

  try {
    await sourceUpdateRequest(source.uid, source);
  } catch (error) {
    console.log("Product update error");
    return;
  }

  console.log(await sourceGetRequest(''));

  // Delete a source by uid

  try {
    await sourceDeleteRequest(source.uid);
  } catch (error) {
    console.log("Product delete error");
    return;
  }

  console.log(await sourceGetRequest(''));
}