const text = 'WELCOME ITZFIZZ'

export default function Headline() {
  return (
    <div className="headline" data-headline>
      <h1 aria-label={text}>
        {text.split('').map((letter, index) => (
          <span
            className="headline-letter"
            key={index}
            aria-hidden="true"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>
    </div>
  )
}