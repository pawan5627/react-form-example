// TableView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TableView.css';
import { useNavigate } from 'react-router-dom';

const TableView = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const handleAddFormButtonClick = () => {
    // Navigate to the table view page
    navigate('/form'); // Replace '/table-view' with the actual path to your table view page
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = properties.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="table-view-container">
      <h1 className='text-center'>Form Data Table</h1>
      <button type="button" className="btn btn-primary" onClick={handleAddFormButtonClick}>
        Add
      </button>
      <table className="data-table">
        <thead>
          <tr>
            <th>Developer Name</th>
            <th>Project Name</th>
            <th>Unit Name</th>
            <th>Unit Type</th>
            <th>Level</th>
            <th>Location</th>
            <th>Exposure</th>
            <th>Size</th>
            <th>Bedroom</th>
            <th>Bathroom</th>
            <th>Parking</th>
            <th>Locker</th>
            <th>Balcony</th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map((property, index) => (
            <tr key={index}>
 
            <td className="field-value">{property.developerName}</td>
            <td className="field-value">{property.projectName}</td>
            <td className="field-value">{property.unitName}</td>
            <td className="field-value">{property.unitType}</td>
            <td className="field-value">{property.level}</td>
            <td className="field-value">{property.location}</td>
            <td className="field-value">{property.exposure}</td>
            <td className="field-value">{property.size}</td>
            <td className="field-value">{property.bedRoom}</td>
            <td className="field-value">{property.bathRoom}</td>
            <td className="field-value">{property.parking.toString()}</td>
            <td className="field-value">{property.locker.toString()}</td>
            <td className="field-value">{property.balcony.toString()}</td>
            </tr>
          ))}
          <tr>
          </tr>
        </tbody>
      </table>
      <div className="row">
  <div className="col">
    <div className="items-per-page">
      <label>Items per page: </label>
      <input type="number" min="1" value={itemsPerPage} onChange={handleItemsPerPageChange} className='items-per-page-input'/>
    </div>
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div><div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div><div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div><div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col">
    {/* This empty div takes up space between items-per-page and pagination */}
  </div>
  <div className="col text-end">
    <div className="pagination">
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= properties.length}>
        Next
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default TableView;
