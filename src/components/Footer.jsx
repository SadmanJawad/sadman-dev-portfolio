import React from 'react';
import { RiFacebookBoxFill,RiLinkedinFill,RiGithubFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="py-5 text-center">
				<div className="container max-w-screen-lg mx-auto">
					<div>
						<div className="flex flex-wrap justify-center gap-2">
                        <a 
								href="https://github.com/SadmanJawad"
                                target='blank'
								className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<RiGithubFill className='w-5 h-5 fill-current'></RiGithubFill>
							</a>
							<a 
								href="https://www.linkedin.com/in/sadmanjawad/"
                                target='blank'
								className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<RiLinkedinFill className='w-5 h-5 fill-current'></RiLinkedinFill>
							</a>
							<a
								href="https://www.facebook.com/sadmanjawadnabil/"
                                target='blank'
								className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
								<RiFacebookBoxFill className='w-5 h-5 fill-current'></RiFacebookBoxFill>
							</a>
							
						</div>
					</div>
				</div>
			<p className="text-sm mt-2  opacity-50">
				&copy; {new Date().getFullYear()} Sadman Jawad. All rights reserved.
			</p>
		</div>
    );
};

export default Footer;