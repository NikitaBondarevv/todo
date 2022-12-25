import { request } from './request'
import { IData } from 'interfaces/IData'

export const getTaskById = async (id: number | string)  => request.get(`tasks/${id}`)
export const updateTask = async (data: IData) => request.put(`tasks/${data.id}`, data)
export const deleteTask = async (data: IData) => request.delete(`tasks/${data.id}`)
export const createTask = async (data: IData) => request.post('tasks', data)
