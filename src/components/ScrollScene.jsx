export default function ScrollScene() {
  return (
    <div className="scroll-scene">
      <div className="scene-label scene-label-left">
        <span>01 / DESIGN</span>
        <span>Built to stand out</span>
      </div>

      <div className="car-container" data-car>
        <div className="car-glow" />
        <img
          className="car-image"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85"
          alt="Porsche sports car"
        />
      </div>

      <div className="scene-label scene-label-right">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>

      <div className="scene-index">ITZ / 001</div>
    </div>
  )
}