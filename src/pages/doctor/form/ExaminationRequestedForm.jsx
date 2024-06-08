import React, { useState } from 'react';

const ExaminationRequestedForm = () => {
  const [formData, setFormData] = useState({
    profileTests: {
      biochemistry: false,
      hematology: false,
      microbiology: false,
      anatomicalPathology: false,
    },
    specificTests: [],
    additionalTests: {
      cervicalCytology: {
        papSmear: false,
        normal: false,
        positiveMonoBlood: false,
        suspiciousLesion: false,
        other: '',
      },
      site: {
        cervix: false,
        vault: false,
        otherSite: '',
      },
      lmpDate: '',
      postMenopausal: false,
      hrt: false,
      other: '',
    },
  });

  const handleProfileTestsChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      profileTests: {
        ...formData.profileTests,
        [name]: checked,
      },
    });
  };

  const handleSpecificTestsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        specificTests: [...formData.specificTests, value],
      });
    } else {
      setFormData({
        ...formData,
        specificTests: formData.specificTests.filter((test) => test !== value),
      });
    }
  };

  const handleAdditionalTestsChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      additionalTests: {
        ...formData.additionalTests,
        [name]: newValue,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border border-gray-300 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Examination Requested Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Profile Tests */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Profile tests:</label>
          <div className="ml-6 grid grid-cols-3 gap-2">
            {Object.entries(formData.profileTests).map(([test, checked]) => (
              <label key={test} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name={test}
                  checked={checked}
                  onChange={handleProfileTestsChange}
                  className="mr-2"
                />
                {test.charAt(0).toUpperCase() + test.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Specific Tests */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Specific tests:</label>
          <div className="ml-6 grid grid-cols-3 gap-2">
            {['G2000', 'G2000-X', 'GT9', 'GTI', 'NEO', 'ES', 'HB3', 'DFS', 'LFT', 'RFT', 'TFT', 'MAC', 'LGL', 'LIP', 'CEA', 'CA 1', 'CA 5', 'CA 9', 'PSA', 'AFP', 'Glucose', 'HIV 1 & 2', 'HbA1c', 'HBsAg', 'H. pylori', 'Uric Acid', 'Free T4', 'FBE (incl. ESR)', 'FBC', 'Hb', 'TWDC', 'Platelets', 'ABO & Rh (D)', 'Malaria parasites', 'Urine FEME', 'RPR (VDRL)','AFB (ZN) Smear Only', 'AFB Smear & Culture', 'Histology', 'Non-Gynae/FNASite','Microscopy/Culture/Sensitivity'].map((test) => (
              <label key={test} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={test}
                  checked={formData.specificTests.includes(test)}
                  onChange={handleSpecificTestsChange}
                  className="mr-2"
                />
                {test}
              </label>
            ))}
          </div>
        </div>

        {/* Additional Tests */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Additional tests:</label>
          <div className="ml-6 grid grid-cols-3 gap-2">
            {/* Cervical Cytology */}
            <div>
              <label className="block font-semibold">Cervical Cytology:</label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="papSmear"
                    checked={formData.additionalTests.cervicalCytology.papSmear}
                    onChange={handleAdditionalTestsChange}
                    className="mr-2"
                  />
                  Pap smear
                </label>
              </div>
            </div>

            {/* Site */}
            <div>
              <label className="block font-semibold">Site:</label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="cervix"
                    checked={formData.additionalTests.site.cervix}
                    onChange={handleAdditionalTestsChange}
                    className="mr-2"
                  />
                  Cervix
                </label>
              </div>
            </div>

            {/* Additional fields */}
            {/* Add more additional fields here */}
          </div>
        </div>

      </form>
    </div>
  );
};

export default ExaminationRequestedForm;
