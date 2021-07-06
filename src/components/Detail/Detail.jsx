import './Detail.css';
import MailIcon from '@material-ui/icons/Mail';

export default function Detail({car}) {
  return (
    <div className="detail">
      <h1>{car.name}</h1>
      <h7>Year</h7>
      <h4>{car.year}</h4>
      <h7>Price Range</h7>
      <h4>{car.priceLow} - {car.priceHigh}</h4>
      <h7>Item Number: #{car._id?.slice(11,16)}</h7>
      <h7>VIN: {car.vin}</h7>
      <div className="detail__share">
        <h8>Share this car</h8>
        <MailIcon className="detail__icon"/>
      </div>
      <div className="detail__views">
        <div className="detail__viewsoption">
          <h7>Views</h7>
          <h4>37</h4>
        </div>
        <div className="detail__viewsoption">
          <h7>Saves</h7>
          <h4>20</h4>
        </div>
        <div className="detail__viewsoption">
          <h7>Shares</h7>
          <h4>15</h4>
        </div>
      </div>
    </div>
  )
}