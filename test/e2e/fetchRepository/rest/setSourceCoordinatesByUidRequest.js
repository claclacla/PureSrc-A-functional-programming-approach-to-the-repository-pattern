import { jsonToString } from '@PureSrc/lib/Json/';
import { restDelivery } from '@PureSrc/repositories/rest';

export default async function setSourceCoordinatesByUidRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query, object) {
  if (query.uid) {
    source += "/" + query.uid + "/coordinates";
  }
  
  let srcObject = mapToSource(object);

  let body = {
    data: srcObject
  };
  options.body = jsonToString(body);

  let restResponse = await restDelivery(deliveryMethod, source, options);
  let restResponseObject = mapFromSource(restResponse.body.data);

  return restResponseObject;
}