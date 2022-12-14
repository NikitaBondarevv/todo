import { request } from './request'

export const login = (email, password) => request.post('public/login', { email, password })
