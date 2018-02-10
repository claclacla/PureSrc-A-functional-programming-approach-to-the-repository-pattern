import restDelivery from './restDelivery';

export default async function restGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  if (query) {
    source += "?" + query;
  }

  // TODO: check restDelivery type

  let restResponse = await restDelivery(deliveryMethod, source, options);

  let srcObjects = restResponse.body.data;
  let object = {};
  let responseObjects = [];

  srcObjects.forEach(srcObject => {
    object = mapFromSource(srcObject);
    responseObjects.push(object);
  });

  return responseObjects;
}