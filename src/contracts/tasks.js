export const updateTask = async data => {
  const response = await fetch(`http://localhost:8086/tasks/${data.id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  })

  return response.json()
}
