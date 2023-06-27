import Whatsapp from '../assets/rrss/components/Whatsapp'
import Linkedin from '../assets/rrss/components/Linkedin'
import Github from '../assets/rrss/components/Github'

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