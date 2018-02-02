import delivery from '../../delivery';

export default async function restGetByUidRequest(deliveryMethod, address, options, dataType, uid) {
  if (uid) {
    address += "/" + uid;
  }

  let data = await delivery(deliveryMethod, address, options, dataType);

  return data;
}