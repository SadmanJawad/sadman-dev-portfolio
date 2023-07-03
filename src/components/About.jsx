import nabil from '/assets/nabil.jpg'
import '../styles/styles.css'


const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row m-12">
      {/* Left Section - Photo Gallery */}
      <div className="w-full md:w-1/2 p-4">
        <img src={nabil} alt="" />
        {/* Add your photo gallery component here */}
      </div>

      {/* Right Section - About Me Text */}
      <div className="w-full md:w-1/2 p-4">
        <div>
          <h1 className="text-2xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold">
            About Me
          </h1>
        </div>
        <div>
          <h3 className="text-lg"> Hi ! I am Sadman Jawad Chowdhury.</h3>
          <p>
            👉 I'm a passionate full-stack developer with a knack for crafting
            exceptional digital experiences. With a strong background in both
            front-end and back-end development.
            <br />
            👉 I'm confident that I have what it takes to build your next
            website.
            <br />
            👉 I'm a Frontend Developer with expertise of 1+ years of
            professional work experience.
            <br />
            👉 I strive to create original, Highly Enhance Websites and
            impactful user experiences.
            <br />
            👉 I’m quietly confident, naturally curious, and prepetually working
            on improving my chops one design problem at a time.
          </p>
        </div>

<button className="button-89 mt-5 dark:text-white" role="button"><a href="../assets/Resume_Sadman.pdf">Download My Resume</a></button>
      </div>
   
    </div>
  );
};

export default About;
