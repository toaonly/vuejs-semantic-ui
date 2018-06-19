export default function isValidProp(value, type)  {
  if(value !== null && value !== undefined) {
    if(value instanceof type) {
      return true;
    }
  }

  return false;
}
