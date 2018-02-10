import { jsonToString } from '../../lib/Json/';
import restDelivery from './restDelivery';

export default async function restInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, object) {
  let srcObject = mapToSource(object);

  let body = {
    data: srcObject
  };
  options.body = jsonToString(body);

  // TODO: check restDelivery type

  let restResponse = await restDelivery(deliveryMethod, source, options);

  return restResponse.body.data;
}