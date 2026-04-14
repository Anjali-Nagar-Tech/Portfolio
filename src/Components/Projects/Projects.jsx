import React from 'react'
import ProjectCard from './ProjectCard'
import thirdproject from '../../assets/tic-tac-toe.png'
import quiz from '../../assets/quiz.png'
import weather from '../../assets/weather.webp'
import form from '../../assets/form.webp'
import pagination from '../../assets/pagination.jpg'
const Projects = () => {
  return (
    <div id='Projects' className=' flex flex-col items-center p-10 px-20 md:24  text-white md:flex-wrap md:justify-center'>
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Projects</h1>
      <div className='py-12 px-15 flex flex-wrap gap-5 '>
          
           <ProjectCard title="Weather web-app" main="A React-based weather application that fetches and displays real-time weather data using API integration, with a responsive and intuitive user interface. " demoLink="https://weather-app-nu-five-67.vercel.app/" sourceCode="https://github.com/Anjali-Nagar-Tech/Weather-App" image={weather}/>
           
           <ProjectCard title="Form Validation" main="This is a Form Validation project built using React.js, used to validate user input fields such as username, email, and contact number. It ensures proper data handling by applying validation rules, displaying error messages, and preventing invalid form submission." demoLink="https://form-validation-delta-seven.vercel.app/" sourceCode="" image={form}/>

           <ProjectCard title="Quiz web-app" main="A React-based quiz application that dynamically renders questions, tracks user responses, and displays final scores with a responsive UI." demoLink = "https://react-quiz-app-jade-ten.vercel.app/" sourceCode="https://github.com/Anjali-Nagar-Tech/react-quiz-app/tree/main" image={quiz}/>

           <ProjectCard title="Pagination feature" main="A Pagination feature implementation using React.js that enables efficient navigation through large datasets, with dynamic page rendering, state management, and seamless integration with API data." demoLink = "https://pagination-orpin-kappa.vercel.app/" sourceCode="https://github.com/Anjali-Nagar-Tech/pagination" image={pagination}/>

           <ProjectCard title="Tic Tac Toe Game" main="This is a classic Tic Tac Toe game designed using HTML, CSS and JavaScript for Clean User Experience" demoLink="https://anjali-nagar-tech.github.io/tictactoe/" sourceCode="https://github.com/Anjali-Nagar-Tech/tictactoe" image={thirdproject}/>
           

      </div>
    </div>
  )
}

export default Projects
