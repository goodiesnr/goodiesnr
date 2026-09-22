import img1 from '../assets/z1.jpg';
import img2 from '../assets/z2.jpg';
import img3 from '../assets/z3.jpg';
import img4 from '../assets/z4.jpg';

const items = [
  {
    image: img1,
    title: 'I HANDLE PROJECTS FROM IDEA TO WORKING PRODUCT',
  },
  {
    image: img2,
    title: 'I KNOW WHAT NEEDS TO BE DONE FOR BETTER RESULTS',
  },
  {
    image: img3,
    title: 'I HAVE BUILT SOLUTIONS THAT SOLVE REAL-WORLD PROBLEMS',
  },
  {
    image: img4,
    title: 'I HAVE BEEN BUILDING FOR OVER FIVE YEARS',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="why-section" id="why-me">
      <div className="why-inner">
        <div className="why-header">
          <div>
            
            <h2>WHY WORK WITH ME?</h2>
          </div>
          
        </div>

        <div className="why-grid">
          {items.map(({ image, title }) => (
            <div key={title} className="why-card">
              <div>
                <h3>{title}</h3>
              </div>
              <div className="why-icon">
                  <img src={image} alt={title} />
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
