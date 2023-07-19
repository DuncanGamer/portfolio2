import React from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import {client, urlFor} from '../../client'
import {AppWrap, MotionWrap} from '../../wrapper'


const About = () => {

 const [abouts, setabouts] = React.useState([]);
 
 React.useEffect(() => {
  const query = `*[_type == "abouts"]`;

  client.fetch(query)
  .then((data)=>setabouts(data))

   }, []);
 

  return (
  <>
   <h2 className='head-text'>
  Un développement efficace,<br/>
  <span>mène à un succès commercial.</span>
</h2>
    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div 
        className='app__profile-item' 
        key={about.title + index}
        whileInView={{opacity: 1.1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title}/>
          <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop:10}}>{about.description}</p>

        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'À propos',
  'app__whitebg'
); 