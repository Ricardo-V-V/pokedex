import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className='footer'>
			<div className='footer-icons'>
				<a
					href='https://github.com/Ricardo-V-V'
					target='_blank'
					rel='noreferrer'
				>
					<GitHubIcon sx={{ fontSize: 32 }} />
				</a>
				<a
					href='mailto:ricvillalobosv@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					<EmailIcon sx={{ fontSize: 32 }} />
				</a>
				<a
					href='https://www.linkedin.com/in/ricardo-villalobos'
					target='_blank'
					rel='noreferrer'
				>
					<LinkedInIcon sx={{ fontSize: 32 }} />
				</a>
			</div>
			<p className='footer-copyright'>
				© {year} Created by Ricardo Villalobos.
			</p>
		</footer>
	)
}
