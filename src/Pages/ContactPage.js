import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Swal from 'sweetalert2';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from "emailjs-com";

function ContactPage() {
    const form = useRef();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        sendEmail(e)
        console.log(data)
    };
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7tfbtps",
                "template_vznpwlm",
                form.current,
                "user_mjoAaDKlFXLTtOgUxW5xs"
            )
            .then(
                (result) => {
                    console.log(result);
                    Swal.fire(
                        "Good job!",
                        "Your message sent successfully! We will reply as soon as possible!",
                        "success"
                    );
                    reset()
                },
                (error) => {
                    console.log(error.text);
                    reset()
                }
            );
    };

    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactPageStyled>
                <InnerLayout className={"contact-section"}>
                    <div className='left-content'>
                        <div className='contact-title'>
                            <h4>Get In Touch</h4>
                        </div>
                        <form
                            className='form'
                            ref={form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className='form-field'>
                                <label htmlFor='name'>Enter your name*</label>
                                <input
                                    type='text'
                                    {...register("name", { required: true })}
                                    id='name'
                                    name='name'
                                />
                            </div>
                            {errors.name && <span>This field is required</span>}
                            <div className='form-field'>
                                <label htmlFor='email'>Enter your email*</label>
                                <input
                                    type='email'
                                    {...register("email", { required: true })}
                                    id='email'
                                    name='email'
                                />
                            </div>
                            {errors.email && (
                                <span>This field is required</span>
                            )}
                            <div className='form-field'>
                                <label htmlFor='subject'>
                                    Enter your subject
                                </label>
                                <input
                                    type='text'
                                    {...register("subject", { required: true })}
                                    id='subject'
                                    name='subject'
                                />
                            </div>
                            {errors.subject && (
                                <span>This field is required</span>
                            )}
                            <div className='form-field'>
                                <label htmlFor='text-area'>
                                    Enter your Message*
                                </label>
                                <textarea
                                    name='message'
                                    {...register("message", { required: true })}
                                    id='textarea'
                                    cols='30'
                                    rows='10'
                                ></textarea>
                            </div>
                            {errors.message && (
                                <span>This field is required</span>
                            )}
                            <div className='form-field f-button'>
                                <input type='submit' title={"Send Email"} />
                            </div>
                        </form>
                    </div>
                    <div className='right-content'>
                        <ContactItem
                            title={"Phone"}
                            icon={phone}
                            cont1={"+880 1929 032 016"}
                            cont2={"+880 1977 768 105"}
                        />
                        <ContactItem
                            title={"Email"}
                            icon={email}
                            cont1={"rakibul.islam.2207@gmail.com"}
                            cont2={"rakib.01jan@gmail.com"}
                        />
                        <ContactItem
                            title={"Address"}
                            icon={location}
                            cont1={"1310,South-Keranigonj, Dhaka"}
                            cont2={"Bangladesh"}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    );
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                input:submit{
                    cursor: pointer;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
