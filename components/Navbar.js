import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt ,faTicketAlt , faTv , faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	return (
		<nav>
			<div className="flex justify-between items-center pt-1 bg-gray-900 text-gray-200 h-20">
				<div className="ml-5">
					<div>Up-Next.App</div>
				</div>
				<div className="cursor-pointer ">
					<ul className="flex">
						<li className="px-2 hover:animate-bounce hover:text-blue-500">
							<FontAwesomeIcon  icon={faFireAlt}/> Popular Shows
						</li>
						<li className="px-2 hover:animate-bounce hover:text-blue-500 ">
						<FontAwesomeIcon  icon={faTicketAlt}/>	New Shows						</li>
						<li className="px-2 hover:animate-bounce hover:text-blue-500">
							<FontAwesomeIcon  icon={faTv}/> Coming Soon
						</li>
						<li className="px-2 hover:animate-bounce hover:text-blue-500">
						<FontAwesomeIcon  icon={faUserAlt} size="xs"/>	Account
						</li>
					</ul>
					
				</div>
				<div>
				<a href="#" className="px-2 bg-blue-700 rounded-lg p-2 mr-5"> Login/Sign Up</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
