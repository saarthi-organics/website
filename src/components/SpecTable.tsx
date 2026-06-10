export default function SpecTable() {
  const specs = [
    { parameter: "Total Soluble Solids (Brix)", limit: "82.0% - 88.0%", method: "Refractometric at 20°C" },
    { parameter: "Total Reducing Sugars (TRS)", limit: "45.0% - 50.0% min", method: "Lane & Eynon Method" },
    { parameter: "Sulfated Ash Content", limit: "12.0% - 15.0% max", method: "Gravimetric Calcination" },
    { parameter: "pH Value (1:1 aqueous)", limit: "4.5 - 5.5", method: "Potentiometric" },
    { parameter: "Specific Gravity / Density", limit: "1.42 - 1.47 g/ml", method: "Hydrometer / Pycnometer" },
    { parameter: "Physical Appearance", limit: "Dark Brown / Black Viscous", method: "Visual Examination" },
    { parameter: "Apparent Viscosity", limit: "3000 - 5000 cP at 25°C", method: "Brookfield Viscometer" },
  ];

  return (
    <div className="spec-container">
      <div className="spec-table-wrapper">
        <table className="spec-table">
          <thead>
            <tr>
              <th>Technical Parameter</th>
              <th>Industrial Grade Limits</th>
              <th>Standard Testing Method</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, index) => (
              <tr key={index}>
                <td style={{ fontWeight: 600 }}>{spec.parameter}</td>
                <td className="spec-highlight">{spec.limit}</td>
                <td style={{ color: "var(--text-secondary-light)", fontSize: "0.9rem" }}>{spec.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)' }}>
          * Typical Certificate of Analysis (COA) is issued for every dispatch tanker batch. Lab tested at sourcing point.
        </p>
        <a 
          href="/blackstrap-molasses" 
          className="btn-primary" 
          style={{ fontSize: '0.85rem', padding: '10px 20px', borderRadius: '4px' }}
        >
          Download Full Technical Data Sheet (TDS)
        </a>
      </div>
    </div>
  );
}
