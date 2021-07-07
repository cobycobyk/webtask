import {useState, useEffect} from 'react';
import './CarDetailPage.css';
import Detail from '../../components/Detail/Detail';
import OtherDetail from '../../components/OtherDetail/OtherDetail';
import Image from '../../components/Image/Image';
import * as carAPI from '../../utilities/car-api';


export default function CarDetailPage() {
  const [car, setCar] = useState([])
  const [image, setImage] = useState('')

  useEffect(function() {
    async function carDetail() {
      const car = await carAPI.getAll();
      setCar(car)
      setImage(car.images[0]?.img)
    }
    carDetail(); 
  },[]);

  const images = car.images?.map(image => {
    return <Image 
    image={image.img}
    setImage={setImage}
    />
  })
  
  return (
    <div className="cardetail">
      <div className="cardetail__head">
        <img className="cardetail__headhero" src={image} alt="" />
        <Detail car={car}/>
      </div>
      <div className="images">{images}</div>
      <div className="cardetail__other">
        <OtherDetail car={car} title={'EXTERIOR'}/>
        <OtherDetail car={car} title={'PERFORMANCE'}/>
      </div>
    </div>
  );
}