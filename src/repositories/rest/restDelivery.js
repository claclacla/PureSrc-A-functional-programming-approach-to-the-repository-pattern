export default async function restDelivery(deliveryMethod, address, options, mapFromSource, mapToSource) {
  let data = await deliveryMethod(address, options, mapFromSource, mapToSource);

  return data;
}