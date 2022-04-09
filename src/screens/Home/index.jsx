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
                <div className="flex justify-center">
                    <ImageBlob image={'./assets/memoji-home.png'} />
                </div>
                <ContentWrapper style={'max-w-sm text-center lg:text-left my-auto'}>
                    <p className={`pt-8 text-2xl font-bold lg:pt-0 ${textColorConfig}`}>
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance
                                    .type('Hi there', { delay: 1000 })
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
                    <p className={`pt-4 text-3xl font-bold xl:text-4xl ${textColorConfig}`}>
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
                                    .type("I'm an")
                                    .pause(1000)
                                    .type(
                                        '<strong class="text-theme-primary"> UI Desingr</strong>',
                                        { delay: 1000 }
                                    )
                                    .delete(3)
                                    .type('<strong class="text-theme-primary">gner</strong>', {
                                        delay: 400
                                    })
                                    .move(null, { to: 'END', instant: true, delay: 500 })
                                    .pause(1000)
                                    .delete(14, { delay: 1000 })
                                    .type('a')
                                    .pause(800)
                                    .type(
                                        '<strong class="text-theme-primary"> Developer</strong>',
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
                    <p className={`pt-4 text-base lg:mr-8 lg:text-lg ${textColorConfig}`}>
                        Tokyo based react/react native developer with over 5 years of experience in
                        this field.
                    </p>
                    <SocialLinks />
                    <div className="flex justify-center lg:justify-start">
                        <Button text={'Download Cv'} />
                    </div>
                </ContentWrapper>
            </div>
        </Container>
    );
};

export default Home;
