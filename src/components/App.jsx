import Navigation from './navigation/Navigation'

const App = () => {
  return (
		<main className='sm:grid sm:grid-cols-12 sm:gap-x-8'>
			<section className='fixed bottom-0 sm:relative w-full sm:col-span-3'>
				<Navigation />
			</section>
			<section className='sm:col-span-9 sm:h-screen'>
				Diogo Figueiredo's personal website.
			</section>
		</main>
  )
}

export default App
