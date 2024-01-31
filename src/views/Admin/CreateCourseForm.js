import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const CreateCourseForm = () => {
  const [adminId, setAdminId] = useState('');
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    link: '',
    startDate: '',
    endDate: '',
    speaker: '',
    host: '',
  });

  useEffect(() => {
    /// Retrieve adminId from local storage when the component mounts
    const storedAdminId = localStorage.getItem('adminId');
    if (storedAdminId) {
      setAdminId(storedAdminId);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/api/create-course', courseData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.status === 201) {
        const result = response.data;
        console.log('Course created successfully:', result);
      } else {
        console.error('Failed to create course:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
    <h2>Welcome, {adminId}</h2>

    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={courseData.title} onChange={handleChange} />
      </label>

      <label>
        Description:
        <textarea name="description" value={courseData.description} onChange={handleChange} />
      </label>

      <label>
        Link:
        <input type="text" name="link" value={courseData.link} onChange={handleChange} />
      </label>

      <label>
        Start Date:
        <input type="date" name="startDate" value={courseData.startDate} onChange={handleChange} />
      </label>

      <label>
        End Date:
        <input type="date" name="endDate" value={courseData.endDate} onChange={handleChange} />
      </label>

      <label>
        Speaker:
        <input type="text" name="speaker" value={courseData.speaker} onChange={handleChange} />
      </label>

      <label>
        Host:
        <input type="text" name="host" value={courseData.host} onChange={handleChange} />
      </label>

      <button type="submit">Create Course</button>
    </form>
    </div>
  );
};

export default CreateCourseForm;