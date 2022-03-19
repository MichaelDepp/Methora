import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import ProfileBlob from '../../components/ProfileBlob';
import SocialLinks from '../../components/SocialLinks';

const Home = () => {
    return (
        <Container id="home">
            <div className="pt-28 lg:pt-80 flex justify-center">
                <ProfileBlob image={'./assets/memoji-home.png'} />
            </div>
            <p className="pt-8 text-center text-base text-theme-primary">Hi there 👋</p>
            <h1 className="pt-4 text-center text-3xl text-theme-primary font-bold">
                I`m Ui Designer
            </h1>
            <p className="pt-4 text-center text-base text-theme-bg dark:text-theme-lightBg">
                Tokyo based react/react native developer with over 5 years of experience in this
                field.
            </p>
            <SocialLinks />
            <div className="flex justify-center">
                <Button text={'Download Cv'} />
            </div>
        </Container>
    );
};

export default Home;
