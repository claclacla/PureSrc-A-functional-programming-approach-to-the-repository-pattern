import restDelivery from './restDelivery';

export default async function restDeleteRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  if (query.uid) {
    source += "/" + query.uid;
  }

  await restDelivery(deliveryMethod, source, options);

  return;
}