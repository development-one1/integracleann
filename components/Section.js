const Section = ({ title, children, bgColor = 'transparent' }) => (
    <div style={{ padding: '4rem 2rem', backgroundColor: bgColor }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </div>
  );
  
  export default Section;