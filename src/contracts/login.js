export const login = async (email, password) => {
  const response = await fetch('http://localhost:8086/public/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ email, password })
  })

  return await response.json()
}
