import { motion } from 'framer-motion';
const ProjectList = ({ projects }) => {
  return projects.map((project) => (
    <motion.div
      className='card relative'
      key={project.name}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <img src={project.img} alt='' />
      <div className='overlay'>
        <h4 className=' text-white font-bold'>{project.name}</h4>
        <p className='text-white font-bold p-3'>{project.job.join(', ')}</p>
      </div>
    </motion.div>
  ));
};
export default ProjectList;

