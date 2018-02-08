import delivery from '../../delivery';

export default async function jsonInsertRequest(deliveryMethod, address, options, dataType, object) {
  let collection = await deliveryMethod(address, options, dataType);
  collection.insert(object);

  return new Promise((resolve, reject) => {
    collection.save(function (err) {
      if (!err) {
        resolve();
      }
    });
  });
}