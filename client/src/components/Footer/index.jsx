import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import './footer.css'
import './anmation.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='developer efect'>
        <a
        href='https://www.linkedin.com/in/rouissi-youssef-97b8b2156/'
        target='_blank'
        rel='err'
        >
            developed by <span>&nbsp;Youssef Rs</span>
            <span className='border border-top'/>
            <span className='border border-right'/>
            <span className='border border-bottom'/>
            <span className='border border-left'/>
        </a>
      </div>
      <ul className='social-media'>
        <li>
            <a 
            href='https://github.com/YoussefRs'
            target='_blank'
            rel='err'
            >
                <AiFillGithub />
            </a>
        </li>
        <li>
            <a
            href='https://www.linkedin.com/in/rouissi-youssef-97b8b2156/'
            target='_blank'
            rel='err'
            >
                <AiFillLinkedin />
            </a>
        </li>
        <li>
          <a
            href='rs.youssef24@gmail.com'
            target='_blank'
            rel='err'
          >
            <SiGmail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
