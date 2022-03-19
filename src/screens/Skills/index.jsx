import React from 'react';
import ProfileBlob from 'components/ProfileBlob';
import Container from '../../components/Container';
import HeaderTitle from '../../components/HeaderTitle';
import ProgressBar from '../../components/ProgressBar';

const Skills = (props) => {
    return (
        <Container id={props.id}>
            <div className="pt-8">
                <HeaderTitle title={'Skills'} />
            </div>
            <div className="pt-28 lg:pt-80 flex justify-center">
                <ProfileBlob image={'./assets/memoji-skills.webp'} />
            </div>
            <div className="grid justify-items-center mt-4">
                <ProgressBar skillName={'Flutter'} percentage={95} />
                <ProgressBar skillName={'React Native'} percentage={90} />
                <ProgressBar skillName={'Machine Learning'} percentage={45} />
                <ProgressBar skillName={'Python'} percentage={85} />
                <ProgressBar skillName={'Ui Design'} percentage={90} />
            </div>
        </Container>
    );
};

export default Skills;
