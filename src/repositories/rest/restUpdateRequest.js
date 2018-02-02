import delivery from '../../delivery';

export default async function restUpdateRequest(deliveryMethod, address, options, dataType, uid, body) {
  if (uid) {
    address += "/" + uid;
  }

  options.body = body;

  let data = await delivery(deliveryMethod, address, options, dataType);

  return data;
}