import    fetchAPI,
       {  postAPI, 
          patchAPI } from './fetchAPI'


export function signIn( { email, passowrd } ) {
  return postAPI('/auth/signin', {
    email,
    password
  })
}

export function signUp( { email, passowrd } ) {
  return postAPI('/auth/register', {
    email,
    password
  })
}

export function fetchCurrentUser() {
  return fetchAPI('/auth')
}

export function signOut() {
  return postAPI('/auth/signout')
}