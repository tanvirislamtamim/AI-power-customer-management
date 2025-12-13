import React from 'react';
import Banner from './Banner';
import HowItWork from './HowItWork';
import Featured from './Featured';
import WhyItMatters from './WhyItMatters';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <Featured></Featured>
            <WhyItMatters></WhyItMatters>
        </div>
    );
};

export default Home;