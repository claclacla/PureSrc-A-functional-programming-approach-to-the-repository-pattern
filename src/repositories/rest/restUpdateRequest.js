import { jsonToString } from '../../lib/Json/';
import restDelivery from './restDelivery';

export default async function restUpdateRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid, object) {
  if (uid) {
    source += "/" + uid;
  }

  let srcObject = mapToSource(object);

  let body = {
    data: srcObject
  };
  options.body = jsonToString(body);

  let restResponse = await restDelivery(deliveryMethod, source, options);

  return restResponse.body.data;
}