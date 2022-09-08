import { Store } from 'react-notifications-component'

/**
 * Setter successtoast
 * @param {string} title setter tittel på toastmeldingen
 * @param {string} message setter melding på toasten
 */
export const successMessage = (title, message) => {
  Store.addNotification({
    title,
    message,
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: false
    }
  })
}

/**
 * Setter errortoast
 * @param {string} title setter tittel på toastmeldingen
 * @param {string} message setter melding på toasten
 */
export const errorMessage = (title, message) => {
  Store.addNotification({
    title,
    message,
    type: 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: false
    }
  })
}
