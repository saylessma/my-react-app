import Links from "./links"
import tele from './assets/tele.svg'
import insta from './assets/insta.svg'
import linked from './assets/linked.svg'

function Foot(){
    const name='B Cube'
    const disc=`At ${name}, we’re passionate about creating innovative software solutions that empower businesses and individuals. As a leading software development company, we specialize in designing, developing, and maintaining custom applications, frameworks, and tools. Our skilled team collaborates closely with clients to understand unique requirements, ensuring seamless user experiences. Choose ${name} for tailored software solutions that meet your specific needs. Let’s build something great together! `
    return(
    <div className="foot">
        <div>
            <h1>B Cube Firm</h1>
            <p>{disc}</p>
        </div>
        <div>
            <Links />
        </div>
        <div className="contact">
            <h1>Contact us</h1>
            <h3>Phone No:<span>    0952495454</span></h3>
            <h3>Email:<span>       BCube@gmail.com</span></h3>
            <h3>Location:<span>      Addis Abeba, Haile Garment</span></h3>
        <div className="icons">
           <a><img src={tele} /></a> 
            <a><img src={insta} /></a>
            <a><img src={linked} /></a>
        </div>
        </div>
        



    </div>)
}



export default Foot