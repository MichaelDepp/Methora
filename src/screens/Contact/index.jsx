import React from 'react';
import ContactForm from '../../components/ContactForm';
import Container from '../../components/Container';
import HeaderTitle from '../../components/HeaderTitle';
import ProfileBlob from 'components/ProfileBlob';

const Contact = () => {
    return (
        <Container id="contact">
            <div className="pt-8">
                <HeaderTitle title={'Contact'} />
            </div>
            <div className="pt-20 lg:pt-80 flex justify-center">
                <ProfileBlob image={'./assets/memoji-contact.webp'} />
            </div>
            <h3 className="text-theme-primary text-lg font-bold text-center pt-4">{`Let's Talk`}</h3>
            <p className="text-theme-bg dark:text-theme-lightBg text-sm text-center pt-4 leading-4">
                {
                    'To request a quote or want to meet up for coffee, contact us directly or fill out the form and I will get back to you promptly.'
                }
            </p>
            <div className="pt-4 ">
                <ContactForm />
            </div>
        </Container>
    );
};

export default Contact;
