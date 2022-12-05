export const getTasks = async () => {
  const response = await fetch('http://localhost:8086/tasks', { credentials: 'include' })
  
  return await response.json()
}
