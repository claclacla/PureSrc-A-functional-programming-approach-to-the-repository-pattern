export function jsonToString(jsonData) {
  return JSON.stringify(jsonData);
}

export function stringToJson(stringData) {
  let jsonData = null;

  try {
    jsonData = JSON.parse(stringData); 
  } catch (error) {
    throw new SyntaxError("The supplied string is not a valid json data");
  }

  return jsonData;
} 