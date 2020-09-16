import React, { useEffect } from 'react'
import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers'
import Joi from 'joi'

const schema = Joi.object({
  firstName: Joi.string().required(),
  age: Joi.string().required(),
})

function Login() {
  useEffect(() => {
    Axios.get('/config').then((response) => console.log(response.data))
  }, [])

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      <p>{errors.firstName?.message}</p>

      <input type="text" name="age" ref={register} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
    </div>
  )
}

export default Login
