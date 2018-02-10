import restDelivery from './restDelivery';

export default async function restGetByUidRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  if (uid) {
    source += "/" + uid;
  }

  let restResponse = await restDelivery(deliveryMethod, source, options);

  let srcObject = restResponse.body.data;
  let object = mapFromSource(srcObject);

  return object;
}