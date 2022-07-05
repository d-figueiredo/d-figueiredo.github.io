import logo_dark from '../../assets/logo_dark.svg'
import logo_light from '../../assets/logo_light.svg'

const Logo = ({isLight, className}) => {
  return (
		<img alt='Logo' src={isLight ? logo_light : logo_dark} width={42} className={className} />
  )
}

export default Logo
