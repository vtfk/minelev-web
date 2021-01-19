/**
 *
 * @param {object} validators Object containing the validators. `test` should return true if OK. `error` should be the error message.
 * @param {object} formFields State object with form fields.
 * @returns {object|false} Returns `false` if there is no errors, otherwise the errors are returned
 *
 * @example
 *    validators: {
 *      name: [
 *        {
 *          test: (val) => val && val.length,
 *          error: 'Name must be filled in!'
 *        }
 *      ],
 *      email: [
 *        {
 *          test: (val) => val && val.length,
 *          error: 'Email must be filled in!'
 *        },
 *        {
 *          test: (val) => (new RegExp(/(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/)).test(val),
 *          error: 'Email is not valid!'
 *        }
 *      ]
 *    },
 *    formFields: {
 *      name: '',
 *      email: 'test@test..com'
 *    }
 * }
 */
export const validateForm = (validators, formFields) => {
  const validateField = (name) => validators[name].find((validator) => !validator.test(getValue(formFields[name]), getValues(formFields)))

  const errors = {}

  Object.keys(validators).forEach(key => {
    const failedValidator = validateField(key)
    if (failedValidator) errors[key] = failedValidator.error
  })

  console.log('form errors', errors)
  return Object.keys(errors).length ? errors : false
}

/**
 * Takes an object and returns the value property.
 * If there is no value property, the object is returned as-is.
 * @param {object} obj Input object
 */
export const getValue = (obj) => obj && obj.value ? obj.value : obj

/**
 * Unpacks the value properties from all the key props on the inputed object using `getValue()`
 * @param {object} obj Input object
 */
export const getValues = (obj) => {
  const valObj = {}
  Object.keys(obj).forEach(key => valObj[key] = getValue(obj[key]))
  return valObj
}
