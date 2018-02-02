export default async function delivery(deliveryMethod, address, options, dataType) {
  let data = await deliveryMethod(address, options, dataType);

  return data;
}