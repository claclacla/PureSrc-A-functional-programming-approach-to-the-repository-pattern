import ForeRunnerDB from 'forerunnerdb'
import createPureSrc from '../../../src/createPureSrc'

import foreRunnerDBDeliveryMethod from '../../../src/deliveryMethods/ForeRunnerDB/foreRunnerDBDeliveryMethod'

import inMemoryJsonDBGetRequest from '../../../src/repositories/inMemoryJsonDB/inMemoryJsonDBGetRequest'
import inMemoryJsonDBGetByUidRequest from '../../../src/repositories/inMemoryJsonDB/inMemoryJsonDBGetByUidRequest'
import inMemoryJsonDBInsertRequest from '../../../src/repositories/inMemoryJsonDB/inMemoryJsonDBInsertRequest'
import inMemoryJsonDBUpdateRequest from '../../../src/repositories/inMemoryJsonDB/inMemoryJsonDBUpdateRequest'
import inMemoryJsonDBDeleteRequest from '../../../src/repositories/inMemoryJsonDB/inMemoryJsonDBDeleteRequest'

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

let sourceGetRequest = sourceRepository(inMemoryJsonDBGetRequest);
let sourceGetByUidRequest = sourceRepository(inMemoryJsonDBGetByUidRequest);
let sourceInsertRequest = sourceRepository(inMemoryJsonDBInsertRequest);
let sourceUpdateRequest = sourceRepository(inMemoryJsonDBUpdateRequest);
let sourceDeleteRequest = sourceRepository(inMemoryJsonDBDeleteRequest);

export default async function foreRunnerDBTest() {

  // Insert a new Source

  let source = new Source({ name: "Source" });

  try {
    await sourceInsertRequest(source); // TODO: remove inMemoryJsonDBToString() in fetchRepository()  
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
    await sourceUpdateRequest({ uid: source.uid }, source); // TODO: remove inMemoryJsonDBToString() in fetchRepository()   
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