import delivery from '../../delivery';

export default async function jsonGetRequest(deliveryMethod, address, options, dataType, query) {
  let collection = await deliveryMethod(address, options, dataType);
  let collectionData = collection.find({});

  console.log(collectionData);
  let data = [];
  collectionData.forEach(d => data.push(d));
  console.log(data);

  return data;
}