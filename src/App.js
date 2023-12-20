import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [formData, setFormData] = useState({
    developerName: '',
    projectName: '',
    unitName: '',
    unitType: '',
    level: '',
    location: '',
    exposure: '',
    size: '',
    bedRoom: 0,
    bathRoom: 0,
    parking: false,
    locker: false,
    balcony: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };


  const handleBedRoomChange = (amount) => {
    setFormData((prevData) => ({
      ...prevData,
      bedRoom: prevData.bedRoom + amount,
    }));
  };

  const handleBathRoomChange = (amount) => {
    setFormData((prevData) => ({
      ...prevData,
      bathRoom: prevData.bathRoom + amount,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newErrors = {};
    // if (!formData.developerName.trim()) {
    //   newErrors.developerName = 'developerName Name is required';
    // }
    // if (!formData.projectName.trim()) {
    //   newErrors.projectName = 'Project Name is required';
    // }
    // if (!formData.unitName.trim()) {
    //   newErrors.unitName = 'Unit name is required';
    // }
    // if (!formData.unitType.trim()) {
    //   newErrors.unitType = 'Unit Type is required';
    // }
    // if (!formData.level.trim()) {
    //   newErrors.level = 'Level is required';
    // }
    // if (!formData.location.trim()) {
    //   newErrors.location = 'Location address is required';
    // }
    // if (!formData.exposure.trim()) {
    //   newErrors.exposure = 'Exposure is required';
    // }
    // if (!formData.size.trim()) {
    //   newErrors.size = 'Size is required';
    // }

    try {
      const response = await fetch('http://localhost:5000/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Property saved:', data);

        // Reset the form
        //
      } else {
        console.error('Error saving property:', response.status);
      }
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };

  

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">React Form Example</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="developerName" className="form-label">
                developerName:
              </label>
              <input
                type="text"
                inputValue="developerName"
                className={`form-control ${errors.developerName ? 'is-invalid' : ''}`}
                id="developerName"
                name="developerName"
                value={formData.developerName}
                onChange={handleChange}
                placeholder="Enter developerName Name*"
              />
              {errors.developerName && (
                <div className="invalid-feedback">{errors.developerName}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">
                Projects:
              </label>
              <input
                type="text"
                className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Enter Projects Name*"
              />
              {errors.projectName && (
                <div className="invalid-feedback">{errors.projectName}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="unitName" className="form-label">
                Unit:
              </label>
              <input
                type="text"
                className={`form-control ${errors.unitName ? 'is-invalid' : ''}`}
                id="unitName"
                name="unitName"
                value={formData.unitName}
                onChange={handleChange}
                placeholder="Enter Unit Name*"
              />
              {errors.unitName && <div className="invalid-feedback">{errors.unitName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="unitType" className="form-label">
                Unit Type:
              </label>
              <input
                type="unitType"
                className={`form-control ${errors.unitType ? 'is-invalid' : ''}`}
                id="unitType"
                name="unitType"
                value={formData.unitType}
                onChange={handleChange}
                placeholder="Enter Unit Type*"
              />
              {errors.unitName && <div className="invalid-feedback">{errors.unitName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label">
                Level:
              </label>
              <input
                type="text"
                className={`form-control ${errors.level ? 'is-invalid' : ''}`}
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                placeholder="Enter Level*"
              />
              {errors.unitName && <div className="invalid-feedback">{errors.unitName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location:
              </label>
              <input
                type="text"
                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter Location*"
              />
              {errors.unitName && <div className="invalid-feedback">{errors.unitName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exposure" className="form-label">
                Exposure:
              </label>
              <input
                type="text"
                className={`form-control ${errors.exposure ? 'is-invalid' : ''}`}
                id="exposure"
                name="exposure"
                value={formData.exposure}
                onChange={handleChange}
                placeholder="Enter Exposure*"
              />
              {errors.unitName && <div className="invalid-feedback">{errors.unitName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">
                Size:
              </label>
              <input
                type="int"
                className={`form-control ${errors.size ? 'is-invalid' : ''}`}
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="Enter Size*"
              />
              {errors.unitName && <div className="invalid-feedback">{errors.unitName}</div>}
            </div>
            <div className="mb-3 digit-section">
              <label htmlFor="bedRoom" className="form-label">
              BedRoom:
              </label>
              <div className="input-group">
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-secondary digit-button"
                    onClick={() => handleBedRoomChange(-1)}
                  >
                    -
                  </button>
                </span>
                <input
                  type="text"
                  className={`form-control ${errors.size ? 'is-invalid' : ''} digit-input`}
                  id="bedRoom"
                  name="bedRoom"
                  value={formData.bedRoom}
                  readOnly
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-secondary digit-button"
                    onClick={() => handleBedRoomChange(1)}
                  >
                    +
                  </button>
                </span>
              </div>
              {errors.bedRoom && <div className="invalid-feedback">{errors.bedRoom}</div>}
            </div>
            <div className="mb-3 digit-section">
              <label htmlFor="bathRoom" className="form-label">
              BathRoom:
              </label>
              <div className="input-group">
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-secondary digit-button"
                    onClick={() => handleBathRoomChange(-1)}
                  >
                    -
                  </button>
                </span>
                <input
                  type="text"
                  className={`form-control ${errors.size ? 'is-invalid' : ''} digit-input`}
                  id="bathRoom"
                  name="bathRoom"
                  value={formData.bathRoom}
                  readOnly
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-secondary digit-button"
                    onClick={() => handleBathRoomChange(1)}
                  >
                    +
                  </button>
                </span>
              </div>
              {errors.bathRoom && <div className="invalid-feedback">{errors.bathRoom}</div>}
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label" htmlFor="parking">
                Parking:
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="parking"
                name="parking"
                checked={formData.parking}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <label className="form-check-label" htmlFor="locker">
                Locker:
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="locker"
                name="locker"
                checked={formData.locker}
                onChange={handleChange}
              />
            </div><div className="mb-3 form-check">
              <label className="form-check-label" htmlFor="balcony">
                Balcony:
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="balcony"
                name="balcony"
                checked={formData.balcony}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;