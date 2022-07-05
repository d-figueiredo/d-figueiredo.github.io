import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import About from './about/About'
import Education from './education/Education'
import Knowledge from './knowledge/Knowledge'
import Experience from './experience/Experience'
import Contact from './contact/Contact'

const App = () => {
  return (
		<main className='sm:grid sm:grid-cols-12 sm:gap-x-8'>
			<section className='fixed bottom-0 sm:relative w-full sm:col-span-3'>
				<Navigation />
			</section>
			<section className='sm:col-span-9 sm:h-screen'>
				<Routes>
					<Route path='/' element={<Navigate to='/about' />}/>
					<Route path='/about' element={<About />} />
					<Route path='/education' element={<Education />} />
					<Route path='/knowledge' element={<Knowledge />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</section>
		</main>
  )
}

export default App
