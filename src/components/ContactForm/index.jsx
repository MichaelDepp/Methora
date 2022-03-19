import React, { useState } from 'react';
import Button from 'components/Button';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitForm = () => {
        // TODO: make the values send
        console.log(name);
        console.log(email);
        console.log(message);
    };

    const inputStyleConfig =
        'input text-sm bg-gray-200 dark:bg-theme-dark w-full max-w-xs rounded-lg placeholder-theme-bg/80 dark:placeholder-theme-lightBg/80 outline-theme-primary dark:outline-theme-primary';

    return (
        <>
            <form className="justify-items-center grid grid-flow-row gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className={`${inputStyleConfig} p-2 pl-4`}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputStyleConfig} p-2 pl-4`}
                />
                <textarea
                    placeholder="Your Message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputStyleConfig} p-4 pt-2`}
                />
            </form>
            <div className="flex justify-center py-4">
                <Button text={'Submit'} onClick={onSubmitForm} />
            </div>
        </>
    );
};

export default ContactForm;
