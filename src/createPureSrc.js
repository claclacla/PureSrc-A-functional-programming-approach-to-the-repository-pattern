export default function createPureSrc(address, deliveryMethod, dataType) {
  return function (deliveryRequest, options) {
    return async function (...requestParameters) {
      let data = await deliveryRequest(
        deliveryMethod,
        address,
        options,
        dataType,
        ...requestParameters
      );

      return data;
    }
  }
}
