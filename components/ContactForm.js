import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import emailjs from 'emailjs-com';
const recaptchaRef = React.createRef();

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;
const RECAPTCHA_SITEKEY = process.env.RECAPTCHA_SITEKEY;

export default function ContactForm() {

    const [ success, setSuccess ] = useState(false);
    const [ fail, setFail ] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', e.target, 'EMAILJS_USER_ID').then((result) => {
            setSuccess(true)
            handleSuccessMessage()
        }, (error) => {
            setFail(true)
            handleFailMessage()
        });
    }

    function handleSuccessMessage() {
        if(success === true){
            const message = document.querySelector(".successMessage")
            const form = document.querySelector(".contact-form")
            message.classList.add('show')
            form.classList.add('hide')
        }
        else {
            return;
        }
    }

    function handleFailMessage() {
        if(fail === true){
            const message = document.queryCommandValue(".failMessage")
            message.classList.add('show')
        }
        else {
            return;
        }
    }

    const onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }

    return (

        <div>
            <div className="successMessage">
                <p>Message have been sent will be in contact shortly</p>
            </div>
            <div className="failMessage">
                <p>Message failed, check if all fields are filled in.</p>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" name="company" />
                </div>
                <div>
                    <label>Contact Number</label>
                    <input type="number" name="contact_number" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                </div>
                <div>
                    <label>Brief</label>
                    <textarea name="brief" />
                </div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="RECAPTCHA_SITEKEY"
                    />
                <div>
                    <input type="submit" value="Send" className="btn" />
                </div>
            </form>
        </div>
    )
}