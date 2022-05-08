export const userServices = {
  login,
  register
}


async function login(user) {
  const response = await fetch('/api/users/login', {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })

  return response.json()
}

async function register (profile) {

}