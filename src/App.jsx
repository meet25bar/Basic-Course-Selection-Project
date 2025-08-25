import { useState } from "react";
import "./App.css";

const courses = [
  { id: 1, title: "Dog Training Basics", description: "Learn basic obedience commands for dogs." },
  { id: 2, title: "Cat Behaviour Training", description: "Understand and train your cat effectively." },
  { id: 3, title: "Horse Riding Essentials", description: "Get started with horse riding and care." },
];

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [step, setStep] = useState(1);

  const closeModal = () => {
    setSelectedCourse(null);
    setStep(1);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Available Courses</h1>

        <div className="course-list">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-info">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
              </div>
              <button 
                onClick={() => setSelectedCourse(course)}
                className="enroll-btn"
              >
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedCourse && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Close button  */}
            <div className="modal-header">
              <h2 className="modal-title">{selectedCourse.title}</h2>
              <button 
                onClick={closeModal}
                className="close-btn"
              >
                ×
              </button>
            </div>

            {/* Modal content based on step */}
            <div className="modal-body">
              {step === 1 && (
                <div>
                  <p className="step-description">Step 1: Confirm your interest in this course.</p>
                  <p className="step-details">
                    You're about to enroll in "{selectedCourse.title}". This course will help you {selectedCourse.description.toLowerCase()}
                  </p>
                </div>
              )}
              
              {step === 2 && (
                <div>
                  <p className="step-description">Step 2: Provide your details for enrollment.</p>
                  <div className="form-container">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Experience Level</label>
                      <select className="form-input">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="success-content">
                  <div className="success-icon">🎉</div>
                  <p className="step-description">Enrollment successful!</p>
                  <p className="step-details">
                    You have successfully enrolled in "{selectedCourse.title}". You will receive a confirmation email shortly.
                  </p>
                </div>
              )}
            </div>

            {/* Modal buttons */}
            <div className="modal-buttons">
              {step < 3 && (
                <button 
                  onClick={() => setStep(step + 1)}
                  className="btn-primary"
                >
                  {step === 1 ? "Continue" : "Submit"}
                </button>
              )}
              <button 
                onClick={closeModal}
                className="btn-secondary"
              >
                {step === 3 ? "Close" : "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}