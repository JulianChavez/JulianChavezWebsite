import React from 'react';

export default function About() {
    //TO-DO:
    //Add links to Kodak Inkjet, hackUMBC, and Alexa promodoro app
    //TO-DO(CONSOLE ERROR)
    //HTML didn't match the client(happen if SSR-ed Client Componets used)
    return (
        <div>
            <div>
                <h2 className='center-header'>Who am I?</h2>
                <div className='center-section'>
                    <p><span className='font-bold'>School</span>: Currently studying Compute Science (AI/ML) @ University of Maryland, Balitmore County</p>
                    <p><span className='font-bold'>Current Project</span>: experimenting with building a robot that picks up litter</p>
                    <p><span className='font-bold'>Why</span>: To expand my knowledge with engineering a robot</p>
                </div>
            </div>
            <div>
                <h2 className='center-header'>What have I done?</h2>
                <div className='center-section'>
                    <h3 className='header-underline'>Experience:</h3>
                    <dl>
                        <dt className='font-bold'>Amazon Lab 126</dt>
                        <dd className='dash'>Intern as a Software Development Engineer @ Amazon Labs 126 in Sunnyvale, California</dd>
                        <dt className='font-bold'>Kodak</dt>
                        <dd className='dash'>Intern as a Software Engineer @ Kodak in Dayton, Ohio</dd>
                        <dd className='dash'>Design and implemented software for inkjet printer technology</dd>
                        <dt className='font-bold'>hackUMBC</dt>
                        <dd className='dash'>Organized UMBC's flagship hackathon, in 2024 we achieved record-breaking numbers!</dd>
                    </dl>
                    <h3 className='header-underline'>Projects:</h3>
                    <dl>
                        <dt className='font-bold'>Amazon Alexa Apps</dt>
                        <dd className='dash'>Created multple Apps:
                            <a href='https://bit.ly/julian-alexa-app' target='_blank'> 21 Game</a>,
                            <a href='https://devpost.com/software/alexactivity' target='_blank'> Pomodoro Alexa App</a>.
                            These apps need an update(TO-DO)
                        </dd>
                        <dt className='font-bold'>uTeach</dt>
                        <dd className='dash'>2024 UMD's hackathon project: Will create a shell of a power point presentation base on a user prompt or review a user's powerpoint presentation and voice recording. <a href='https://devpost.com/software/uteach-zjdohi' target='_blank'>uTeach </a></dd>
                    </dl>
                </div>
            </div>
        </div>

    )
}