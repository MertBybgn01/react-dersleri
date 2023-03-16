import Course from './component/Course';

import { useState } from 'react';

function getRandomCourse() {
  const courseArray = ['Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index}  number={index}  courseName={course} />;
  });
  return (
    <div className=" container mx-auto px-6 ">
      <div className=' w-full flex justify-center items-center h-20'>
        <button className=' w-1/4 bg-blue-800   rounded-2xl  h-10 text-white ' onClick={handleClick}>Kurs Ekle</button>
      </div>
      <div className='flex flex-wrap'>{courseList}</div>
    </div>
  );
}

export default App;
