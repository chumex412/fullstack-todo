export const userServices = {
  login,
  register
}


async function login(user) {
  const response = await fetch(`${window.location.origin}/api/users/login`, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })

  return response.json()
}

async function register (profile) {
  const response = await fetch(`${window.location.origin}/api/users/register`, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(profile)
  })

  return response.json()
}