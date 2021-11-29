import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={resume} alt='' />
            </div>
            <div className='right-content'>
                <h4>
                    I am <span>Rakibul Islam</span>
                </h4>
                <p className='paragraph'>
                    Since 2020, I have been working as a freelance WordPress
                    developer on Fiverr & Upwork with a 110+ 5star rating so
                    far. Throughout the course of my career, I have created
                    different types of websites using WordPress however there’s
                    always an interest to build websites using Javascript-based
                    stacks. Last few months I have been working on building
                    websites using ReactJs and MERN stack as a whole to make
                    them full stack websites. Looking forward to some
                    opportunity for continuing my Javascript journey.
                </p>
                <div className='about-info'>
                    <div className='info-title'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className='info'>
                        <p>: Rakibul Islam</p>
                        <p>: 30</p>
                        <p>: Bangladeshi </p>
                        <p>: Bengali, Hindi, English </p>
                        <p>: Dhaka, Bangladesh</p>
                        <p>: Freelance, Part-time Job</p>
                    </div>
                </div>
                <PrimaryButton title={"Download Cv"} />
            </div>
        </ImageSectionStyled>
    );
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
