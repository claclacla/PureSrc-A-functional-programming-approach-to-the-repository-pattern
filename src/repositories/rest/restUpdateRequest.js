import delivery from '../../delivery';

export default async function restUpdateRequest(deliveryMethod, source, options, dataType, uid, body) {
  if (uid) {
    source += "/" + uid;
  }

  options.body = body;

  let data = await delivery(deliveryMethod, source, options, dataType);

  return data;
}