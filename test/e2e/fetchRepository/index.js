import { createPureSrc } from '@PureSrc'
import { fetchDeliveryMethod, jsonHeaders } from '@PureSrc/deliveryMethods/fetch'
import { fetchDeliveryGetOptions, fetchDeliveryPostOptions, fetchDeliveryPutOptions, fetchDeliveryDeleteOptions } from '@PureSrc/deliveryMethods/fetch'

import { restGetRequest, restGetByUidRequest, restInsertRequest, restUpdateRequest, restDeleteRequest } from '@PureSrc/repositories/rest'

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

  try {
    await sourceUpdateRequest({ uid: source.uid }, source);
  } catch (error) {
    console.log("Product update error");
    return;
  }

  // Delete a source by uid

  try {
    await sourceDeleteRequest({ uid: source.uid });
  } catch (error) {
    console.log("Product delete error");
    return;
  }
}