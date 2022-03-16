import React from 'react';
import ProfileBlob from 'components/ProfileBlob';
import Container from '../../components/Container';
import HeaderTitle from '../../components/HeaderTitle';

const Skills = () => {
    return (
        <Container>
            <div className="pt-8">
                <HeaderTitle />
            </div>
            <div className="pt-28 lg:pt-80 flex justify-center">
                <ProfileBlob image={'./assets/memoji-skills.webp'} />
            </div>
        </Container>
    );
};

export default Skills;
