import ForeRunnerDB from 'forerunnerdb'
import createPureSrc from '../../../src/createPureSrc'

import foreRunnerDBDeliveryMethod from '../../../src/deliveryMethods/ForeRunnerDB/foreRunnerDBDeliveryMethod'

import jsonGetRequest from '../../../src/repositories/json/jsonGetRequest'
import jsonGetByUidRequest from '../../../src/repositories/json/jsonGetByUidRequest'
import jsonInsertRequest from '../../../src/repositories/json/jsonInsertRequest'
import jsonUpdateRequest from '../../../src/repositories/json/jsonUpdateRequest'
import jsonDeleteRequest from '../../../src/repositories/json/jsonDeleteRequest'

import UID from '../lib/uid/UID';

import Source from './entities/Source';
import SourceDTO from './dtos/SourceDTO';
import mapSourceDTOToSource from './mapToEntities/mapSourceDTOToSource';
import mapSourceToSourceDTO from './mapToDtos/mapSourceToSourceDTO';

// Create the repository

let fdb = new ForeRunnerDB();
let db = fdb.db("test");
db.persist.driver("LocalStorage");

let sources = ["First source", "Second source"].map(name => {
  let source = new SourceDTO({ uid: UID.create(), name });
  return source;
});

db.collection("Source").insert(sources);

let sourceRepository = createPureSrc(
  db.collection("Source"),
  foreRunnerDBDeliveryMethod,
  mapSourceDTOToSource,
  mapSourceToSourceDTO);

// Create the repository methods

let sourceGetRequest = sourceRepository(jsonGetRequest);
let sourceGetByUidRequest = sourceRepository(jsonGetByUidRequest);
let sourceInsertRequest = sourceRepository(jsonInsertRequest);
let sourceUpdateRequest = sourceRepository(jsonUpdateRequest);
let sourceDeleteRequest = sourceRepository(jsonDeleteRequest);

export default async function foreRunnerDBTest() {

  // Insert a new Source

  let source = new Source({ name: "Source" });

  try {
    await sourceInsertRequest(source); // TODO: remove jsonToString() in fetchRepository()  
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
    await sourceUpdateRequest({ uid: source.uid }, source); // TODO: remove jsonToString() in fetchRepository()   
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