import './Image.css';

export default function Image({image, setImage}) {
  return (
    <div className="image">
      <img onClick={() => setImage(image)} src={image} alt="" />
      &nbsp;
    </div>
  )
}