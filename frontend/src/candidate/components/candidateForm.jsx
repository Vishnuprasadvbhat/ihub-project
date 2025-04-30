import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import merge from 'lodash.merge';

const initialFormState = {
  personalInfo: {
    name: '',
    dob: new Date(),
    gender: '',
    address: '',
    phone: '',
    email: '',
  },
  academics: {
    masters: {
      institution: '',
      department: '',
      program: '',
      specialization: '',
      semester: '',
      percentage: '',
    },
    underGraduation: {
      institution: '',
      department: '',
      program: '',
      specialization: '',
      semester: '',
      percentage: '',
    },
    puc: {
      institution: '',
      combination: '',
      marks: '',
      percentage: '',
    },
    sslc: {
      institution: '',
      marks: '',
      percentage: '',
    },
  },
  additionalInfo: {
    aadhaar: '',
    pan: '',
    certifications: '',
    projects: '',
    experience: '',
    skills: '',
    languages: '',
    hobbies: '',
  },
};

const InputField = React.memo(
  ({ label, value, onChange, type = "text", required = false }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {type === "date" ? (
          <DatePicker
            selected={value}
            onChange={onChange}
            className="w-full p-2 border rounded-md"
            dateFormat="dd/MM/yyyy"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border rounded-md"
            required={required}
          />
        )}
      </div>
    );
  }
);



const AcademicSection = React.memo(({ title, path, formData, handleChange }) => {
  const getValue = useCallback(
    (field) => path.split('.').reduce((obj, key) => obj?.[key], formData)?.[field] || '',
    [formData, path]
  );

  const handleFieldChange = useCallback(
    (field, value) => handleChange(`${path}.${field}`, value),
    [handleChange, path]
  );

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Institution"
          value={getValue('institution')}
          onChange={(value) => handleFieldChange('institution', value)}
        />
        {path.includes('puc') && (
          <InputField
            label="Combination"
            value={getValue('combination')}
            onChange={(value) => handleFieldChange('combination', value)}
          />
        )}
        {!path.includes('sslc') && (
          <>
            <InputField
              label="Department"
              value={getValue('department')}
              onChange={(value) => handleFieldChange('department', value)}
            />
            <InputField
              label="Program"
              value={getValue('program')}
              onChange={(value) => handleFieldChange('program', value)}
            />
            <InputField
              label="Semester"
              value={getValue('semester')}
              onChange={(value) => handleFieldChange('semester', value)}
            />
          </>
        )}
        <InputField
          label="Percentage"
          value={getValue('percentage')}
          onChange={(value) => handleFieldChange('percentage', value)}
          type="number"
        />
        {path.includes('sslc') && (
          <InputField
            label="Marks"
            value={getValue('marks')}
            onChange={(value) => handleFieldChange('marks', value)}
            type="number"
          />
        )}
      </div>
    </div>
  );
});

const TextareaField = React.memo(({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full       p-2 border rounded-md resize-y"
    />
  </div>
));

const CandidateForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (initialData) {
      const mergedData = merge({}, initialFormState, initialData);
      mergedData.personalInfo.dob = new Date(initialData.personalInfo.dob);
      setFormData(mergedData);
    }
  }, [initialData]);

  const handleChange = useCallback((path, value) => {
    console.log(`Changing ${path} to ${value}`); // Log changes for debugging
    setFormData(prev => {
      const keys = path.split('.');
      const newData = { ...prev };
      let current = newData;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;
        } else {
          current[key] = { ...current[key] };
          current = current[key];
        }
      });

      return newData;
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData); // Log the form data before submission
    try {
      const response = await axios.post('http://localhost:5000/api/candidates', formData);
      if (response.data.message) {
        alert('Profile saved successfully!');
        setFormData(initialFormState); // Reset the form to initial state
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving profile!');
    }
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="bg-white rounded-xl shadow-lg p-8 mt-10 mx-auto max-w-5xl w-full"
  >
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Candidate Registration
    </h1>

    {/* Personal Info */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Full Name"
          value={formData.fullName}
          onChange={(value) => handleInputChange("fullName", value)}
          required
        />
        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          required
        />
        <InputField
          label="Phone"
          type="tel"
          value={formData.phone}
          onChange={(value) => handleInputChange("phone", value)}
          required
        />
        <InputField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={setDob}
          required
        />
        <InputField
          label="Address"
          value={formData.address}
          onChange={(value) => handleInputChange("address", value)}
          required
        />
      </div>
    </section>

    {/* Additional Info */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Additional Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Education"
          value={formData.education}
          onChange={(value) => handleInputChange("education", value)}
          required
        />
        <InputField
          label="Experience (in years)"
          type="number"
          value={formData.experience}
          onChange={(value) => handleInputChange("experience", value)}
          required
        />
        <InputField
          label="Skills"
          value={formData.skills}
          onChange={(value) => handleInputChange("skills", value)}
          required
        />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Tell us about yourself
      </h3>
      <textarea
        name="about"
        value={formData.about}
        onChange={(e) => handleInputChange("about", e.target.value)}
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write something about yourself..."
        required
      />
    </section>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition transform hover:-translate-y-0.5"
    >
      Submit
    </button>
  </form>
    );
  };
  
  export default CandidateForm;
      