/**
 *
 * @param {object} validators Object containing the validators. `test` should return true if OK. `error` should be the error message.
 * @param {object} formFields State object with form fields. If the values is packed within a object (with a `value` property, as for `Select`/`SelectMultiple`), these are unpacked.
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
 *      ],
 *      message: [
 *        {
 *          test: (val, formFields) => formFields.email === 'mats@matsa.no' || val && val.length > 999,
 *          error: 'The message must be over 999 letters, if you are\'t cool enough.'
 *        }
 *      ]
 *    },
 *    formFields: {
 *      name: '',
 *      email: 'test@test..com',
 *      message: {
 *        value: 'This is a message!'
 *      }
 *    }
 * }
 */
export const validateForm = (validators, formFields) => {
  const errors = {}

  Object.keys(validators).forEach(key => {
    const failedValidator = validateField(key, validators, formFields)
    if (failedValidator) errors[key] = failedValidator.error
  })

  return Object.keys(errors).length ? errors : false
}

export const validateField = (name, validators, formFields) =>
  validators[name].find(
    (validator) => !validator.test(getValue(formFields[name]), getValues(formFields))
  )

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
  Object.keys(obj).forEach(key => { valObj[key] = getValue(obj[key]) })
  return valObj
}

export const isValidMobile = (mobile = '') => 
  mobile.trim()
  .replace(/ /g, '')
  .replace(/^\+47/, '')
  .replace(/^0047/, '')
  .replace(/[^0-9]/g, '')
  .length === 8

export const isValidEmail = (email = '') => 
  new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
   .test(email)
