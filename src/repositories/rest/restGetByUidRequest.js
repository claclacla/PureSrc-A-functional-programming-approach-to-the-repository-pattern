import delivery from '../../delivery';

export default async function restGetByUidRequest(deliveryMethod, source, options, mapFromSource, mapToSource, uid) {
  if (uid) {
    source += "/" + uid;
  }

  let data = await delivery(deliveryMethod, source, options, mapFromSource, mapToSource);

  return data;
}