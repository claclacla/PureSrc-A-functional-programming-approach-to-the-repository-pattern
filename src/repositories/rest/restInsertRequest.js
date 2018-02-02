import delivery from '../../delivery';

export default async function restInsertRequest(deliveryMethod, address, options, dataType, body) {
  options.body = body;

  let data = await delivery(deliveryMethod, address, options, dataType);

  return data;
}