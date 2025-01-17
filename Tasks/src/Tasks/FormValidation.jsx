import React, { useState } from 'react'

const FormValidation = () => {
  const [form, setForm] = useState({
    name:'',
    email:'',
    password:'',
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
   const newErrors = {}
   if(!form.name.trim()){
    newErrors.name = 'name is required'
   }
   if(!form.email.includes('@')){
    newErrors.email = 'Invalid email'
   }
   if(form.password.length < 8){
    newErrors.password = "password must be of 8 characters"
   }
   setErrors(newErrors);
   return Object.keys(newErrors).length === 0
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    if(validate()){
      console.log('form is submitted',form)
    }
    setForm({
      name:'',
      email:'',
      password:'',
    })
  }
  return (
    <>
    <div>FormValidation</div>
    <form onSubmit={handlesubmit}>
      <label htmlFor="name">name</label>
      <input type="text" name='name' value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
       {errors.name && <p>{errors.name}</p>}
      <label htmlFor="email">email</label>
      <input type="email" name='email' value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="name">password</label>
      <input type="password" name='password' value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} />
      {errors.password && <p>{errors.password}</p>}
      <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default FormValidation