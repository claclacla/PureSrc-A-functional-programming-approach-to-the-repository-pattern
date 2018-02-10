export default function createPureSrc(source, deliveryMethod, mapFromSource, mapToSource) {
  return function (deliveryRequest, options) {
    return async function (...requestParameters) {
      let data = await deliveryRequest(
        deliveryMethod,
        source,
        options,
        mapFromSource, 
        mapToSource,
        ...requestParameters
      );

      return data;
    }
  }
}
