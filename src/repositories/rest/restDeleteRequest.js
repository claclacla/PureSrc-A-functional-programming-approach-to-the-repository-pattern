import restDelivery from './restDelivery';

export default async function restDeleteRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  if (uid) {
    source += "/" + uid;
  }

  await restDelivery(deliveryMethod, source, options);

  return;
}