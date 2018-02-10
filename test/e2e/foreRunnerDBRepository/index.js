import ForeRunnerDB from 'forerunnerdb'
import createPureSrc from '../../../src/createPureSrc'

import foreRunnerDBDeliveryMethod, { DATA_TYPE_JSON } from '../../../src/deliveryMethods/ForeRunnerDB/foreRunnerDBDeliveryMethod'

// import fetchDeliveryGetOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryGetOptions'
// import fetchDeliveryPostOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryPostOptions'
// import fetchDeliveryPutOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryPutOptions'
// import fetchDeliveryDeleteOptions from '../../../src/deliveryMethods/fetch/options/fetchDeliveryDeleteOptions'

import jsonGetRequest from '../../../src/repositories/json/jsonGetRequest'
// import restGetByUidRequest from '../../../src/repositories/rest/restGetByUidRequest'
import jsonInsertRequest from '../../../src/repositories/json/jsonInsertRequest'
// import restUpdateRequest from '../../../src/repositories/rest/restUpdateRequest'
// import restDeleteRequest from '../../../src/repositories/rest/restDeleteRequest'

import Source from './dtos/Source'
import { jsonToString } from '../../../src/lib/Json'

// Create the repository

let fdb = new ForeRunnerDB();
let db = fdb.db("test");
db.persist.driver("LocalStorage");

// let sources = ["First source", "Second source"].map(name => {
//   let source = new Source(name);
//   return source;
// });

// db.collection("Product").insert(sources);

let sourceRepository = createPureSrc(db.collection("Source"), foreRunnerDBDeliveryMethod, DATA_TYPE_JSON);

// Create the repository methods

let sourceGetRequest = sourceRepository(jsonGetRequest, {});
// let sourceGetByUidRequest = sourceRepository(restGetByUidRequest, fetchDeliveryGetOptions());
let sourceInsertRequest = sourceRepository(jsonInsertRequest, {});
// let sourceUpdateRequest = sourceRepository(restUpdateRequest, fetchDeliveryPutOptions(jsonHeaders()));
// let sourceDeleteRequest = sourceRepository(restDeleteRequest, fetchDeliveryDeleteOptions());

export default async function foreRunnerDBTest() {

  // Insert a new Source

  let source = new Source("Source");

  try {
    await sourceInsertRequest(source); // TODO: jsonToString()  
  } catch (error) {
    console.log("Product insert error");
    return;
  }

  // Retrieve all the sources

  let sources = null;
  
  try {
    sources = await sourceGetRequest('');   
    console.log(sources); 
  } catch (error) {
   console.log("Products retrieve error"); 
   return;
  }

  // // Retrieve a source by uid

  // source = sources.data[0];

  // try {
  //   await sourceGetByUidRequest(source.uid);    
  // } catch (error) {
  //  console.log("Product retrieve error"); 
  //  return;
  // }

  // // Update a source by uid

  // source.name = "LiquidSource";

  // try {
  //   await sourceUpdateRequest(source.uid, jsonToString(source)); 
  // } catch (error) {
  //   console.log("Product update error");
  //   return;
  // }

  // // Delete a source by uid

  // try {
  //   await sourceDeleteRequest(source.uid); 
  // } catch (error) {
  //   console.log("Product delete error");
  //   return;
  // }
}