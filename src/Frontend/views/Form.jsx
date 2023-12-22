import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormStyle.css';
import FormItem from '../components/FormItem';
import FormNumberInput from '../components/FormNumberInput';
import FormCheckBox from '../components/FormCheckBox';
import { useNavigate } from 'react-router-dom';

function Form() {
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
  const navigate = useNavigate()
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
      bedRoom:parseInt(amount),
    }));
  };

  const handleBathRoomChange = (amount) => {
    setFormData((prevData) => ({
      ...prevData,
      bathRoom: parseInt(amount),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/properties', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });


      if (response.status === 200) {
        console.log('Property saved successfully:', response.data);

        setFormData({
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
        // Reset the form
        //
      } else {
        console.log(response);
        console.error('Error saving property:', response.status);
      }
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };
  const handleTableViewButtonClick = () => {
    // Navigate to the table view page
    navigate('/table-view'); // Replace '/table-view' with the actual path to your table view page
  };
  

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">React Form Example</h1>
          <form onSubmit={handleSubmit}>
            <FormItem
              label="Developer"
              name="developerName"
              value={formData.developerName}
              onChange={handleChange}
              error={errors.developerName}
              
            />
            <FormItem
              label="Projects"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              error={errors.projectName}
            />
            <FormItem
              label="Unit"
              name="unitName"
              value={formData.unitName}
              onChange={handleChange}
              error={errors.unitName}
            />
            <FormItem
              label="Unit Type"
              name="unitType"
              value={formData.unitType}
              onChange={handleChange}
              error={errors.unitType}
            />
            <FormItem
              label="Level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              error={errors.level}
            />
            <FormItem
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
            />
            <FormItem
              label="Exposure"
              name="exposure"
              value={formData.exposure}
              onChange={handleChange}
              error={errors.exposure}
            />
            <FormItem
              label="Size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              error={errors.size}
            />
            <FormNumberInput
              label="BedRoom"
              name="bedRoom"
              value={formData.bedRoom}
              onChange={handleBedRoomChange}
              error={errors.bedRoom}
            />
            <FormNumberInput
              label="BathRoom"
              name="bathRoom"
              value={formData.bathRoom}
              onChange={handleBathRoomChange}
              error={errors.bathRoom}
            />
            <FormCheckBox
              label="Parking"
              name="parking"
              value={formData.parking}
              onChange={handleChange}
              error={errors.parking}
            />
              <FormCheckBox
              label="Locker"
              name="locker"
              value={formData.locker}
              onChange={handleChange}
              error={errors.locker}
            />
            <FormCheckBox
              label="Balcony"
              name="balcony"
              value={formData.balcony}
              onChange={handleChange}
              error={errors.balcony}
            />
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col text-end">
                <button type="button" className="btn btn-secondary" onClick={handleTableViewButtonClick}>
                  view
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;