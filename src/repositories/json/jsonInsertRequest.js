import delivery from '../../delivery';

export default async function jsonInsertRequest(deliveryMethod, source, options, dataType, object) {
  let collection = await deliveryMethod(source, options, dataType);
  collection.insert(object);
  
  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}