const projects = [
  {
    title: "Drone Videography",
    desc: "FAA Part 107 flights for wedding, construction and real-estate clients; 48-hour edits.",
    link: "https://youtu.be/yourReelID"
  },
  {
    title: "Infantry Sergeant & FDC",
    desc: "Lead mortar squad, coordinate fire missions, mentor 7 soldiers.",
    link: "#"
  },
  {
    title: "Rapid Response Decon Tech",
    desc: "On-call HazMat decontamination drills and real events.",
    link: "#"
  },
  {
    title: "Direct Care Specialist",
    desc: "In-home support for adults with developmental disabilities.",
    link: "#"
  }
];

const container = document.querySelector(".cards");
container.innerHTML = projects.map(p => `
  <article class="card">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">View&nbsp;More →</a>
  </article>
`).join("");
