import FormContact from "../components/FormContact";

export default function Contact () {
  return(
    <section className="section contact fadeIn">
      <h2 className="section__title">Contacto</h2>
      <p className="section__paragraph">Ante cualquier duda no dudes en dejar tu mensaje o contactarme a través de cualquiera de mis redes sociales.</p>
      <FormContact />
    </section>
  )
}