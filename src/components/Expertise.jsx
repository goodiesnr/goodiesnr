const cards = [
  {
    title: 'PRODUCTS ENGINEERING',
    desc: "I architect and build clean, secure, full-stack applications built to scale effortlessly and handle real-world complexity.",
    tags: ['React', 'Node.js', 'Golang', 'MongoDB', 'Supabase', 'Git/GitHub'],
  },
  {
    title: 'PRODUCT MANAGEMENT',
    desc: 'I take ownership beyond launch guilding user adpotion, resolving live technical issues, and keep application running seamlessly as it scales.',
    tags: ['Cloud hosting', 'User feedback', 'Error tracking', 'Analytics'],
  },
  {
    title: 'BUSINESS & BROCHURE SITES',
    desc: "I construct fast, higly responsive websites designed to elevate your brand authority and convert visitors into potential clients.",
    tags: ['SEO', 'Copywriting', 'Responsive UI', 'Wordpress'],
  },
];

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-inner">
        <div className="expertise-header">
          <div>
            <h2>WHAT I REALLY DO</h2>
          </div>
        </div>

        <div className="expertise-grid">
          {cards.map((c) => (
            <article key={c.n} className="expertise-card">
              <div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <div>
                <span className="mono-label">{c.label}</span>
                <div className="expertise-tags">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
