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
                    <p>School: Currently studying Compute Science (AI/ML) @ University of Maryland, Balitmore County</p>
                    <p>Current Project: Experimenting with building a robot that picks up litter</p>
                    <p>Why: To expand my knowledge with enginerring a robot</p>
                </div>
            </div>
            <div>
                <h2 className='center-header'>What have I done?</h2>
                <div className='center-section'>
                    <h3>Experience:</h3>
                    <dl>
                        <dt>Amazon Lab 126:</dt>
                        <dd>Intern as a Software Development Engineer @ Amazon Labs 126 in Sunnyvale, California</dd>
                        <dd>Wokred with an amazing team to expand my SDE knowledge</dd>
                        <dt>Kodak:</dt>
                        <dd>Intern as a Software Engineer @ Kodak in Dayton, Ohio</dd>
                        <dd>Design and implemented software for inkjet printer technology</dd>
                        <dt>hackUMBC:</dt>
                        <dd>Organized UMBC's flagship hackathon, 2024 we brought record breaking numbers!!</dd>
                    </dl>
                    <h3>Projects:</h3>
                    <dl>
                        <dt>Amazon Alexa Apps</dt>
                        <dd>Created multple Apps: 21 Game, Pomodoro Alexa App</dd>
                    </dl>
                </div>
            </div>
        </div>

    )
}