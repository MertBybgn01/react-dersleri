import Angular from '../images/angular.jpg';
import Bootstrap from '../images/bootstrap5.png';
import Ccsharp from '../images/ccsharp.png';
import Kompleweb from '../images/kompleweb.jpg';

const coursaMap ={
  Angular:Angular,
  Bootstrap:Bootstrap,
  Ccsharp:Ccsharp,
  KompleWeb:Kompleweb
}
function Course({ courseName, number }) {
  console.log(Angular);
  console.log(courseName , number );
  return (
    <div className='w-[350px]   p-2 m-2 h-auto border border-solid  border-gray-500' >
      <img className='w-[350px]' src={coursaMap[courseName]} alt={number} />
    </div>
  );
}

export default Course;
