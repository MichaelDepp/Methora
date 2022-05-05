import React from 'react';
import TypeIt from 'typeit-react';

import Button from 'components/Button';
import Container from 'components/Container';
import ContentWrapper from 'components/ContentWrapper';
import ImageBlob from 'components/ImageBlob';
import SocialLinks from 'components/SocialLinks';

const Home = () => {
    const textColorConfig = 'text-theme-dark dark:text-theme-lightBg';

    return (
        <Container id="home">
            <div className="grid h-full grid-flow-row content-center lg:grid-flow-col lg:justify-center lg:gap-24">
                {/* Start Home Image Section */}
                <div className="flex justify-center">
                    <ImageBlob image={'/assets/home.jpeg'} />
                </div>
                {/* Start Home Image Section */}

                {/* Start Content Section */}
                <ContentWrapper style={'max-w-sm text-center lg:text-left my-auto'}>
                    {/* Start First Animated Typing Section */}
                    <p className={`pt-8 text-2xl font-light lg:pt-0 ${textColorConfig}`}>
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance
                                    .type('Hey there', { delay: 1000 })
                                    .pause(300)
                                    .type(' 👋', { delay: 200 })
                                    .pause(500);

                                // Remember to return it!
                                return instance;
                            }}
                            options={{
                                afterComplete: function (instance) {
                                    instance.destroy();
                                }
                            }}
                        />
                    </p>
                    {/* End First Animated Typing Section */}

                    {/* Start Second Animated Typing Section */}
                    <p
                        className={`pt-2 text-3xl font-medium lg:pt-4 xl:text-4xl ${textColorConfig}`}>
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance
                                    .pause(3500)
                                    .type("I'm Elsha")
                                    .move(-3, { delay: 100 })
                                    .type('i', { delay: 400 })
                                    .pause(750)
                                    .move(null, { to: 'END', instant: true, delay: 300 })
                                    .pause(500)
                                    .delete()
                                    .type("I'm a")
                                    .pause(1000)
                                    .type('<strong class="text-theme-primary"> Travllr</strong>', {
                                        delay: 1000
                                    })
                                    .delete(3)
                                    .type('<strong class="text-theme-primary">eller</strong>', {
                                        delay: 400
                                    })
                                    .move(null, { to: 'END', instant: true, delay: 500 })
                                    .pause(1000)
                                    .delete(11, { delay: 1000 })
                                    .type('a')
                                    .pause(800)
                                    .type(
                                        '<strong class="text-theme-primary"> Photographer</strong>',
                                        {
                                            delay: 800
                                        }
                                    )
                                    .pause(1000);

                                // Remember to return it!
                                return instance;
                            }}
                        />
                    </p>
                    {/* End Second Animated Typing Section */}

                    {/* Start Description Section */}
                    <p className={`pt-4 text-base lg:mr-8 lg:text-lg ${textColorConfig}`}>
                        Moscow based world traveller and photographer for the past 6 years. I am
                        open for work worldwide.
                    </p>
                    {/* End Description Section */}

                    {/* Start Social Links Section */}
                    <SocialLinks />
                    {/* End Social Links Section */}

                    {/* Start Download Button Section */}
                    <div className="flex justify-center lg:justify-start">
                        <Button
                            text={'Download Cv'}
                            onClick={() => window.open('https://methora.vercel.app/')}
                        />
                    </div>
                    {/* End Download Button Section */}
                </ContentWrapper>
                {/* End Content Section */}
            </div>
        </Container>
    );
};

export default Home;
