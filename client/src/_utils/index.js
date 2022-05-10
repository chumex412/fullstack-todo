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

const clearFields = (fields) => {

  for(let field in fields) {
    fields[field] = ""
  }

  return fields
}

const dateFormatOptions = () => {
  return {
    weekday:'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
}

export const utils = {
  checkEmptyFields,
  clearFields,
  dateFormatOptions
}