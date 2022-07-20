import photo from '../../assets/photo.png'
import { useState, useEffect } from 'react'
import moment from 'moment'

const About = () => {
	const [year, setYear] = useState()
	const [month, setMonth] = useState()
	const [day, setDay] = useState()

	useEffect(() => {
    const current = moment()
		const birth = moment([2001, 4, 30])
		// Calculate year.
		setYear(current.diff(birth, 'years'))
		birth.add(year, 'years')
		// Calculate month.
		setMonth(current.diff(birth, 'months'))
		birth.add(month, 'months')
		// Calculate day.
		setDay(current.diff(birth, 'days'))
  }, [year, month, day])

  return (
		<section className='flex flex-col items-center justify-center gap-5 md:flex-row border-2 border-emerald-500   '>
			<img alt='Diogo Figueiredo photo' src={photo} className='rounded-full w-2/5 md:w-5/12'/>
			<hr className='w-1/2 border border-red-500 md:w-auto md:h-64'/>
			<div className='flex flex-col gap-8'>
				<div className='uppercase'>
					<p className='text-neutral-400 font-semibold'>Hello everybody, I am</p>
					<h2 className='text-neutral-800 font-extrabold text-4xl mt-2'>Diogo</h2>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Integer aliquam vestibulum lacus in congue. Vivamus vitae
					tortor nisi. Aliquam auctor elit ac enim tempor fermentum
					lobortis sed ante
				</p>
				<div className='flex sm:flex-col lg:flex-row gap-x-16 sm:gap-y-8'>
					<div>
						<label>Age</label>
						<div className='flex items-center mt-5 gap-x-2'>
							<span className='p-3 border b-neutral-400 rounded-md shadow-md shadow-neutral-200'>{year}</span>
							<span>:</span>
							<span className='p-3 border b-neutral-400 rounded-md shadow-md shadow-neutral-200'>
								{month < 10 ? '0' + month : month}
							</span>
							<span>:</span>
							<span className='p-3 border b-neutral-400 rounded-md shadow-md shadow-neutral-200'>
								{day < 10 ? '0' + day : day}
							</span>
						</div>
					</div>
					<div>
						<label>Nationality</label>
						<div className='flex gap-x-2'>
							<p>FLAG</p>
							<span>Portuguese</span>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default About
