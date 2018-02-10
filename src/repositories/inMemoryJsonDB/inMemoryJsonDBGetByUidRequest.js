export default async function inMemoryJsonDBGetByUidRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  let collection = await deliveryMethod(source, options, mapFromSource, mapToSource);
  let srcObjects = collection.find({ uid });

  // TODO: Add check for srcObjects.length === 1

  let object = mapFromSource(srcObjects[0]);

  return object;
}