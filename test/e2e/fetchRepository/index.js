import { createPureSrc } from '@PureSrc'
import { fetchDeliveryMethod, jsonHeaders } from '@PureSrc/deliveryMethods/fetch'
import { fetchDeliveryGetOptions, fetchDeliveryPostOptions, fetchDeliveryPutOptions, fetchDeliveryDeleteOptions } from '@PureSrc/deliveryMethods/fetch'

import { restGetRequest, restGetByUidRequest, restInsertRequest, restUpdateRequest, restDeleteRequest } from '@PureSrc/repositories/rest'

import Source from '../entities/Source';
import SourceCoordinates from '../entities/SourceCoordinates';
import mapSourceDTOToSource from '../mapToEntities/mapSourceDTOToSource';
import mapSourceCoordinatesDTOToSourceCoordinates from '../mapToEntities/mapSourceCoordinatesDTOToSourceCoordinates';
import mapSourceToSourceDTO from '../mapToDtos/mapSourceToSourceDTO';
import mapSourceCoordinatesToSourceCoordinatesDTO from '../mapToDtos/mapSourceCoordinatesToSourceCoordinatesDTO';

import getSourceCoordinatesByUidRequest from './rest/getSourceCoordinatesByUidRequest';
import setSourceCoordinatesByUidRequest from './rest/setSourceCoordinatesByUidRequest';

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

let retrieveSourceCoordinatesByUidRequest = sourceRepository(getSourceCoordinatesByUidRequest, fetchDeliveryGetOptions(), mapSourceCoordinatesDTOToSourceCoordinates);
let updateSourceCoordinatesByUidRequest = sourceRepository(setSourceCoordinatesByUidRequest, fetchDeliveryPutOptions(jsonHeaders()), mapSourceCoordinatesDTOToSourceCoordinates, mapSourceCoordinatesToSourceCoordinatesDTO);

export default async function fetchTest() {

  // Insert a new Source

  const SOURCE_NAME = "PureSrc";
  let source = new Source({ name: SOURCE_NAME, lat: 47.007903, lng: 11.745257 });

  try {
    await sourceInsertRequest(source);
  } catch (error) {
    console.log("Source insert error");
    return;
  }

  // Retrieve all the sources

  let sources = null;

  try {
    sources = await sourceGetRequest('');
  } catch (error) {
    console.log("Sources retrieve error");
    return;
  }

  // Retrieve a source by uid

  source = sources.find(repositorySource => repositorySource.name === SOURCE_NAME);

  try {
    await sourceGetByUidRequest(source.uid);
  } catch (error) {
    console.log("Source retrieve error");
    return;
  }

  // Update a source by uid

  source.name = "LiquidSource";

  try {
    await sourceUpdateRequest({ uid: source.uid }, source);
  } catch (error) {
    console.log("Source update error");
    return;
  }

  // Update a source coordinates by uid

  let newSourceCoordinates = new SourceCoordinates({ lat: 47.007903, lng: 11.745257 });

  try {
    await updateSourceCoordinatesByUidRequest({ uid: source.uid }, newSourceCoordinates);
  } catch (error) {
    console.log("Source update error");
    return;
  }

  // Retrieve a source coordinates by uid

  try {
    let coordinates = await retrieveSourceCoordinatesByUidRequest(source.uid);
  } catch (error) {
    console.log("Source coordinates retrieve error");
    return;
  }

  // Delete a source by uid

  try {
    await sourceDeleteRequest({ uid: source.uid });
  } catch (error) {
    console.log("Source delete error");
    return;
  }

  // Test 404 Not found response on retrieving the previous source object

  try {
    await sourceGetByUidRequest(source.uid);
  } catch (error) {
    return;
  }
}