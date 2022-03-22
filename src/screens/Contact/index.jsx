import React from 'react';
import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import ImageBlob from 'components/ImageBlob';
import ContentWrapper from 'components/ContentWrapper';

const Contact = () => {
    return (
        <Container id="contact">
            <div className="pt-8">
                <HeaderTitle title={'Contact'} />
            </div>
            <div className="pt-12 lg:pt-72  justify-items-center grid grid-flow-row lg:grid-cols-2 lg:grid-rows-1">
                <div className="flex justify-center">
                    <ImageBlob image={'./assets/memoji-contact.webp'} />
                </div>
                <ContentWrapper style={'text-center lg:text-left lg:row-end-1 lg:my-auto'}>
                    <h3 className="text-theme-primary text-xl lg:text-3xl font-bold pt-8 lg:pt-0">{`Let's Talk`}</h3>
                    <p className="text-theme-bg dark:text-theme-lightBg text-sm lg:text-base pt-2 leading-4 max-w-md">
                        {
                            'To request a quote or want to meet up for coffee, contact us directly or fill out the form and I will get back to you promptly.'
                        }
                    </p>
                    <div className="pt-4">
                        <ContactForm />
                    </div>
                </ContentWrapper>
            </div>
        </Container>
    );
};

export default Contact;
