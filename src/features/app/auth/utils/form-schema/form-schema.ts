import * as yup from 'yup'

export const formSchema = yup
  .object({
    username: yup.string().required('Insira um nome válido.'),
    password: yup.string().required('Insira uma senha válida.'),
  })
  .required()
