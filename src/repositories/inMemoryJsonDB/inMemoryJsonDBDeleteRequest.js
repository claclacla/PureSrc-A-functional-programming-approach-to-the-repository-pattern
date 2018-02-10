export default async function inMemoryJsonDBDeleteRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  let collection = await deliveryMethod(source, options);
  collection.remove(query);
  
  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}