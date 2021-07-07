import './OtherDetail.css';

export default function OtherDetail({car, title}) {
  return (
    <div className="otherd">
      <div className="otherd__title">{title}</div>
      <div className="otherd__row">
        <div className="otherd__option">
          Cylinders
        </div>
        <div className="otherd__inset">
          {car.cylinders}
        </div>
      </div>
      <hr/>
      <div className="otherd__row">
        <div className="otherd__option">
          City MPG
        </div>
        <div className="otherd__inset">
          {car.citympg}
        </div>
      </div>
      <hr/>
      <div className="otherd__row">
        <div className="otherd__option">
          Highway MPG
        </div>
        <div className="otherd__inset">
          {car.highwaympg}
        </div>
      </div>
      <hr/>
      <div className="otherd__row">
        <div className="otherd__option">
          Engine
        </div>
        <div className="otherd__inset">
          {car.engine}
        </div>
      </div>
    </div>
  )
}