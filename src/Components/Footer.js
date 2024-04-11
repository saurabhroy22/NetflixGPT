import { GITHUB_LOGO, INSTA_LOGO, LINKEDIN_LOGO, TWITTER_LOGO } from '../utils/Constants'

const Footer = () => {
  return (
    <div className=' text-center  pt-8 bg-red-600 opacity-90 font-serif'>
        <div className=' m-auto w-3/4 md:w-1/2 flex justify-between cursor-pointer'>
            <span>Home</span>
            <span>About</span>
            <span>Career</span>
            <span>Contact</span>
            <span>Blog</span>
        </div>
        <div className=' mx-auto w-1/2 md:w-1/6 mt-5 flex justify-between cursor-pointer'>
            <img className=' w-6' src={TWITTER_LOGO} alt=' twitter logo'/>
            <img className=' w-6' src={INSTA_LOGO} alt=' twitter logo'/>
            <img  className=' w-6' src={LINKEDIN_LOGO} alt=' twitter logo'/>
            <img className=' w-6' src={GITHUB_LOGO} alt=' twitter logo'/>
        </div>
        <div className=' mt-5 bg-red-800'>
        copyright © All rights reserved saurabhroy22@gmail.com 
        </div>
       
    </div>
  )
}

export default Footer