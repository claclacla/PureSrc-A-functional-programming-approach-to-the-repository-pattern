import delivery from '../../delivery';

export default async function restInsertRequest(deliveryMethod, source, options, dataType, body) {
  options.body = body;

  let data = await delivery(deliveryMethod, source, options, dataType);

  return data;
}