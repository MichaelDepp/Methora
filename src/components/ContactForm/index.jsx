import React, { useState } from 'react';
import Button from 'components/Button';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitForm = () => {
        // Modify this function to get the form values
        console.log(name);
        console.log(email);
        console.log(message);
    };

    const inputStyleConfig =
        'input text-sm bg-gray-200 dark:bg-theme-darkLight w-full rounded-lg' +
        'placeholder-theme-bg/80 dark:placeholder-theme-lightBg/80 outline-theme-primary dark:outline-theme-primary';

    return (
        <>
            {/* Start Form Area */}
            <form className="grid max-w-md grid-flow-row justify-items-center gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className={`${inputStyleConfig} p-2 pl-4 lg:p-4`}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputStyleConfig} p-2 pl-4 lg:p-4`}
                />
                <textarea
                    placeholder="Your Message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputStyleConfig} p-4 pt-2 pl-4 lg:p-8 lg:pl-4 lg:pt-4`}
                />
            </form>
            {/* End Form Area */}

            {/* Start Submit Button */}
            <div className="flex justify-center pt-4 pb-8 lg:justify-start">
                <Button text={'Submit'} onClick={onSubmitForm} />
            </div>
            {/* Start Submit Button */}
        </>
    );
};

export default ContactForm;
