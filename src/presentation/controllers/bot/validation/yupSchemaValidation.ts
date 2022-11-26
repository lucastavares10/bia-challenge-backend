import * as Yup from 'yup'

export const botYupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('O nome deve ser uma string')
    .required('O nome é obrigatório'),
})
