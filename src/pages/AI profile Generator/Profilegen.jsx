import React, { useState } from 'react';
import Header from '../../Component/Common component/Header';
import Footer from '../../Component/Common component/Footer';
import './ProfileGenerator.css'
import { div } from 'motion/react-client';
import Navbar from '../../Component/Common component/Navbar';
const ProfileGenerator = () => {
  const steps = [1,2,3,4];
  const step2 = [2,3,4];
  let [stepNumber, setstepNumber] = useState([1])
  let [activePage , setActivePage] = useState(0)
  let [formJDCreation, setformJDCreation] = useState(true)

  
  function Wizardfunctionality (btn) {
    let num = Number(btn.target.id)
    if(num < 4) {
      setstepNumber((prev) => [...prev, num+1])
    }
  
      if(activePage < 3) {
        setActivePage(activePage +1)
      }
      else if(btn.target.innerText == "Almost there") {
        setformJDCreation(false)
     }
  }


    let wizardformArray= [
      {
          id : 1,
          Title : "Company Culture & Values",
          subtitle: "Let’s Build the Foundation! Your culture, your values, your perfect match!",
          form : [
            {
              label : "Company",
              placeholder: "Company name",
              inputType : "text",
              isSuggestion : false,
              isrequired : true,
              error : ""
            },
            {
              label : "Cultural Fit Factors",
              placeholder: "Cultural Fit Factors",
              inputType : "text",
              isSuggestion : true,
              isrequired : true,
              error : ""
            },
            {
              label : "Personality Traits",
              placeholder : "Personality Traits",
              inputType : "text",
              isSuggestion : true
            }
          ],
          buttonName : "Next up"
      },
      {
        id : 2,
        Title : "Manager’s  Requirements/Insights",
        subtitle: "Customizing for your team’s unique needs!",
        form : [
          {
            label : "Work Experience",
            placeholder : "Work Experience",
            inputType : "text",
            isSuggestion : false
          },
          {
            label : "Technology/Domain",
            placeholder : "Technology",
            inputType : "text",
            isSuggestion : true
          },
          {
            label : "Tools",
            placeholder: "Tools",
            inputType : "text",
            isSuggestion : true
          }
        ],
        buttonName : "all in sync!"
    },
    {
      id : 3,
      Title : "Industry-Standards and Customization ",
      subtitle: "Time to tap into industry standards! We’ve got you covered.",
      form : [
        {
          label : "Role Title",
          placeholder : "Role Title",
          inputType : "text",
          isSuggestion : false
        },
        {
          label : "Core Responsibilities",
          placeholder : "Technology",
          inputType : "text",
          isSuggestion : false
        },
        {
          label : "Skills & Competencies",
          placeholder : "Skills & Competencies",
          inputType : "text",
          isSuggestion : false
        },
        {
          label : "Education Requirements",
          placeholder : "Education Requirements",
          inputType : "text",
          isSuggestion : false
        }
      ],
       buttonName : "Good Going"
  },
  {
    id : 4,
    Title : "Job-Specific Customization",
    subtitle: "Final touch – Tailoring for the perfect role fit!",
    form : [
      {
        label : "Specialized Role Focus",
        placeholder : "Technology",
        inputType : "text",
        isSuggestion : true
      },
      {
        label : "Unique Skills (optional)",
        placeholder : "Unique Skills (optional)",
        inputType : "text",
        isSuggestion : false
      },
      {
        label : "Key Deliverables (optional)",
        placeholder : "Deliverables",
        inputType : "text",
        isSuggestion : true
      },
    ],
    buttonName : "Almost there"
}
    ]


  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8 AI-profile-generator">
      <div className="top-right-gradient"></div>
      <div className="top-center-gradient"></div>
      <div className="bottom-left-gradient"></div>
      {/* Header */}
      <Navbar />
      <Header />
      <div className="max-w-4xl mx-auto mb-8 title">
        <h1 className="font-bold text-navy-900 text-center mb-2">
          AI-Powered Job Profile Generator
        </h1>
      </div>

      {/* Progress Steps */}
     

      {/* Main Form Card */}
      {formJDCreation ? <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/30 border border-white/50 shadow-xl p-8 rounded-2xl form-division">
      <div className="max-w-3xl mx-auto mb-8 wizard-step">
        <div className="flex items-center justify-center mb-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${ stepNumber.includes(step) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 w-16 mx-2 
                    ${stepNumber.includes(step)  ? 'bg-blue-500' : 'bg-gray-200'}`} />
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {wizardformArray[activePage].Title}
            </h2>
            <p className="text-gray-600">
            {wizardformArray[activePage].subtitle}
            </p>
          </div>

          {/* Form Fields */}
        
          <div className="space-y-6">

            {
              wizardformArray[activePage].form.map((element,index) => {
                return(
                  <div key={index} className='form-container'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {element.label}
                  </label>
                  <input type={element.inputType}
                    placeholder={element.placeholder}
                    className="w-full bg-white/50 border-white/30 focus:border-blue-500 mb-2"
                  />
                  {element.isSuggestion ? <div className="flex flex-wrap gap-2">
                    {['Customer Centricity', 'leadership', 'Integrity', 'Collaboration', 'adaptability'].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div> : null}
                </div>
                )
              })
            }
            
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button id={wizardformArray[activePage].id} className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors" onClick={(e) => {Wizardfunctionality(e)}}>
            {wizardformArray[activePage].buttonName}
            </button>
          </div>
        </div>
      </div> : 
    <div className="outercontianer">
       <div className="mx-auto backdrop-blur-lg bg-white/30 border border-white/50 shadow-xl p-8 rounded-2xl JD-division">
          <div className='JD-title'>
            <h3>Ready to Launch ?</h3>
            <p>Your JS is set for Success</p>
          </div>
          <div className="JD-outer-frame">
            <h4>Summary View</h4>
            <div className="JD-container">
              <div className='text-container'>
                <p className='position'>Position: UI Designer</p>
                <p className='location'>Location:  Remote | Hybrid</p>
                <p className='employement'>Employment Type: Full-Time</p>
              </div>
              <div className='description-JD'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos doloribus expedita non odio amet odit ab ea quidem? Nostrum, cumque ipsam! Molestiae ducimus libero voluptate recusandae modi? Aliquam quibusdam ad, illo ducimus totam possimus in ullam deleniti. Nisi, autem illum! Deserunt tenetur, vitae atque facilis cupiditate veritatis at ipsa aut?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa enim dolore quasi explicabo error, at id! Illum tempore sapiente quo.</div>
            </div>
           <div className='suggestion-checkbox'>
           <div className='checkbox-div'><input type="checkbox" /><span>Quick Publish</span></div>
           <div className='suggestion'>
            <span>Linkedin</span>
            <span>Naukri</span>
            <span>Google jobs</span>
           </div>
           </div>
           <div className="JD-btn">
            <button>Generatre JD Now<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M15.808 0a10 10 0 0 0-7.142 3H6.75A2.75 2.75 0 0 0 4 5.75V8h2l2 2v2h2.25A2.75 2.75 0 0 0 13 9.25V7.334a10 10 0 0 0 3-7.142V0zM6.44 6.5a10 10 0 0 1 1.015-2H6.75c-.69 0-1.25.56-1.25 1.25v.75zm3.06 4v-.94a10 10 0 0 0 2-1.015v.705c0 .69-.56 1.25-1.25 1.25zm4.88-8.88a8.5 8.5 0 0 0-6.71 5.928l.782.783a8.5 8.5 0 0 0 5.928-6.71Zm-11.6 8.66a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 1 0 1.06 1.06zm3 1a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 1 0 1.06 1.06zm1 1.94a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg></button>
           </div>
          </div>
      </div> 
    </div>
      }
     

      {/* Footer */}
      <Footer centerText={"Enabled by ESDS Software Solution Limited : Powering Innovation"} />
    </div>
  );
};

export default ProfileGenerator;