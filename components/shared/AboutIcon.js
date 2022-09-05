import Image from 'next/image';
import userPic from "../../public/images/profile.png";

const AboutIcon = ({ setShowModal } = props) => {
    return (
        <>
            <div className="relative h-32 w-32 float-right userIcon">
                <div className="absolute bottom-0 right-0 h-16 w-16">
                <Image
                    src={userPic}
                    alt="About application"
                    onClick={() => setShowModal(true)}
                />
                </div>
            </div>
        </>
    )
  }
        
  
  export default AboutIcon;