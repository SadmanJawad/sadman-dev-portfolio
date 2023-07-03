import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolio from '../data/portfolio'
import Title from './Title';

const Portfolio = () => {
    return (
        <div id='project' className='flex flex-col md:flex-row items-center justify-center'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-20'>
            {
                portfolio.map(project => (
                    <PortfolioItem key={project.id}
                    imgURL={project.imgURL}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    >  </PortfolioItem>
                ))
            }
           </div>
        </div>
    );
};

export default Portfolio;