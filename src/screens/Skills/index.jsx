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
            <div className="pt-12 lg:pt-72 justify-items-center grid grid-flow-row lg:gap-24 lg:grid-cols-2 lg:grid-rows-1">
                <div className="flex justify-center lg:justify-end">
                    <ImageBlob image={'./assets/memoji-skills.webp'} />
                </div>
                <ContentWrapper style={'w-full pt-8 lg:pt-0 my-auto'}>
                    <ProgressBar skillName={'Flutter'} percentage={95} />
                    <ProgressBar skillName={'React Native'} percentage={90} />
                    <ProgressBar skillName={'Machine Learning'} percentage={45} />
                    <ProgressBar skillName={'Python'} percentage={85} />
                    <ProgressBar skillName={'Ui Design'} percentage={90} />
                </ContentWrapper>
            </div>
        </Container>
    );
};

export default Skills;
