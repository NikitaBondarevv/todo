export const getInfo = async () => {
  const response = await fetch('http://localhost:8086/info', { credentials: 'include' })
  
  return response.json()
}
