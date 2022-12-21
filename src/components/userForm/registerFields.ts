import { TField } from './types'

export const fields: TField[] = [
  { label: 'email', reg: /^\w+@\w+\.[a-z]{2,5}$/ },
  { label: 'name', reg: /^[^ ]{3,20}$/ },
  { label: 'surname', reg: /^[^ ]{3,20}$/ },
  { label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
  { label: 'passwordRepeat', reg: /^[^ ]{6,20}$/, secure: true }
]
