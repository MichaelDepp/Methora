import React from 'react';
import Container from '../../components/Container';
import ProfileBlob from '../../components/ProfileBlob';

const Home = () => {
    return (
        <Container>
            <div className="pt-28 lg:pt-80 flex justify-center">
                <ProfileBlob image={'./assets/memoji-home.png'} />
            </div>
            <p className="pt-8 text-center text-base text-theme-primary font-['Courier_New']">
                Hi there 👋
            </p>
            <h1 className="pt-4 text-center text-3xl text-theme-primary font-bold font-['Courier_New']">
                I`m Ui Designer
            </h1>
            <p className="pt-4 text-center text-base text-theme-bg dark:text-theme-lightBg font-['Courier_New']">
                Tokyo based react/react native developer with over 5 years of experience in this
                field.
            </p>
        </Container>
    );
};

export default Home;
