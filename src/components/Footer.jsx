import Whatsapp from '../public/assets/rrss/components/Whatsapp'
import Linkedin from '../public/assets/rrss/components/Linkedin'
import Github from '../public/assets/rrss/components/Github'

export default function Footer () {
  return (
    <footer className="footer">
      <div className='footer__rrss'>
        <a href="https://github.com/rogel-matias"><Github /></a>
        <a href="https://www.linkedin.com/in/rogel-matias/"><Linkedin /></a>
        <a href="https://wa.me/+543434654688"><Whatsapp /></a>
      </div>
    </footer>
  )
}