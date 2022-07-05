import { NavLink } from 'react-router-dom'
import About from '../icon/About'
import Education from '../icon/Education'
import Knowledge from '../icon/Knowledge'
import Experience from '../icon/Experience'
import Contact from '../icon/Contact'

const navigations = [
	{
		'to': 'about',
		'icon': <About />,
		'label': 'About me'
	},
	{
		'to': 'education',
		'icon': <Education />,
		'label': 'Education'
	},
	{
		'to': 'knowledge',
		'icon': <Knowledge />,
		'label': 'Knowledge'
	},
	{
		'to': 'experience',
		'icon': <Experience />,
		'label': 'Experience'
	},
	{
		'to': 'contact',
		'icon': <Contact />,
		'label': 'Contact'
	},
]

const state = {
	active: 'text-red-600 stroke-red-600',
	inactive: 'text-gray-500 stroke-gray-500'
}

const Navigation = () => {
  return (
			<nav>
				<ul className='flex sm:flex-col justify-center gap-5 uppercase sm:text-right'>
				{
					navigations.map((item, index) => {
						return(
							<li key={index}>
								<NavLink to={item.to} className={({isActive}) => (isActive ? state.active : state.inactive)}>
									<span className='sm:hidden'>{item.icon}</span>
									<span className='hidden sm:inline-block'>{item.label}</span>
								</NavLink>
							</li>
							
						)
					})
				}
				</ul>
			</nav>
  )
}

export default Navigation
