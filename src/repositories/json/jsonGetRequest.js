import delivery from '../../delivery';

export default async function jsonGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  let collection = await deliveryMethod(source, options, mapFromSource, mapToSource);
  let collectionData = collection.find(query);

  let data = [];
  collectionData.forEach(d => data.push(d));

  return data;
}