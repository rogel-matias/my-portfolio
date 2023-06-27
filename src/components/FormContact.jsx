export default function FormContact () {

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <form className='form'>
      <label className="form__label">
        <input className="form__input" type='text' placeholder='Nombre'/>
      </label>
      <label className="form__label">
        <input className="form__input" type='email' placeholder='Email'/>
      </label>
      <label className="form__label">
        <span>Mensaje</span>
        <textarea className="form__textarea" placeholder='¿En qué puedo ayudarte?'/>
      </label>
      <button onSubmit={handleSubmit} className="form__button">Enviar</button>
    </form>
  )
}




