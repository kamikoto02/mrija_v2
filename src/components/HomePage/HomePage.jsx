import React from 'react';
import Hero from "./Hero/Hero";
import Events from "./Events/Events";
import Courses from "./Courses/Courses";
import Membership from "./Membership/Membership";
import Support from "./Support/Support";
import Newsletter from "./Newsletter/Newsletter";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Events />
            <Courses />
            <Membership />
            <Support />
            <Newsletter />
        </>
    );
};

export default HomePage;
