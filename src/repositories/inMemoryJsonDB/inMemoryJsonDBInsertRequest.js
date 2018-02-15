export default async function inMemoryJsonDBInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, object) {
  let srcObject = mapToSource(object);

  let collection = await deliveryMethod(source, options);
  collection.insert(srcObject);
  
  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}