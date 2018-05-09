import { jsonToString } from '../../lib/Json/';
import restDelivery from './restDelivery';

export default async function restUpdateRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query, object) {
  if (query.uid) {
    source += "/" + query.uid;
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