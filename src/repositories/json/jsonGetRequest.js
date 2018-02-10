import delivery from '../../delivery';

export default async function jsonGetRequest(deliveryMethod, address, options, dataType, query) {
  let collection = await deliveryMethod(address, options, dataType);
  let collectionData = collection.find(query);

  let data = [];
  collectionData.forEach(d => data.push(d));

  return data;
}