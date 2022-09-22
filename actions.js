import { firebaseApp } from "./firebase"
import * as firebase from 'firebase'
import 'firebase/firestore'

const db = firebase.firestore (firebaseApp)

export const isUserLogger = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !==null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}