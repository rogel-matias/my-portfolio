import { useState } from "react"

export default function FormContact () {
  const [form, setForm] = useState({
    nameForm: '',
    email: '',
    message: ''
  })

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  const handleChange = evt => {
    const { name, value } = evt.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <form className='form fadeInUp' onSubmit={handleSubmit} >
      <label className="form__label">
        <input className="form__input" autoComplete="off" name='nameForm' value={form.nameForm} onChange={handleChange} type='text' placeholder='Nombre'/>
      </label>
      <label className="form__label">
        <input className="form__input" autoComplete="off" name='email' value={form.email} onChange={handleChange} type='email' placeholder='Email'/>
      </label>
      <label className="form__label">
        <span>Mensaje</span>
        <textarea className="form__textarea" autoComplete="off" name='message' value={form.message} onChange={handleChange} placeholder='¿En qué puedo ayudarte?'/>
      </label>
      <button className="form__button">Enviar</button>
    </form>
  )
}




