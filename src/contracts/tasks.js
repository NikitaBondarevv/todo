import { request } from './request'

export const updateTask = async data => request.put(`tasks/${data.id}`, data)
export const deleteTask = async data => request.delete(`tasks/${data.id}`)
export const createTask = async data => request.post('tasks', data)
