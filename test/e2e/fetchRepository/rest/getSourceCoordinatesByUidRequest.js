import { restDelivery } from '@PureSrc/repositories/rest';

export default async function getSourceCoordinatesByUidRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  if (uid) {
    source += "/" + uid + "/coordinates";
  }

  let restResponse = await restDelivery(deliveryMethod, source, options);

  let srcObject = restResponse.body.data;
  
  let object = mapFromSource(srcObject);

  return object;
}