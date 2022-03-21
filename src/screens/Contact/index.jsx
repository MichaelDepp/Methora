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
            <div className="pt-8 lg:pt-16 flex justify-center">
                <ImageBlob image={'./assets/memoji-contact.webp'} />
            </div>
            <ContentWrapper>
                <h3 className="text-theme-primary text-lg font-bold text-center pt-8">{`Let's Talk`}</h3>
                <p className="text-theme-bg dark:text-theme-lightBg text-sm lg:text-base text-center pt-2 leading-4">
                    {
                        'To request a quote or want to meet up for coffee, contact us directly or fill out the form and I will get back to you promptly.'
                    }
                </p>
                <div className="pt-4">
                    <ContactForm />
                </div>
            </ContentWrapper>
        </Container>
    );
};

export default Contact;
