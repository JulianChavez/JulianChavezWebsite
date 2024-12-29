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
                    <p><span className='font-bold'>Current Project</span>: Experimenting with building a robot that picks up litter</p>
                    <p><span className='font-bold'>Why</span>: To expand my knowledge with enginerring a robot</p>
                </div>
            </div>
            <div>
                <h2 className='center-header'>What have I done?</h2>
                <div className='center-section'>
                    <h3>Experience:</h3>
                    <dl>
                        <dt className='font-bold list-section'>Amazon Lab 126</dt>
                        <dd className='dash'>Intern as a Software Development Engineer @ Amazon Labs 126 in Sunnyvale, California</dd>
                        <dd className='dash'>Wokred with an amazing team to expand my SDE knowledge</dd>
                        <dt className='font-bold list-section'>Kodak</dt>
                        <dd className='dash'>Intern as a Software Engineer @ Kodak in Dayton, Ohio</dd>
                        <dd className='dash'>Design and implemented software for inkjet printer technology</dd>
                        <dt className='font-bold list-section'>hackUMBC</dt>
                        <dd className='dash'>Organized UMBC's flagship hackathon, 2024 we brought record breaking numbers!!</dd>
                    </dl>
                    <h3>Projects:</h3>
                    <dl>
                        <dt className='font-bold list-section'>Amazon Alexa Apps</dt>
                        <dd className='dash'>Created multple Apps: 21 Game, Pomodoro Alexa App. The apps need an update(loading)
                        </dd>
                        <dt className='font-bold list-section'>uTeach</dt>
                        <dd className='dash'>2024 UMD's hackathon project: Will create a shell of a power point presentation base on a user prompt or review a user's powerpoint presentation and voice recording.</dd>
                    </dl>
                </div>
            </div>
        </div>

    )
}