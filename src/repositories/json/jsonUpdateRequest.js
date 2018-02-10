export default async function jsonUpdateRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query, object) {
  let srcObject = mapToSource(object);

  let collection = await deliveryMethod(source, options, mapFromSource, mapToSource);
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