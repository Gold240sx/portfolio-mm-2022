import { useState } from "react";

import ScreenHeading from "../../Utilities/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import TypeAnimation from 'react-type-animation';
import axios from 'axios';
import {toast} from 'react-toastify';

import '../../../Styles/ContactMe.css';
import email from '../../../Assets/Images/email.jpeg';
import loading from '../../../Assets/Images/load2.gif';
import backgroundImage from '../../../Assets/Images/woodgrain.jpg';
import { Opacity } from "tsparticles-engine";

export default function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [boolean, setBoolean] = useState(false)
    
    const handleName= (e) => {
        setName(e.target.value)
    }

    const handleEmail= (e) => {
        setEmail(e.target.value)
    }

    const handleMessage= (e) => {
        setMessage(e.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            let data = {
                name,
                email,
                message
            }

            setBoolean(true)
            const res = await axios.post(`/contact`, data)
            if (name.length === 0 || email.length === 0 || message.length === 0){
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBoolean(false)
            } else if (res.status=== 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBoolean(false)

                //reset forms
                setName('')
                setEmail('')
                setMessage('')

                const sendMeAMessage = document.querySelector('.sendMeAMessage')
                const sendBtn = document.querySelector('.send-btn')
                
                sendMeAMessage.classList.add('hidden')
                sendBtn.classList.add('hidden')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="screen-container-blank fade-in" id={props.id || ""}>
            <ScreenHeading 
                title={'ContactMe'}
                subHeading={'Dont Be Shy! Get in Touch!'}
                className="heading-contact"
            />
            <div className="central-form"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'lighten'
                }}
            >
                <div className="header-banner">
                    <img src={require('../../../Assets/Images/email.jpeg')} className="header-banner-image" alt="Contact Me Banner"/>
                </div>
                <div className="col">
                    <div className="contact-details-role">
                        <h2 className="typical-title">
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                'Get in Touch',
                                3000,
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </h2>
                    </div>

                    <div className="contact-icons">
                        <a href='https://www.linkedin.com/in/martell01/'>
                            <svg className="icon contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </a>
                        <a href='https://github.com/Gold240sx'>
                            <svg className="icon contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
                        </a>
                        <a href='https://stackoverflow.com/users/16441693/michael-martell'>
                            <svg className="icon contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/></svg>
                        </a>
                    </div>

                    <form className="contact-form" onSubmit={submitForm}>
                        <h4 className="sendMeAMessage">Send me a message!</h4>
                        <p className="banner-message" data-text={banner}>{banner}</p>
                        <div className="send-btn">
                            <i className="fa fa-paper-plane" />
                            <button className="contact-submit">Submit!</button>
                            {boolean?(<b className="load">
                                <img src={loading} alt='not responding' className="multiply" />
                            </b>):('')}
                        </div>
                        <div className="col">

                            <label htmlFor="name">Name:</label>
                            <input type="text" 
                                onChange={handleName}
                                value={name}
                            />

                            <label htmlFor="email">Email:</label>
                            <input type="email" 
                                onChange={handleEmail}
                                value={email}
                            />

                            <label htmlFor="message">Message:</label>
                            <textarea type="text" 
                                onChange={handleMessage}
                                value={message}
                            />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
