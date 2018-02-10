import delivery from '../../delivery';

export default async function restInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, body) {
  options.body = body;

  let data = await delivery(deliveryMethod, source, options, mapFromSource, mapToSource);

  return data;
}