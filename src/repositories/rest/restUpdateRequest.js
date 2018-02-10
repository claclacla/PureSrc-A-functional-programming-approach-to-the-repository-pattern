import restDelivery from './restDelivery';

export default async function restUpdateRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid, body) {
  if (uid) {
    source += "/" + uid;
  }

  options.body = body;

  let data = await restDelivery(deliveryMethod, source, options);

  return data;
}