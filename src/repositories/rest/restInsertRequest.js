import restDelivery from './restDelivery';

export default async function restInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, body) {
  options.body = body;

  let data = await restDelivery(deliveryMethod, source, options);

  return data;
}