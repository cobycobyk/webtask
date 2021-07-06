import {useState, useEffect} from 'react';
import './CarDetailPage.css';
import Detail from '../../components/Detail/Detail';
import Image from '../../components/Image/Image';
import * as carAPI from '../../utilities/car-api';


export default function CarDetailPage() {
  const [car, setCar] = useState([])
  const [image, setImage] = useState(null)

  useEffect(function() {
    async function carDetail() {
      const car = await carAPI.getAll();
      setCar(car)
      setImage(car.images[0]?.img)
    }
    carDetail(); 
  },[]);

  const images = car.images?.map(image => {
    return <Image image={image}/>
  })
  
  return (
    <div className="cardetail">
      <div className="cardetail__head">
        <img className="cardetail__headhero" src={image} alt="" />
        <Detail car={car}/>
      </div>
      <div>{images}</div>
      <h1>{car.name}</h1>
      {/* image */}
      {/* images */}
      {/* otherdetails */}
    </div>
  );
}