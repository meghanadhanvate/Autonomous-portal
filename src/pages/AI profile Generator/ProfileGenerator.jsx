import React, { useState } from 'react';
import Header from '../../Component/Common component/Header';
import Footer from '../../Component/Common component/Footer';
import './ProfileGenerator.css';
import Navbar from '../../Component/Common component/Navbar';
import CallToAction from '../../Component/Common component/CallToAction';

const ProfileGen = () => {
  const steps = [1, 2, 3, 4];
  const [stepNumber, setStepNumber] = useState([1]);
  const [activePage, setActivePage] = useState(0);
  const [formJDCreation, setFormJDCreation] = useState(true);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Validation rules for each form field
  const getValidationRules = (field) => {
    const rules = {
      required: field.isrequired,
      minLength: 2,
      maxLength: 100
    };
    return rules;
  };

  // Validate a single field
  const validateField = (value, field) => {
    const rules = getValidationRules(field);
    if (rules.required && !value?.trim()) {
      return `${field.label} is required`;
    }
    if (value?.trim().length < rules.minLength) {
      return `${field.label} must be at least ${rules.minLength} characters`;
    }
    if (value?.trim().length > rules.maxLength) {
      return `${field.label} must not exceed ${rules.maxLength} characters`;
    }
    return '';
  };

  // Validate entire form
  const validateForm = (pageIndex) => {
    const currentFormFields = wizardformArray[pageIndex].form;
    const newErrors = {};
    let isValid = true;

    currentFormFields.forEach(field => {
      const fieldValue = formData[field.label] || '';
      const fieldError = validateField(fieldValue, field);
      if (fieldError) {
        newErrors[field.label] = fieldError;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleInputChange = (label, value) => {
    setFormData(prev => ({
      ...prev,
      [label]: value
    }));
    
    // Clear error when user starts typing
    if (errors[label]) {
      setErrors(prev => ({
        ...prev,
        [label]: ''
      }));
    }
  };

  function Wizardfunctionality(btn) {
    const num = Number(btn.target.id);
    
    // Validate current form before proceeding
    if (!validateForm(activePage)) {
      return; // Stop if validation fails
    }

    if (num < 4) {
      setStepNumber((prev) => [...prev, num + 1]);
    }

    if (activePage < 3) {
      setActivePage(activePage + 1);
    } else if (btn.target.innerText === "Almost there") {
      setFormJDCreation(false);
    }
  }

  const wizardformArray= [
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
       <Navbar isHomeicon={true} />
      <Header />
       <CallToAction innertext={"Talk to our expert"} />
      <div className="max-w-4xl mx-auto mb-8 title">
        <h1 className="font-bold text-navy-900 text-center mb-2">
          AI-Powered Job Profile Generator
        </h1>
      </div>

      {formJDCreation ? (
       <div className="form-section">
         <div className="backdrop-blur-lg bg-white/30 border border-white/50 shadow-xl p-8 form-division">
          <div className="max-w-3xl mx-auto mb-8 wizard-step">
            <div className="flex items-center justify-center mb-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center">
                    <div className={`step-number-div rounded-full flex items-center justify-center 
                      ${stepNumber.includes(step) ? 'active-step' : 'bg-white'}`}>
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`step-line mx-4 
                        ${stepNumber.includes(step) ? 'bg-blue-500' : 'bg-white'}`} />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="space-y-8 form-outer-div">
            <div className="text-center">
              <h2 className="text-xl mb-2">
                {wizardformArray[activePage].Title}
              </h2>
              <p className="text-gray-600 form-subtitle">
                {wizardformArray[activePage].subtitle}
              </p>
            </div>

            <div className="">
              {wizardformArray[activePage].form.map((element, index) => (
                <div key={index} className='form-container'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {element.label} {element.isrequired && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={element.inputType}
                    placeholder={element.placeholder}
                    className={`w-full bg-white/50 border-white/30 ${
                      errors[element.label] ? 'border-red-500' : ''
                    }`}
                    value={formData[element.label] || ''}
                    onChange={(e) => handleInputChange(element.label, e.target.value)}
                  />
                  {errors[element.label] && (
                    <p className="text-red-500 error-text text-sm mt-1">{errors[element.label]}</p>
                  )}
                  {element.isSuggestion && (
                    <div className="flex flex-wrap gap-2 suggestion-div">
                      {['Customer Centricity', 'leadership', 'Integrity', 'Collaboration', 'adaptability'].map((tag) => (
                        <span key={tag} className="px-3 py-1 suggestion-span rounded-full bg-blue-100/50 text-blue-700 text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                id={wizardformArray[activePage].id}
                className=" form-submit-btn text-white rounded-full"
                onClick={(e) => {Wizardfunctionality(e)}}
              >
                {wizardformArray[activePage].buttonName}
              </button>
            </div>
          </div>
        </div>
       </div>
      ) : (
        // Your existing JD creation view remains the same
         <div className="outercontianer">
              <div className="mx-auto backdrop-blur-lg bg-white/30 border border-white/50 shadow-xl p-8 rounded-2xl JD-division">
                 <div className='JD-title'>
                   <h3>Ready to Launch ?</h3>
                   <p>Your JS is set for Success</p>
                 </div>
                 <div className="JD-outer-frame">
                  <div className='sumary-template'>
                  <p>Summary View</p>
                    <div>Templates<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.47059 3.11761H3.23529C2.64246 3.11761 2.0739 3.35312 1.6547 3.77232C1.2355 4.19152 1 4.76007 1 5.35291V18.7647C1 19.3575 1.2355 19.9261 1.6547 20.3453C2.0739 20.7645 2.64246 21 3.23529 21H9.60253M16.6471 10.9411V5.35291C16.6471 4.76007 16.4116 4.19152 15.9924 3.77232C15.5732 3.35312 15.0046 3.11761 14.4118 3.11761H12.1765" stroke="black" stroke-width="1.67647" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.4707 9.8235H9.94129M5.4707 14.2941H8.82364M17.206 19.3235L20.0001 22.1176M5.4707 3.11762C5.4707 2.52478 5.70621 1.95623 6.12541 1.53703C6.5446 1.11783 7.11316 0.882324 7.706 0.882324H9.94129C10.5341 0.882324 11.1027 1.11783 11.5219 1.53703C11.9411 1.95623 12.1766 2.52478 12.1766 3.11762C12.1766 3.71046 11.9411 4.27901 11.5219 4.69821C11.1027 5.11741 10.5341 5.35291 9.94129 5.35291H7.706C7.11316 5.35291 6.5446 5.11741 6.12541 4.69821C5.70621 4.27901 5.4707 3.71046 5.4707 3.11762ZM12.1766 17.0882C12.1766 17.8293 12.471 18.5399 12.995 19.0639C13.519 19.5879 14.2297 19.8823 14.9707 19.8823C15.7117 19.8823 16.4224 19.5879 16.9464 19.0639C17.4704 18.5399 17.7648 17.8293 17.7648 17.0882C17.7648 16.3472 17.4704 15.6365 16.9464 15.1125C16.4224 14.5885 15.7117 14.2941 14.9707 14.2941C14.2297 14.2941 13.519 14.5885 12.995 15.1125C12.471 15.6365 12.1766 16.3472 12.1766 17.0882Z" stroke="black" stroke-width="1.67647" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                  </div>
                  
                   <div className="JD-container">
                     <div className='text-container'>
                       <p className='position'>Position: UI Designer</p>
                       <p className='location'>Location:  Remote | Hybrid</p>
                       <p className='employement'>Employment Type: Full-Time</p>
                     </div>
                     <div className='description-JD'>
                     We are a forward-thinking organization dedicated to innovation, collaboration, and customer-centric design. Our culture thrives on creativity, empowering individuals, and fostering teamwork to build impactful digital experiences.<br />
                     Core Values: Integrity, Innovation, Collaboration, Customer Centricity, InclusivityPersonality Fit: Outgoing, Analytical, Team Player, Self-Starter
                        </div>
                   </div>
                  <div className='suggestion-checkbox'>
                  <div className='checkbox-div'><input type="checkbox" /><span className='customize-checkbox'></span><span className='text-input'>Quick Publish</span></div>
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
             <div className='side-controls'>
              <ul>
                <li className='share-button active-btn'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22m0-2q.425 0 .713-.287T18 19t-.288-.712T17 18t-.712.288T16 19t.288.713T17 20M5 13q.425 0 .713-.288T6 12t-.288-.712T5 11t-.712.288T4 12t.288.713T5 13m12-7q.425 0 .713-.288T18 5t-.288-.712T17 4t-.712.288T16 5t.288.713T17 6m0-1"/></svg></li>
                <li className='download-button'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"/></svg></li>
                <li className='edit-button'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g></svg></li>
              </ul>
             </div>
           </div>
      )}

      <Footer centerText={"Enabled by ESDS Software Solution Limited : Powering Innovation"} />
    </div>
  );
};

export default ProfileGen;
