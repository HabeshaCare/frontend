import React, { useState } from "react";

const SampleDetailsForm = () => {
  const [formData, setFormData] = useState({
    urgency: "",
    sampleTakenFromPatient: {
      date: "",
      time: "",
      fasting: false,
      nonFasting: false,
    },
    sampleType: {
      blood: false,
      faeces: false,
      urine: false,
      sputum: false,
      swab: false,
      fluids: false,
      tissue: false,
      cytology: false,
      other: "",
    },
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSampleTakenChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      sampleTakenFromPatient: {
        ...formData.sampleTakenFromPatient,
        [name]:
          type === "checkbox" ? !formData.sampleTakenFromPatient[name] : value,
      },
    });
  };

  const handleSampleTypeChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "other") {
      setFormData({
        ...formData,
        sampleType: {
          ...formData.sampleType,
          other: checked ? value : "",
        },
      });
    } else {
      setFormData({
        ...formData,
        sampleType: {
          ...formData.sampleType,
          [name]: checked,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Sample Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Urgency:</label>
          <div className="flex items-center mb-2">
            <label htmlFor="normal" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="normal"
                name="urgency"
                value="normal"
                checked={formData.urgency === "normal"}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Normal
            </label>
            <label htmlFor="urgent" className="inline-flex items-center">
              <input
                type="radio"
                id="urgent"
                name="urgency"
                value="urgent"
                checked={formData.urgency === "urgent"}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Urgent
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">
            Sample taken from patient:
          </label>
          <div className="flex mb-2">
            <input
              type="date"
              name="date"
              value={formData.sampleTakenFromPatient.date}
              onChange={handleSampleTakenChange}
              className="px-3 py-2 border rounded-md mr-4"
            />
            <input
              type="time"
              name="time"
              value={formData.sampleTakenFromPatient.time}
              onChange={handleSampleTakenChange}
              className="px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex items-center mb-2">
            <label htmlFor="fasting" className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                id="fasting"
                name="fasting"
                checked={formData.sampleTakenFromPatient.fasting}
                onChange={handleSampleTakenChange}
                className="mr-2"
              />
              Fasting
            </label>
            <label htmlFor="nonFasting" className="inline-flex items-center">
              <input
                type="checkbox"
                id="nonFasting"
                name="nonFasting"
                checked={formData.sampleTakenFromPatient.nonFasting}
                onChange={handleSampleTakenChange}
                className="mr-2"
              />
              Non-fasting
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Sample type:</label>
          <div className="flex flex-wrap">
            {Object.entries(formData.sampleType).map(([key, value]) => {
              if (key !== "other") {
                return (
                  <label
                    key={key}
                    htmlFor={key}
                    className="inline-flex items-center mr-4 mb-2"
                  >
                    <input
                      type="checkbox"
                      id={key}
                      name={key}
                      checked={value}
                      onChange={handleSampleTypeChange}
                      className="mr-2"
                    />
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                );
              } else {
                return (
                  <div key={key} className="inline-flex items-center mr-4 mb-2">
                    <input
                      type="checkbox"
                      id={key}
                      name={key}
                      checked={value !== ""}
                      onChange={handleSampleTypeChange}
                      className="mr-2"
                    />
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleSampleTypeChange}
                      className="px-2 py-1 border rounded-md"
                      placeholder="Other"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SampleDetailsForm;
