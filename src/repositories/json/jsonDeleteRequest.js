export default async function jsonDeleteRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  let collection = await deliveryMethod(source, options, mapFromSource, mapToSource);
  collection.remove(query);
  
  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}