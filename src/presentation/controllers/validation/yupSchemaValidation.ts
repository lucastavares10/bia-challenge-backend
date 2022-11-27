import * as Yup from 'yup'

export const botYupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('name deve ser uma string')
    .required('name é obrigatório'),
})

export const conversationYupValidationSchema = Yup.object().shape({
  botId: Yup.string()
    .typeError('botId deve ser uma string')
    .required('botId é obrigatório'),
  socketId: Yup.string().typeError('socketId deve ser uma string'),
})

export const messageYupValidationSchema = Yup.object().shape({
  conversationId: Yup.string()
    .typeError('conversationId deve ser uma string')
    .required('conversationId é obrigatório'),
  from: Yup.string()
    .typeError('from deve ser uma string')
    .required('from é obrigatório'),
  to: Yup.string()
    .typeError('to deve ser uma string')
    .required('to é obrigatório'),
  text: Yup.string()
    .typeError('text deve ser uma string')
    .required('text é obrigatório'),
})
