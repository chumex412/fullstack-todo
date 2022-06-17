export const userServices = {
  login,
  register
}


async function login(user) {
  const response = await fetch(`http://localhost:5000/api/users/login`, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })

  console.log(window.location.origin)

  return response.json()
}

async function register (profile) {
  const response = await fetch(`http://localhost:5000/api/users/register`, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(profile)
  })

  return response.json()
}