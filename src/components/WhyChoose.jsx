import React, { useState } from 'react';

/* ── Geometry & Math ── */
const DEG = Math.PI / 180;
const N = 6;

const SVG_SIZE = 920;
const CX = SVG_SIZE / 2; // 460
const CY = SVG_SIZE / 2; // 460

const R_INNER = 95;   // Center hub radius
const R_OUTER = 220;  // Main wheel outer radius (Badge sits on this line)
const R_BADGE = 20;   // Badge radius
const R_PHOTO = 360;  // Photo circle center
const R_IMG   = 46;   // Photo radius (92px diameter)

// Midpoint angle of sector i: -60°, 0°, 60°, 120°, 180°, 240°
function getSectorMidAngle(i) {
  return ((360 / N) * i - 60) * DEG;
}

// Sector i polygon path (from angle - 30° to angle + 30°)
function slicePath(i) {
  const mid = getSectorMidAngle(i);
  const a1 = mid - 30 * DEG;
  const a2 = mid + 30 * DEG;

  const x1_in = +(CX + R_INNER * Math.cos(a1)).toFixed(2);
  const y1_in = +(CY + R_INNER * Math.sin(a1)).toFixed(2);
  const x2_in = +(CX + R_INNER * Math.cos(a2)).toFixed(2);
  const y2_in = +(CY + R_INNER * Math.sin(a2)).toFixed(2);

  const x1_out = +(CX + R_OUTER * Math.cos(a1)).toFixed(2);
  const y1_out = +(CY + R_OUTER * Math.sin(a1)).toFixed(2);
  const x2_out = +(CX + R_OUTER * Math.cos(a2)).toFixed(2);
  const y2_out = +(CY + R_OUTER * Math.sin(a2)).toFixed(2);

  return `M ${x1_in} ${y1_in}
          L ${x1_out} ${y1_out}
          A ${R_OUTER} ${R_OUTER} 0 0 1 ${x2_out} ${y2_out}
          L ${x2_in} ${y2_in}
          A ${R_INNER} ${R_INNER} 0 0 0 ${x1_in} ${y1_in} Z`;
}

// Divider lines between sectors (at -90°, -30°, 30°, 90°, 150°, 210°)
function dividerLine(i) {
  const a = (60 * i - 90) * DEG;
  return {
    x1: +(CX + R_INNER * Math.cos(a)).toFixed(2),
    y1: +(CY + R_INNER * Math.sin(a)).toFixed(2),
    x2: +(CX + R_OUTER * Math.cos(a)).toFixed(2),
    y2: +(CY + R_OUTER * Math.sin(a)).toFixed(2),
  };
}

// Connector line extending from badge (R_OUTER + R_BADGE) to photo
function connectorLine(i) {
  const a = getSectorMidAngle(i);
  const rStart = R_OUTER + R_BADGE + 4;
  const rEnd   = R_PHOTO - R_IMG - 4;
  return {
    x1: +(CX + rStart * Math.cos(a)).toFixed(2),
    y1: +(CY + rStart * Math.sin(a)).toFixed(2),
    x2: +(CX + rEnd * Math.cos(a)).toFixed(2),
    y2: +(CY + rEnd * Math.sin(a)).toFixed(2),
  };
}

// Badge center coordinate on the wheel rim
function badgePos(i) {
  const a = getSectorMidAngle(i);
  return {
    x: +(CX + R_OUTER * Math.cos(a)).toFixed(2),
    y: +(CY + R_OUTER * Math.sin(a)).toFixed(2),
  };
}

// Photo center coordinate
function photoPos(i) {
  const a = getSectorMidAngle(i);
  return {
    x: +(CX + R_PHOTO * Math.cos(a)).toFixed(2),
    y: +(CY + R_PHOTO * Math.sin(a)).toFixed(2),
  };
}

// Text label position: DEAD CENTER in the middle of the sector ring
function labelPos(i) {
  const a = getSectorMidAngle(i);
  const rLabel = (R_INNER + R_OUTER) / 2; // 157.5px (midway between inner and outer circle)
  return {
    x: +(CX + rLabel * Math.cos(a)).toFixed(2),
    y: +(CY + rLabel * Math.sin(a)).toFixed(2),
  };
}

/* ── 6 Items Data ── */
const items = [
  { num: '01', line1: 'Expertise',       line2: 'dermatologique',   img: '/images/why/why-expertise.jpg' },
  { num: '02', line1: 'Diagnostic',      line2: 'précis',           img: '/images/why/why-diagnostic.jpg' },
  { num: '03', line1: 'Technologies',    line2: 'modernes',         img: '/images/why/why-tech.jpg' },
  { num: '04', line1: 'Cabinet',         line2: 'confortable',      img: '/images/why/why-comfort.jpg' },
  { num: '05', line1: 'Accompagnement', line2: 'personnalisé',    img: '/images/why/why-care.jpg', fontSize: '9.5px' },
  { num: '06', line1: 'Situation',       line2: 'idéale',           img: '/images/why/why-location.jpg' },
];

