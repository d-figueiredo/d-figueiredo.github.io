import Github from '../icon/Github'
import Linkedin from '../icon/Linkedin'

const Footer = ({className}) => {
  return (
		<footer className={className}>
			<div className='flex justify-end gap-x-5'>
				<span className='stroke-red-600 hover:stroke-blue-600'>
					<Linkedin />
				</span>
				<span className='stroke-red-600 hover:stroke-blue-600'>
					<Github />
				</span>
			</div>
			<a href='mailto:diogofilipe@hotmail.fr' className='self-end'>diogofilipe@hotmail.fr</a>
		</footer>
  )
}

export default Footer
