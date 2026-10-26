export default function ScrollScene() {
  return (
    <div className="scroll-scene" aria-hidden="true">
      <div className="arrow-trail" data-arrow-trail />
      <div className="arrowhead" data-arrowhead />
      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
      </div>
    </div>
  )
}