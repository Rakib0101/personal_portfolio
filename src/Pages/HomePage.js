import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';
;

function HomePage() {
    return (
        <HomePageStyled>
            <div className='particle-con'>
                <Particle />
            </div>
            <div className='typography'>
                <h1>
                    Hi, I'm <span>Rakibul Islam</span>
                </h1>
                <p>
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
                <div className='icons'>
                    <a
                        href='https://www.facebook.com/rakibul.islam.1990'
                        className='icon i-facebook'
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href='https://github.com/Rakib0101'
                        className='icon i-github'
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/rakibul-islam-659670193//'
                        className='icon i-linkedin'
                    >
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
        width: 80%;
        
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid blue;
                    color: blue;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
