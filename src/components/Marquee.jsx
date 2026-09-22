const items = [
  { text: 'REACT & REACT NATIVE', bright: true },
  { text: 'NODE.JS & EXPRESS', bright: false },
  { text: 'GOLANG', bright: true },
  { text: 'MONGODB', bright: false },
  { text: 'BROCHURE & BUSINESS SITES', bright: true },
  { text: 'GIT / GITHUB', bright: false },
];

function Sequence() {
  return (
    <div className="marquee-seq">
      {items.map(({ text, bright }) => (
        <span key={text} style={{ display: 'contents' }}>
          <span className={bright ? 'bright' : 'dim'}>{text}</span>
          <span className="dot">&bull;</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-strip">
        <Sequence />
        <Sequence />
      </div>
    </section>
  );
}
