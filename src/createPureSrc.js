export default function createPureSrc(source, deliveryMethod, mapFromSource, mapToSource) {
  return function (deliveryRequest, options, requestMapFromSource, requestMapToSource) {
    return async function (...requestParameters) {
      let data = await deliveryRequest(
        deliveryMethod,
        source,
        options,
        requestMapFromSource ? requestMapFromSource : mapFromSource, 
        requestMapToSource ? requestMapToSource : mapToSource,
        ...requestParameters
      );

      return data;
    }
  }
}
