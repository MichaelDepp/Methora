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
            <div className="pt-28 lg:pt-96 grid grid-flow-row lg:grid-flow-col lg:gap-24 lg:justify-center">
                <div className="flex justify-center">
                    <ImageBlob image={'./assets/memoji-home.png'} />
                </div>
                <ContentWrapper style={'max-w-sm text-center lg:text-left my-auto'}>
                    <p className={`pt-8 lg:pt-0 text-2xl font-bold ${textColorConfig}`}>
                        Hi there 👋
                    </p>
                    <p className={`pt-4 text-3xl font-bold ${textColorConfig}`}>
                        <TypeIt
                            getBeforeInit={(instance) => {
                                instance
                                    .type("I'm Elsha")
                                    .move(-3, { delay: 100 })
                                    .type('i', { delay: 400 })
                                    .pause(750)
                                    .move(null, { to: 'END', instant: true, delay: 300 })
                                    .delete()
                                    .pause(500)
                                    .type('Well...', { delay: 400 })
                                    .pause(1000)
                                    .type(' urmmmm', { delay: 400 })
                                    .pause(1000)
                                    .delete()
                                    .type('I am a ')
                                    .pause(1000)
                                    .type(
                                        '<strong class="text-theme-primary">Ui Desingr</strong>',
                                        { delay: 1000 }
                                    )
                                    .delete(3)
                                    .type('<strong class="text-theme-primary">gner</strong>', {
                                        delay: 400
                                    })
                                    .move(-12, { delay: 800 })
                                    .delete(5, { delay: 1000 })
                                    .type("'m an", { delay: 1000 })
                                    .move(null, { to: 'END', instant: true, delay: 500 })
                                    .pause(1000)
                                    .delete(15, { delay: 1000 })
                                    .type(' also...', { delay: 1000 })
                                    .pause(1000)
                                    .delete(7, { delay: 1000 })
                                    .type('a')
                                    .pause(800)
                                    .type(
                                        '<strong class="text-theme-primary"> Developer</strong>',
                                        {
                                            delay: 800
                                        }
                                    )
                                    .delete(9, { delay: 1000 })
                                    .type(
                                        '<em><strong class="text-theme-primary"> Developr</strong></em>',
                                        {
                                            delay: 800
                                        }
                                    )
                                    .delete(2, { delay: 200 })
                                    .type(
                                        '<em><strong class="text-theme-primary">per</strong></em>',
                                        {
                                            delay: 800
                                        }
                                    )
                                    .pause(2000)
                                    .type(
                                        '<em><strong class="text-theme-primary"> 👩‍💻</strong></em>',
                                        { delay: 400 }
                                    )
                                    .pause(1000);

                                // Remember to return it!
                                return instance;
                            }}
                        />
                    </p>
                    <p className={`pt-4 text-base ${textColorConfig}`}>
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
