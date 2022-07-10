const About = () => {
  return (
		<section className='flex flex-col items-center gap-5 md:flex-row border-2 border-emerald-500   '>
			<div>Image</div>
			<hr className='w-1/2 border border-red-500 md:w-auto md:h-64'/>
			<div>
				<div className='uppercase'>
					<p className='text-neutral-400 font-semibold'>Hello everybody, I am</p>
					<h2 className='text-neutral-800 font-extrabold text-4xl mt-2'>Diogo</h2>
				</div>
				<div className='mt-8'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Integer aliquam vestibulum lacus in congue. Vivamus vitae
						tortor nisi. Aliquam auctor elit ac enim tempor fermentum
						lobortis sed ante
					</p>
				</div>
			</div>
		</section>
  )
}

export default About
