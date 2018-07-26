/**
 * @param {any} value it will be checked value for is validation
 * @param {string | Object} type JavaScript Primitive Type
 */
function isValidProp(value, type)  {
  if (type !== null && type !== undefined && value !== null && value !== undefined) {
    if (typeof type === 'string') {
      if (typeof value === type) {
        return true;
      }
    }

    if(typeof type === 'function')  {
      if (value instanceof type) {
        return true;
      }
    }
  }

  return false;
}

const isValid = {
  string: (value) => isValidProp(value, 'string'),
  number: (value) => isValidProp(value, 'number'),
  boolean: (value) => isValidProp(value, 'boolean'),
  object: (value) => isValidProp(value, 'object'),
  function: (value) => isValidProp(value, 'function'),
  array: (value) => isValidProp(value, Array),
  symbol: (value) => isValidProp(value, Symbol),
}

/**
 * 숫자를 영어로 변환
 *
 * @param {number} value
 */
const convertNumberToWord = (value) => {
  let result;

  if (isValid.number(value)) {
    switch (value) {
      case 1: result = 'one'; break;
      case 2: result = 'two'; break;
      case 3: result = 'three'; break;
      case 4: result = 'four'; break;
      case 5: result = 'five'; break;
      case 6: result = 'six'; break;
      case 7: result = 'seven'; break;
      case 8: result = 'eight'; break;
      case 9: result = 'nine'; break;
      case 10: result = 'ten'; break;
      case 11: result = 'eleven'; break;
      case 12: result = 'twelve'; break;
      case 13: result = 'thirteen'; break;
      case 14: result = 'fourteen'; break;
      case 15: result = 'fifteen'; break;
      case 16: result = 'sixteen'; break;
      default: result = 'one';
    }
  }

  return result;
}

export {
  isValid,
  isValidProp,
  convertNumberToWord
}
