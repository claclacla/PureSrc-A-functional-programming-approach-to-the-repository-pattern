// TODO: Add support for filters with validation

export default async function inMemoryJsonDBGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  let collection = await deliveryMethod(source, options, mapFromSource, mapToSource);
  let srcObjects = collection.find(query);

  let object = {};
  let responseObjects = [];

  srcObjects.forEach(srcObject => {
    object = mapFromSource(srcObject);
    responseObjects.push(object);
  });

  return responseObjects;
}