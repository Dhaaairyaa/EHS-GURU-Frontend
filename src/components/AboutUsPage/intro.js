import React from 'react';

const Intro = () => {
  return (
    <div className="relative">
        <img
            className="h-[600px] w-full"
            src="https://firebasestorage.googleapis.com/v0/b/ehsguru-10.appspot.com/o/Slim%20Line%20EGSS%20Logo.png?alt=media&token=92a43e10-8aae-43e7-83dc-f75fe8f25924"
            alt="Background"
        />
        <div className="h-[600px] absolute inset-0 bg-gradient-to-b from-[rgba(9,9,9,0.6)] via-[rgba(12,13,13,0.6)] to-[rgba(9,9,9,0.6)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col text-center h-[400px] p-40 space-y-10 text-white ">
                {/* <h1 className="text-6xl ">EHS GURU SUSTAINABLE SOLUTIONS Pvt. Ltd.</h1> */}
                <div className="flex-flex-col space-y-10">
                    <h1 className="text-5xl">Who We Are?</h1>
                    <p className="text-lg">EHS Guru Sustainable Solutions Pvt. Ltd. is a rapidly growing firm specializing in comprehensive Environmental, Health, Safety & Social (EHS&S)
                    and Sustainability consultancy services. With a robust industry presence, we have proudly catered to over 1000+ clients spanning diverse industries, delivering comprehensive and tailored solutions that ensure the highest standards of safety and compliance. Our expertise spans EHS & Industrial Safety, Fire & Electrical Safety, ESG (Environmental, Social, Governance) compliance, and sustainability initiatives, Ergonomics, Regulatory Compliance and specialized trainings in various domains, leveraging the latest industry knowledge and best practices to deliver effective, system-based solutions.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Intro;
