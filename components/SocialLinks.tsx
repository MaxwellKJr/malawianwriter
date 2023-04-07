import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const socialLinks = [
  { href: 'https://facebook.com/malawianwriter', icon: faFacebook, title: 'Facebook' },
  { href: 'https://tiktok.com/malawianwriter', icon: faTiktok, title: 'TikTok' },
  { href: 'https://instagram.com/malawianwriter', icon: faInstagram, title: 'Instagram' },
  { href: 'https://twitter.com/malawianwriter', icon: faTwitter, title: 'Twitter' },
]

const SocialLinks = () => {
  return (
    <ul className='flex flex-row'>
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a className='first:pl-0 p-4 text-zinc-800 transform transition-all hover:scale-75' href={link.href} title={`Follow on ${link.title}`} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={link.icon} className='w-5 h-5' />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
