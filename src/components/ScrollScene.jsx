export default function ScrollScene() {
  return (
    <div className="scroll-scene">
      <div className="car-container" data-car>
        <img
          className="car-image"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85"
          alt="Sports car"
        />
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>
    </div>
  )
}