const items = [
  { text: 'REACT', bright: true },
  { text: 'NODE.JS', bright: false },
  { text: 'GOLANG', bright: true },
  { text: 'MONGODB', bright: false },
  { text: 'SUPABASE', bright: true },
  { text: 'GIT / GITHUB', bright: false },
  { text: 'SEO', bright: true },
  { text: 'WORDPRESS', bright: false },
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
