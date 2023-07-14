import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'

export default function FormContact () {
  const navigate = useNavigate()

  const handleSubmit = evt => {
    evt.preventDefault()
    emailjs.sendForm('service_sv0jp89', 'template_n20mq6l', evt.target, 'WKkILWfxeVGkx-IlY')
      .then(res => {
        if(res.text === 'OK') {
          setTimeout(() => {
            navigate('/')
          }, 2000)
        }
      })
      .catch(err => console.log(err.text))
  }



  return (
    <form className='form fadeInUp' onSubmit={handleSubmit} >
      <label className="form__label">
        <input className="form__input" autoComplete="off" name='user'  type='text' placeholder='Nombre'/>
      </label>
      <label className="form__label">
        <input className="form__input" autoComplete="off" name='email' type='email' placeholder='Email'/>
      </label>
      <label className="form__label">
        <span>Mensaje</span>
        <textarea className="form__textarea" autoComplete="off" name='message' placeholder='¿En qué puedo ayudarte?'/>
      </label>
      <button className="form__button">Enviar</button>
    </form>
  )
}




