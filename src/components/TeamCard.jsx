import React from 'react'
import { Link } from 'react-router';

const TeamCard = ({img, name, role, twitter = "#", instagram = "#", linkedin = "#"}) => {
	return (
		<div>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h3 className='text-[32px] text-black font-medium pb-2'>{name}</h3>
            <p className='text-[16px] text-black pb-4'>{role}</p>
            <div className='flex items-center gap-5'>
                <Link to={twitter}><TwitterIcon /></Link>
                <Link to={instagram}><InstagramIcon /></Link>
                <Link to={linkedin}><LinkedInIcon /></Link>
            </div>
        </div>
    </div>
  )
}

export default TeamCard

const TwitterIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
		<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
	</svg>
);

const InstagramIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		className="w-5 h-5"
	>
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
	</svg>
);

const LinkedInIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);