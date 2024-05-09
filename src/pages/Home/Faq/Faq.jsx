import React, { useState } from 'react';
import ArrowImg from "../../../assets/Home/arrow.png";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);


    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Do you offer freelancers?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "What’s the guarantee that I will be satisfied with the hired talent?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "Can I hire multiple talents at once?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "Why should I not go to an agency directly?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "Who can help me pick a right skillset and duration for me?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        }
    ];

    return (
        <div className='flex flex-col  items-center bg-[#E8EEE7] font-Manrope w-[95%] mx-auto my-[8%] rounded-3xl md:flex-row sm:my-[3%]'>
            <div className='flex md:flex-col w-[50%] '>
                <div className='mx-[10%] py-[8%]'>
                    <div className=' font-Grace text-[#9E9D9D] text-2xl'>What’s on your mind</div>
                    <div className=' text-4xl font-semibold'>Ask Your Questions</div>
                </div>
                <img src={ArrowImg} alt="arrowImg" className='w-[50%]'/>
            </div>
            <div className='w-[90%] py-[5%] md:w-[50%]'>
                {faqData.map((faq, index) => (
                    <div key={index} className='text-[#1C1C1C] font-semibold'>
                        <div
                            className={` ${activeIndex === index ? 'active' : ''} flex justify-between mr-[10%] border-b border-b-[#D7D7D7] py-[2%]`}
                            onClick={() => toggleAnswer(index)}
                        >
                           <div>{faq.question}</div>
                          <button className=' text-2xl'>{activeIndex === index ? "-" : "+"}</button>
                        </div>
                        {activeIndex === index && (
                            <div className='py-[2%] text-[#617275] font-light text-sm w-[80%]'>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
