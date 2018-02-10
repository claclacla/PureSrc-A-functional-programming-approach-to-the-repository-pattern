import { jsonToString } from '../../lib/Json/';
import restDelivery from './restDelivery';

export default async function restInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, object) {
  let srcObject = mapToSource(object);

  let body = {
    data: srcObject
  };
  options.body = jsonToString(body);

  let data = await restDelivery(deliveryMethod, source, options);

  return data;
}