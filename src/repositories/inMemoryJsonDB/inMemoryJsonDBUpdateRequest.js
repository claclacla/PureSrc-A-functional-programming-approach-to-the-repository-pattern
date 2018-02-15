export default async function inMemoryJsonDBUpdateRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query, object) {
  let srcObject = mapToSource(object);

  let collection = await deliveryMethod(source, options);
  collection
    .update(query, {
      $replace: srcObject
    })

  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}