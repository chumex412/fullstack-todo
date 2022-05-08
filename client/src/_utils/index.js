const checkEmptyFields = (fields) => {
  let valid = true;

  for(let field in fields) {
    if(!fields[field]) {
      valid = false;

      return valid
    }
  }

  return valid
} 

export const utils = {
  checkEmptyFields
}