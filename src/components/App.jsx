import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import About from './about/About'

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
				</Routes>
			</section>
		</main>
  )
}

export default App
