import delivery from '../../delivery';

export default async function restGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  if (query) {
    source += "?" + query;
  }

  let data = await delivery(deliveryMethod, source, options, mapFromSource, mapToSource);

  return data;
}