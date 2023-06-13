export default function FormContact () {
  return (
    <form className='form'>
      <label className="form__label">
        Nombre
        <input className="form__input" type='text' placeholder='Ricardo'/>
      </label>
      <label className="form__label">
        Email
        <input className="form__input" type='email' placeholder='example@email.com'/>
      </label>
        <label className="form__label">
          Mensaje
          <textarea className="form__textarea" placeholder='¿En qué puedo ayudarte?'/>
        </label>
      <button className="form__button">Enviar</button>
    </form>
  )
}




