// Each object is one role/card
const roles = [
  {
    title: "Infantry Mortarman (Sergeant, FDC)",
    org: "Oregon Army National Guard — Milton-Freewater, OR",
    dates: "Jun 2021 – Present",
    bullets: [
      "Lead and mentor a mortar section; set training objectives, run AARs.",
      "Run Fire Direction Center ops: compute firing data, issue fire commands.",
      "Coordinate with platoon/company/battalion leadership to align fires with maneuver plans.",
      "Terrain analysis, position selection, PMCS on tubes, baseplates, sights, comms gear.",
      "Enforce ammo/risk protocols; incident-free safety record.",
      "Qualified on HMMWV, FMTV, JLTV, MRZR and more—extend mobility across terrain.",
      "Manage resupply, duty rosters, and operational summaries for higher HQ."
    ]
  },
  {
    title: "Drone Videographer (Freelance)",
    org: "Remote / On-Call",
    dates: "2022 – Present",
    bullets: [
      "Capture and edit aerial video/photography for construction tracking and real-estate marketing; tailor flight plans to FAA guidance.",
      "Coordinate schedules and airspace with project managers and property owners.",
      "Earned ≈$5,000 through repeat engagements and referrals.",
      "Handle post-production color grading and titling; deliver web-ready clips & high-res stills within 48 hours.",
      "Operate DJI Mavic 3 Pro Fly More Combo (triple-camera, 5.1K/4K60)."
    ],
    video: "https://www.youtube.com/embed/REPLACE_WITH_YOUR_REEL_ID"
  },
  {
    title: "Patient Decontamination Technician (On-Call)",
    org: "RRS Patient Decontamination — Boise, ID",
    dates: "Jul 2024 – Present",
    bullets: [
      "Assemble & operate decon showers, negative-pressure shelters, heated water systems under time pressure.",
      "Don/doff Level C PPE; monitor team for heat stress and maintain hygiene zones.",
      "Guide clinical staff through gross/tech decon per OSHA First Receiver & Joint Commission standards.",
      "Monthly inspections, inventory, table-tops to keep sites ready.",
      "Liaise with safety officers, fire departments, HAZMAT teams."
    ]
  },
  {
    title: "Direct Care Support Specialist",
    org: "Community Connections Inc. — Boise, ID",
    dates: "Jul 2024 – Present",
    bullets: [
      "Implement individualized service plans: ADLs, meds, EHR documentation.",
      "Use behavioral strategies to de-escalate and reinforce positive coping.",
      "Coordinate transport to medical/vocational programs; drive wheelchair-equipped vans.",
      "Lead skill-building (budgeting, meals, hygiene) for independence.",
      "Mentor new staff; exceed state training requirements."
    ]
  },
  {
    title: "Security Officer",
    org: "Bend Patrol Services Inc. (Contracted to St. Charles Health System) — Bend, OR",
    dates: "Apr 2023 – Present (FT Apr 2023–Apr 2024; On-Call Apr 2024–Present)",
    bullets: [
      "Patrol emergency, maternity, BH units; monitor CCTV, access logs, duress alarms.",
      "Respond to combative or distressed individuals; apply CIT tactics with clinical teams / law enforcement.",
      "Screen persons/bags at checkpoints; intercept contraband.",
      "Write incident/use-of-force reports to evidentiary standards.",
      "Maintain defensive tactics, comms, fire-panel and BBP protocols; fill short-notice shifts."
    ]
  },
  {
    title: "Office Assistant",
    org: "Western Sage Properties — Redmond, OR",
    dates: "Jan 2020 – Apr 2024",
    bullets: [
      "Managed A/R & A/P cycles; reconciled statements; flagged discrepancies.",
      "Drafted/archived leases and renewals compliant with OR statutes & fair-housing.",
      "First contact for prospects: explain features, schedule showings, coordinate screenings.",
      "Built relationships with insurers/utilities/municipal offices; sped vacancy turns.",
      "Standardized passwords/MFA; educated owners on phishing.",
      "On-boarded maintenance staff; screened résumés, set interviews.",
      "Maintained SharePoint file system; cut tax/audit retrieval time."
    ]
  },
  {
    title: "Construction Laborer",
    org: "Western Sage Properties — Redmond, OR",
    dates: "Sep 2018 – Apr 2024",
    bullets: [
      "Re-roofed asphalt, metal, membrane systems per manufacturer specs.",
      "Primed & elastomeric-coated flat roofs to extend service life.",
      "Installed batt & spray-foam insulation; maintained air barriers.",
      "Drywall hang/tape/mud/texture to paint-ready finishes.",
      "Laid laminate/tile/hardwood with proper barriers/underlayments.",
      "Poured/finished concrete patios/sidewalks/pads; managed slump/cure.",
      "Framed decks/fences; enforced OSHA fall-protection & PPE.",
      "Coordinated with electricians/plumbers/inspectors to meet CO deadlines."
    ]
  },
  {
    title: "Order Fulfillment Associate",
    org: "The Home Depot — Redmond, OR",
    dates: "May 2022 – Jul 2022",
    bullets: [
      "Picked/staged online orders via WMS; preserved inventory integrity.",
      "Certified on pallet jacks/forklifts; moved oversized goods incident-free.",
      "Coordinated with customers to adjust pickup windows.",
      "Assisted cycle counts & shelf-stocking; flagged discrepancies."
    ]
  }
];

// Render to DOM
const workSection = document.querySelector(".cards");
workSection.innerHTML = roles.map(r => {
  const bullets = r.bullets.map(b => `<li>${b}</li>`).join("");
  const video = r.video ? `
    <div class="video">
      <iframe src="${r.video}" title="${r.title}" loading="lazy" allowfullscreen></iframe>
    </div>` : "";
  return `
    <article class="card">
      <h3>${r.title}</h3>
      <p class="org">${r.org}</p>
      <p class="dates">${r.dates}</p>
      <ul>${bullets}</ul>
      ${video}
    </article>
  `;
}).join("");
