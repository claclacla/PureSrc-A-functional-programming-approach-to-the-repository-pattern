import delivery from '../../delivery';

export default async function restGetRequest(deliveryMethod, source, options, dataType, query) {
  if (query) {
    source += "?" + query;
  }

  let data = await delivery(deliveryMethod, source, options, dataType);

  return data;
}