export default function createPureSrc(source, deliveryMethod, dataType) {
  return function (deliveryRequest, options) {
    return async function (...requestParameters) {
      let data = await deliveryRequest(
        deliveryMethod,
        source,
        options,
        dataType,
        ...requestParameters
      );

      return data;
    }
  }
}
