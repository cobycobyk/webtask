import './Detail.css';
import MailIcon from '@material-ui/icons/Mail';

export default function Detail({car}) {
  return (
    <div className="detail">
      <div className="detail__left">
        <h4 className="detail__hero">{car.name}</h4>
        <h4 className="detail__option">Year</h4>
        <h4 className="detail__insert">{car.year}</h4>
        <h4 className="detail__option">Price Range</h4>
        <h4 className="detail__insert">${car.priceLow} - ${car.priceHigh}</h4>
        <h4 className="detail__option">Mileage</h4>
        <h4 className="detail__insert">{car.mileage} miles</h4>
      </div>
      <div className="detail__right">
        <div>&nbsp;</div>
        <h4 className="detail__option">Item Number: #{car._id?.slice(11,16)}</h4>
        <h4 className="detail__option">VIN: {car.vin}</h4>
        <div className="detail__share">
          <h4>Share this car</h4>
          <MailIcon className="detail__icon"/>
        </div>
        <div className="detail__views">
          <div className="detail__viewsoption">
            <h4 className="detail__option">Views</h4>
            <h4 className="detail__count" style={{color: "var(--green)"}}>37</h4>
          </div>
          <div className="detail__viewsoption hidden">
            <h4 className="detail__option">Saves</h4>
            <h4 className="detail__count" style={{color: "var(--green)"}}>20</h4>
          </div>
          <div className="detail__viewsoption hidden">
            <h4 className="detail__option">Shares</h4>
            <h4 className="detail__count" style={{color: "var(--green)"}}>15</h4>
          </div>
      </div>
      </div>
    </div>
  )
}