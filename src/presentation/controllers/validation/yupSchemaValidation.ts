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
  //.required('socketId é obrigatório'),
})
