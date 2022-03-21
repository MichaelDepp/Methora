import React from 'react';
import ImageBlob from 'components/ImageBlob';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import ProgressBar from 'components/ProgressBar';
import ContentWrapper from 'components/ContentWrapper';

const Skills = () => {
    return (
        <Container id="skills">
            <div className="pt-8">
                <HeaderTitle title={'Skills'} />
            </div>
            <div className="pt-8 lg:pt-16 flex justify-center">
                <ImageBlob image={'./assets/memoji-skills.webp'} />
            </div>
            <ContentWrapper>
                <div className="mt-4">
                    <ProgressBar skillName={'Flutter'} percentage={95} />
                    <ProgressBar skillName={'React Native'} percentage={90} />
                    <ProgressBar skillName={'Machine Learning'} percentage={45} />
                    <ProgressBar skillName={'Python'} percentage={85} />
                    <ProgressBar skillName={'Ui Design'} percentage={90} />
                </div>
            </ContentWrapper>
        </Container>
    );
};

export default Skills;
