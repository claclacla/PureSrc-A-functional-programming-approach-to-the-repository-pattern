import { jsonToString } from '../../lib/Json/';
import restDelivery from './restDelivery';

export default async function restInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, object) {
  let srcObject = mapToSource(object);
  options.body = jsonToString(srcObject);

  let data = await restDelivery(deliveryMethod, source, options);

  return data;
}