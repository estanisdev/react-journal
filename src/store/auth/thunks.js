import {
  registerUserWithEmailPassword,
  signInWithGoogle,
  loginWithEmailPassword,
  logoutFirebase,
} from '../../firebase/providers'
import { clearNotesLogout } from '../journal'
import { checkingCredentials, login, logout } from './'

export const checkingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials())
  }
}

// se le suele poner start al inicio para indicar que se trata de una tarea asincrona
export const startGoogleSignIn = () => {
  return async dispatch => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startCreatingUserWithemailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async dispatch => {
    dispatch(checkingCredentials())

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      })

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkingCredentials())

    const result = await loginWithEmailPassword({ email, password })
    console.log(result)

    if (!result.ok) return dispatch(logout(result))
    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async dispatch => {
    await logoutFirebase()
    dispatch(clearNotesLogout())
    dispatch(logout())
  }
}
