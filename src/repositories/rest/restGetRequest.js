import restDelivery from './restDelivery';

export default async function restGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  if (query) {
    source += "?" + query;
  }

  let response = await restDelivery(deliveryMethod, source, options);

  return data;
}