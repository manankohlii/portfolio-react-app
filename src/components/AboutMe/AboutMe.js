import React from 'react'
import './AboutMe.css'
import aboutme from './about.png'

const about = props =>(
    <section className="about">
    <div className="section_title"><h2>ABOUT ME</h2></div>
    <div className="image">
    <img src={aboutme} alt="AboutMe Pic"></img>
    </div>
    <div className="about_info">
        <p>
Hi, I'm advocate Pooja Kohli. 
I'm passionate about my work and I am practicing law in Delhi High court, district court, consumer court and forums
We are specialised in  all sorts of legal work and provide a wide array of legal services to a variety of clients. 
 
I'm  highly-educated and endure years of legal training. After I  earned my bachelor’s degree from Nagpur University Maharashtra in the year 2004 and got myself enroll in Delhi High court in the year 2005.
I'm dedicated to my work and I certainly have skills which are  required to succeed in litigation.
</p>
<p>
My Researches are 

Strong written communication
Verbal communication and public speaking
Negotiation 
Client service
Critical reasoning and analysis
Time management
Ability to work under high pressure
Ability to multitask 
Key Duties 
Whether on behalf of an individual, a company, or a government agency, a lawyer is an advocate.my  job is to provide legal services to clients. Although legal professionals’  duties may differ depending on the nature of a client.</p>
    </div>
    </section>
);

export default about