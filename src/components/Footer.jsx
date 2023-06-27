import Whatsapp from '../assets/rrss/Whatsapp'
import Linkedin from '../assets/rrss/Linkedin'
import Github from '../assets/rrss/Github'

export default function Footer () {
  return (
    <footer className="footer">
      <div className='footer__rrss'>
      <a href=""><Github /></a>
      <a href=""><Linkedin /></a>
      <a href=""><Whatsapp /></a>
      </div>
    </footer>
  )
}