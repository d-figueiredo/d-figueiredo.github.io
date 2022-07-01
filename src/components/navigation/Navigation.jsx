import { NavLink } from 'react-router-dom'
import About from '../icon/About'

const navigations = [
	{
		'to': 'about',
		'icon': <About />,
		'label': 'About me'
	},
	{
		'to': 'education',
		'icon': '',
		'label': 'Education'
	},
	{
		'to': 'knowledge',
		'icon': 'ICON',
		'label': 'Knowledge'
	},
	{
		'to': 'experience',
		'icon': 'ICON',
		'label': 'Experience'
	},
	{
		'to': 'contact',
		'icon': 'ICON',
		'label': 'Contact'
	},
]

const Navigation = () => {
  return (
			<nav className='flex p-6 bg-white sm:h-screen sm:flex-col justify-center gap-x-5 uppercase'>
				{
					navigations.map((item, index) => {
						return(
							<NavLink key={index} to={item.to} className={({isActive}) => (isActive ? 'text-red-600 stroke-red-600' : 'text-gray-500 stroke-gray-500')}>
								<span className='sm:hidden'>{item.icon}</span>
								<span className='hidden sm:inline-block'>{item.label}</span>
							</NavLink>
						)
					})
				}
			</nav>
  )
}

export default Navigation
