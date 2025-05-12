const tokenName = 'itinero-token'

export const setToken = (token) => {
  localStorage.setItem(tokenName, token)
}

export const getToken = () => {
  return localStorage.getItem(tokenName)
}

export const removeToken = () => {
  localStorage.removeItem(tokenName)
}

export const getUserFromToken = () => {
  const token = getToken()
  if (!token) return null
  const payload = token.split('.')[1]
  const payloadAsObj = JSON.parse(atob(payload))  
  const timeNow = Date.now() / 1000
  const expTime = payloadAsObj.exp
  if (expTime < timeNow) {
    removeToken()
    return null
  }
  // 7. If the token is NOT expired, return the user object
  return payloadAsObj.user
}