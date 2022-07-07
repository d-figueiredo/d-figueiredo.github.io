import { Routes, Route, Navigate } from 'react-router-dom'
import About from './about/About'
import Education from './education/Education'
import Knowledge from './knowledge/Knowledge'
import Experience from './experience/Experience'
import Contact from './contact/Contact'
import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'
import Footer from './footer/Footer'

const App = () => {
  return (
		<main className='h-screen flex flex-col gap-5 sm:flex-row-reverse'>
			<section className='p-8 bg-white grow flex justify-center items-center'>
				<Routes>
					<Route path='/' element={<Navigate to='/about' />}/>
					<Route path='/about' element={<About />} />
					<Route path='/education' element={<Education />} />
					<Route path='/knowledge' element={<Knowledge />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</section>
			<section className='p-8 bg-white flex justify-center sm:justify-between sm:flex-col sm:basis-2/12'>
				<Logo className='hidden sm:block sm:ml-auto' />
				<Navigation />
				<Footer className='hidden sm:flex sm:flex-col sm:gap-y-5' />
			</section>
		</main>
  )
}

export default App
