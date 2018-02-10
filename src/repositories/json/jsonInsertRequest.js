import delivery from '../../delivery';

export default async function jsonInsertRequest(deliveryMethod, source, options, mapFromSource, mapToSource, object) {
  let collection = await deliveryMethod(source, options, mapFromSource, mapToSource);
  collection.insert(object);
  
  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}