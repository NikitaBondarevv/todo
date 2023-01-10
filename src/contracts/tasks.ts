import { request } from './request'
import { ITodo } from 'interfaces/ITodo'

export const getTaskById = async (id: number | string)  => request.get(`tasks/${id}`)
export const updateTask = async (data: ITodo) => request.put(`tasks/${data.id}`, data)
export const deleteTask = async (data: ITodo) => request.delete(`tasks/${data.id}`)
export const createTask = async (data: ITodo) => request.post('tasks', data)