export default function WhyChoose() {
  const [active, setActive] = useState(null);

  return (
    <section id="why-choose" className="why-section animate-section">
      <div className="container">

        <div className="why-header">
          <h2 className="section-title">Pourquoi choisir le cabinet du Dr Samia Mrabat ?</h2>
          <p className="section-subtitle">
            Une approche médicale rigoureuse, un environnement chaleureux et des soins
            personnalisés pour chaque patient.
          </p>
        </div>

        {/* ── Interactive Radial Diagram ── */}
        <div className="why-diagram-container">
          <svg
            className="why-diagram-svg"
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Photo circular clip paths */}
              {items.map((_, i) => {
                const p = photoPos(i);
                return (
                  <clipPath key={i} id={`photo-clip-${i}`}>
                    <circle cx={p.x} cy={p.y} r={R_IMG} />
                  </clipPath>
                );
              })}
            </defs>

            {/* 1. 6 Sector Fill Paths */}
            {items.map((_, i) => (
              <path
                key={`slice-${i}`}
                d={slicePath(i)}
                fill={active === i ? 'rgba(27,122,138,0.08)' : 'transparent'}
                style={{ transition: 'fill 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              />
            ))}

            {/* 2. Main Outer Circle (Rim where badges sit) */}
            <circle
              cx={CX}
              cy={CY}
              r={R_OUTER}
              fill="none"
              stroke="#D2E0E4"
              strokeWidth="1.5"
            />

            {/* 3. Exactly 6 Sector Divider Lines */}
            {items.map((_, i) => {
              const d = dividerLine(i);
              return (
                <line
                  key={`div-${i}`}
                  x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2}
                  stroke="#D2E0E4" strokeWidth="1"
                />
              );
            })}

            {/* 4. Connector Lines extending from Badge to Photo */}
            {items.map((_, i) => {
              const c = connectorLine(i);
              const isActive = active === i;
              return (
                <line
                  key={`conn-${i}`}
                  x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                  stroke={isActive ? '#1B7A8A' : '#B2C7CC'}
                  strokeWidth={isActive ? '2' : '1.5'}
                  strokeDasharray="4 3"
                  style={{ transition: 'all 0.3s ease' }}
                />
              );
            })}

            {/* 5. Inner Hub Circle */}
            <circle
              cx={CX}
              cy={CY}
              r={R_INNER}
              fill="white"
              stroke="#D2E0E4"
              strokeWidth="1.5"
            />

            {/* 6. Perfectly Centered SVG Center Hub Text */}
            <text
              x={CX}
              y={CY - 8}
              textAnchor="middle"
              fill="#555555"
              fontSize="12.5"
              fontFamily="Inter, sans-serif"
            >
              <tspan x={CX} dy="0">Votre peau mérite</tspan>
              <tspan x={CX} dy="18">des soins <tspan fontStyle="italic" fontWeight="600" fill="#111111">durables</tspan></tspan>
            </text>

            {/* 7. Centered 2-Line Text Labels */}
            {items.map((item, i) => {
              const lp = labelPos(i);
              const isActive = active === i;
              return (
                <text
                  key={`label-${i}`}
                  x={lp.x}
                  y={lp.y}
                  textAnchor="middle"
                  className={`why-svg-label${isActive ? ' active' : ''}`}
                  style={item.fontSize ? { fontSize: item.fontSize } : undefined}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <tspan x={lp.x} dy="-4">{item.line1}</tspan>
                  <tspan x={lp.x} dy="13">{item.line2}</tspan>
                </text>
              );
            })}

            {/* 8. Number Badges (Sitting EXACTLY on R_OUTER rim line) */}
            {items.map((item, i) => {
              const bp = badgePos(i);
              const isActive = active === i;
              return (
                <g
                  key={`badge-${i}`}
                  className="why-badge-group"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={bp.x}
                    cy={bp.y}
                    r={R_BADGE}
                    fill={isActive ? '#1B7A8A' : 'white'}
                    stroke={isActive ? '#1B7A8A' : '#A4BDC2'}
                    strokeWidth="1.5"
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  <text
                    x={bp.x}
                    y={bp.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isActive ? 'white' : '#555555'}
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                    style={{ transition: 'fill 0.3s ease' }}
                  >
                    {item.num}
                  </text>
                </g>
              );
            })}

            {/* 9. Circular Photos (Outside the wheel) */}
            {items.map((item, i) => {
              const pp = photoPos(i);
              const isActive = active === i;
              return (
                <g
                  key={`photo-${i}`}
                  className="why-photo-group"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={pp.x}
                    cy={pp.y}
                    r={R_IMG + 3}
                    fill="white"
                    stroke={isActive ? '#1B7A8A' : '#E0E8EA'}
                    strokeWidth={isActive ? '3' : '2'}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  <image
                    href={item.img}
                    x={pp.x - R_IMG}
                    y={pp.y - R_IMG}
                    width={R_IMG * 2}
                    height={R_IMG * 2}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#photo-clip-${i})`}
                  />
                </g>
              );
            })}

          </svg>
        </div>

        {/* ── Fallback Grid for Mobile Devices ── */}
        <div className="why-mobile-grid">
          {items.map((item, i) => (
            <div key={i} className="why-mobile-card">
              <div className="why-mobile-photo">
                <img src={item.img} alt={`${item.line1} ${item.line2}`} />
              </div>
              <div className="why-mobile-num">{item.num}</div>
              <p className="why-mobile-title">{item.line1} {item.line2}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
