import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
  <div>
    <a href="https://github.com/DuncanGamer" target="_blank" rel="noopener noreferrer">
      <BsGithub/>
    </a>
  </div>
  <div>
    <a href="https://www.linkedin.com/in/daniel-gimenez1/" target="_blank" rel="noopener noreferrer">
      <BsLinkedin/>
    </a>
  </div>
</div>

  )
}

export default SocialMedia