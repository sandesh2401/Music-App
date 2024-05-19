
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 bg-black text-white font-sans h-full">
      <h1 className="text-4xl font-bold mb-5 text-center">About Us</h1>
      
      {/* Mission Section */}
      <section className="mb-10">
        <h2 className="text-2xl mb-2 text-center">Our Mission</h2>
        <p className="text-lg leading-relaxed text-center">
          Our mission is to provide music lovers with a platform to discover, explore, and enjoy their favorite music effortlessly. 
          We strive to create a seamless and immersive experience that connects artists with their fans and empowers listeners to 
          explore new genres, artists, and songs with ease.
        </p>
      </section>
      
      {/* Vision Section */}
      <section className="mb-10">
        <h2 className="text-2xl mb-2 text-center">Our Vision</h2>
        <p className="text-lg leading-relaxed text-center">
          Our vision is to become the ultimate destination for music enthusiasts worldwide, offering a comprehensive 
          and diverse catalog of music from every genre and era. We aspire to create a community where music lovers 
          can connect, share, and celebrate their passion for music, fostering creativity, collaboration, and 
          discovery within the global music community.
        </p>
      </section>
      
      {/* Team Members Section */}
      <section>
        <h2 className="text-2xl mb-5">Our Team</h2>
        <div className="flex flex-col">
          <div className="mb-5">
            <h3 className="text-xl mb-1">Sandesh Kankriya <span className="ml-5">prn no:-</span></h3>
          </div>
          <div className="mb-5">
            <h3 className="text-xl mb-1">Shivani Kamrekar <span className="ml-5">prn no:-</span></h3>
          </div>
          <div className="mb-5">
            <h3 className="text-xl mb-1">Hrishikesh Sapkal <span className="ml-5">prn no:-</span></h3>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
