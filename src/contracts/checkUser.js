export const checkUser = async () => {
  const response = await fetch('http://localhost:8086/public/checkUser', { credentials: 'include' })
  
  return response.json()
}
