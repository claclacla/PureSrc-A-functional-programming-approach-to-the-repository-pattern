export default async function delivery(deliveryMethod, address, options, mapFromSource, mapToSource) {
  let data = await deliveryMethod(address, options, mapFromSource, mapToSource);

  return data;
}