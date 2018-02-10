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

let productRepository = createPureSrc(db.collection("Product"), foreRunnerDBDeliveryMethod, DATA_TYPE_JSON);

// Create the repository methods

let productGetRequest = productRepository(jsonGetRequest, {});
// let productGetByUidRequest = productRepository(restGetByUidRequest, fetchDeliveryGetOptions());
let productInsertRequest = productRepository(jsonInsertRequest, {});
// let productUpdateRequest = productRepository(restUpdateRequest, fetchDeliveryPutOptions(jsonHeaders()));
// let productDeleteRequest = productRepository(restDeleteRequest, fetchDeliveryDeleteOptions());

export default async function foreRunnerDBTest() {

  // Insert a new Source

  let source = new Source("Source");

  try {
    await productInsertRequest(source); // TODO: jsonToString()  
  } catch (error) {
    console.log("Product insert error");
    return;
  }

  // Retrieve all the sources

  let sources = null;
  
  try {
    sources = await productGetRequest('');   
    console.log(sources); 
  } catch (error) {
   console.log("Products retrieve error"); 
   return;
  }

  // // Retrieve a source by uid

  // source = sources.data[0];

  // try {
  //   await productGetByUidRequest(source.uid);    
  // } catch (error) {
  //  console.log("Product retrieve error"); 
  //  return;
  // }

  // // Update a source by uid

  // source.name = "LiquidSource";

  // try {
  //   await productUpdateRequest(source.uid, jsonToString(source)); 
  // } catch (error) {
  //   console.log("Product update error");
  //   return;
  // }

  // // Delete a source by uid

  // try {
  //   await productDeleteRequest(source.uid); 
  // } catch (error) {
  //   console.log("Product delete error");
  //   return;
  // }
}