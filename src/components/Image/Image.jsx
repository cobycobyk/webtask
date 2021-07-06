import './Image.css';

export default function Image({image}) {
  return (
    <div className="image">
      <img src={image} alt="" />
      image
    </div>
  )
}