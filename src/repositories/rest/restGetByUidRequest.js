import restDelivery from './restDelivery';

export default async function restGetByUidRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  if (uid) {
    source += "/" + uid;
  }

  let data = await restDelivery(deliveryMethod, source, options);

  return data;
}