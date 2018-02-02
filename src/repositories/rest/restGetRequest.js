import delivery from '../../delivery';

export default async function restGetRequest(deliveryMethod, address, options, dataType, query) {
  if (query) {
    address += "?" + query;
  }

  let data = await delivery(deliveryMethod, address, options, dataType);

  return data;
}