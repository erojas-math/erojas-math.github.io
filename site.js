const data = window.portfolio;

document.querySelector("#intro").textContent = data.intro;
document.querySelector("#thesis-title").textContent = data.thesis.title;
document.querySelector("#thesis-summary").textContent = data.thesis.summary;
document.querySelector("#research-note").textContent = data.thesis.note;

document.querySelector("#teaching-list").innerHTML = data.teaching.map(item => `
  <article class="timeline-item">
    <div class="timeline-meta"><span>${item.dates}</span></div>
    <div><h3>${item.role}</h3><p class="institution">${item.institution}</p><p>${item.courses}</p></div>
  </article>`).join("");

document.querySelector("#project-list").innerHTML = data.projects.map(item => `
  <article class="project-card">
    <p class="card-label">${item.label}</p><h3>${item.title}</h3><p>${item.text}</p><span class="status">${item.status}</span>
  </article>`).join("");

document.querySelector("#education-list").innerHTML = data.education.map(item => `
  <article class="education-card"><span>${item.year}</span><h3>${item.degree}</h3><p>${item.school}</p><small>${item.detail}</small></article>`).join("");

document.querySelector("#topic-list").innerHTML = data.topics.map(topic => `<span>${topic}</span>`).join("");
