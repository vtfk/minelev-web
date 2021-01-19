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
  const validateField = (name) => validators[name].find((validator) => !validator.test(formFields[name]))
  
  const errors = {}

  Object.keys(validators).forEach(key => {
    const failedValidator = validateField(key)
    if (failedValidator) errors[key] = failedValidator.error
  })

  return Object.keys(errors).length ? errors : false
}
