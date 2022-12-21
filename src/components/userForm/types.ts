export type TUserForm = {
  disabledFields: boolean
}

export type TTarget = {
  target: {
    value: string
    name: string
  }
}

export type TNext = {
  label: string;
  reg: RegExp;
  secure?: boolean;
}
