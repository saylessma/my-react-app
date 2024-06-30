import Head from "./head"
import Small from "./smallcont"
import Big from "./bigcontain"
import ImageContain from "./bigcontains"
import Long from "./longconstin"
import planning from './assets/planning.png'
import req from './assets/req.png'
import design from './assets/design.png'
import process from './assets/process.png'
import dev from './assets/dev.png'
import test from './assets/test.png'
import deploy from './assets/deploy.png'
import Sliderright from "./sliders"
import Scrolleft from "./slidele"
import Ui from './assets/ui.png'
import front from './assets/front.png'
import back from './assets/back.png'
import ai from './assets/aiii.png'
import constinu from './assets/contin.png'
import tools from './assets/tools.png'
import last from './assets/last.png'
import Foot from "./footer"




function App() {
  const name='B Cube '
  


  return (
  <div>
    <Head />

    
    <h1 className="firsth">
    Let's Create Your Dream Together
    </h1>

    <h1 className="what">What We Do </h1>


    <div className="small-contain">
      <Small h='Custom Software Development:' constain='Crafting tailored solutions to meet specific business needs. Whether it’s a web application, mobile app, or enterprise software, they build it from scratch.' />
      <Small h='Application Modernization:' constain='Updating legacy systems, improving performance, and enhancing user experience. They breathe new life into outdated software.' />
      <Small h='Software Maintenance:' constain=' Ensuring smooth operation by fixing bugs, applying security patches, and optimizing performance. It’s like keeping a well-oiled machine running.' />
      <Small h='Monitoring & Reporting:' constain='Monitoring & Reporting: Proactively monitoring applications, identifying issues, and providing regular reports. Think of them as the vigilant guardians of your software.' />
      <Small h='Co-Sourcing App Services:' constain=' Collaborating seamlessly with your in-house team. They become an extension of your workforce, sharing expertise and accelerating development.' />
      <Small h='End-to-End Design-Build-Manage Services:' constain=' Taking care of the entire software lifecycle – from ideation and design to development, deployment, and ongoing management.' />
      
    </div>


    <h1 className="what">Software And Web Development Steps</h1>
    <img src={process} className="software"/>


    <div className="biggest">
        <Big head='Planning' cont='
Purpose: The planning phase sets the foundation for the entire project. Key activities include:
Requirement Elicitation: Engaging with stakeholders to gather detailed requirements. Techniques like interviews, surveys, and workshops are used.
Feasibility Study: Assessing whether the project is technically feasible, economically viable, and operationally practical.
Resource Allocation: Allocating resources (such as developers, testers, and infrastructure) based on project needs.
Project Scheduling: Creating a timeline, milestones, and deliverables.
Output: The Project Plan outlines project scope, objectives, risks, and resource allocation. The Software Requirement Specification (SRS) documents functional and non-functional requirements.'/>
        <ImageContain sorce={planning}/>
    </div>


    <div className="biggest">
        <ImageContain sorce={req}/>
        <Big head='Requirements Analysis' cont='
Purpose: Understanding user needs and translating them into specific requirements. Here’s a closer look:
Requirements Gathering: Collecting detailed requirements, including use cases, user stories, and domain-specific requirements.
Requirements Documentation: Creating artifacts like context diagrams, data flow diagrams, and entity-relationship diagrams.
Validation: Ensuring requirements are complete, consistent, and aligned with business goals.
Output: A comprehensive requirements document that serves as a reference for development.'/> 
    </div>

    <div className="biggest">
        <Big head='Design' cont='
Purpose: Designing the software’s architecture and components. Here’s the nitty-gritty:
Architectural Design: Defining the overall system structure, including high-level modules, layers, and interfaces.
High-Level Design: Creating detailed designs for each module, specifying data structures, algorithms, and communication protocols.
Low-Level Design: Designing individual components, considering factors like performance, security, and maintainability.
Output: Design documents, flowcharts, class diagrams, and sequence diagrams.'/>
        <ImageContain sorce={design}/>
    </div>


    <div className="biggest">
        <ImageContain sorce={dev}/>
        <Big head='Development' cont='
Purpose: Writing code based on design specifications. Here’s what happens in the trenches:
Coding: Implementing functionality using programming languages (e.g., Java, Python, C#). Developers follow coding standards and best practices.
Unit Testing: Verifying individual units (functions, classes) to ensure correctness. Test-driven development (TDD) is often used.
Version Control: Managing code changes using tools like Git or SVN.
Output: Source code files, compiled binaries.'/> 
    </div>


    <div className="biggest">
        <Big head='Testing' cont='
Purpose: Ensuring software quality and functionality. Here’s how it unfolds:
Unit Testing: Testing individual components in isolation. Developers write test cases and execute them.
Integration Testing: Verifying interactions between modules. Ensures seamless communication.
System Testing: Validating the entire system against requirements. Includes functional, performance, and security testing.
User Acceptance Testing (UAT): Involving end-users to validate functionality.
Output: Test cases, test reports, and defect logs.'/>
        <ImageContain sorce={test}/>
    </div>


    <div className="biggest">
        <ImageContain sorce={deploy}/>
        <Big head='Deployment' cont='
Purpose: Making the software available for users. Here’s the deployment drill:
Installation: Deploying the software on servers, cloud platforms, or user devices.
Configuration: Setting up parameters (e.g., database connections, environment variables).
User Training: Providing training materials and sessions.
Output: Deployed software accessible to end-users.'/> 
    </div>

    <h1 className="tools">Tools We Use</h1>

    <Sliderright />
    <img className='tols'src={tools} />
    
    <Scrolleft />

    <div className="long-contain">
      <Long 
      icon={Ui} 
      head='Ui/Ux Design' 
      constin={`At ${name}, we specialize in creating user-friendly
       software solutions that delight our clients and their end-users. Our UI/UX design team focuses 
       on clear navigation, responsive buttons, and a user-centric approach. We maintain consistency in
        design elements to enhance brand recognition and build trust. Let us transform your vision into
         an intuitive, engaging digital product`} />
      <Long 
      icon={front} 
      head='Frontend Developement' 
      constin={`At ${name}, our frontend development team brings digital visions to life. 
      We specialize in creating responsive, visually appealing interfaces that seamlessly connect users
       with your applications. From intuitive navigation to pixel-perfect designs, we ensure a delightful
        user experience. Let us transform your ideas into captivating web and mobile interfaces`} />
      <Long 
      icon={back} 
      head='backend Developement' 
      constin={`At ${name},our backend development team architects reliable, scalable systems that power your
       applications. From database design to API development, we ensure seamless data flow and efficient 
       server-side operations. Let us handle the complexities behind the scenes, so you can focus on delivering
        exceptional user experiences.`} />
        <Long 
      icon={ai} 
      head='Ai Integration' 
      constin={`enhances software by automating repetitive tasks, improving reliability through predictive analysis, speeding up development cycles, reducing maintenance costs, and maintaining a human touch in decision-making. It transforms software into an intelligent companion that elevates user experiences`} />
    </div>

    <img src={last} className="last"/>
    <Foot />
    
    

  </div>
    
  )
}

export default App
