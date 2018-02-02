import delivery from '../../delivery';

export default async function restUpdateRequest(deliveryMethod, address, options, dataType, uid) {
  if (uid) {
    address += "/" + uid;
  }

  let data = await delivery(deliveryMethod, address, options, dataType);

  return data;
}