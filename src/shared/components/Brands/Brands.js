import React from 'react';

import BBC from  '../../../public/images/bbc.png';
import Cosmopolitan from '../../../public/images/cosmopolitan.png';
import Vogue from '../../../public/images/vogue.png';
import Forbes from '../../../public/images/forbes.png';
import './Brands.scss';

const brands = props => {
    return <section className='brands'>
        <img src={BBC} alt="BBC" className="brands__img"/>
        <img src={Cosmopolitan} alt="Cosmopolitan" className="brands__img"/>
        <img src={Vogue} alt="Vogue" className="brands__img"/>
        <img src={Forbes} alt="Forbes" className="brands__img"/>
    </section>
};

export default brands;