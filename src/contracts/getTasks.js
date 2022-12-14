import { request } from './request'

export const getTasks = async () => request.get('tasks')
