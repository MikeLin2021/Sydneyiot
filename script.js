const projects = {
  ecg: {
    status: 'CONNECTED CARDIAC MONITORING', title: 'Wearable ECG and AI',
    description: 'A lightweight wireless ECG patch and connected analysis pathway designed to support long-term cardiac monitoring—from signal acquisition to mobile access and cloud-based analysis.',
    focus: 'Continuous physiological monitoring', system: 'Sensor · Bluetooth · Mobile · Cloud',
    link: 'https://www.sydneyiot.com/ecg-monitoring-module', label: 'ECG / LIVE SIGNAL', metricOne: 'Patch → phone', metricTwo: 'Connected insight',
    path: 'M0 112 L66 112 L82 102 L94 115 L110 112 L121 74 L132 160 L146 108 L167 112 L208 112 L224 104 L238 116 L250 112 L260 76 L271 158 L285 108 L305 112 L350 112 L364 103 L378 116 L389 112 L400 73 L412 162 L425 108 L448 112 L490 112 L505 104 L518 116 L531 112 L542 78 L554 157 L569 109 L620 112'
  },
  hospital: {
    status: 'END-TO-END HEALTHCARE IOT', title: 'Smart Hospital Platform',
    description: 'A complete IoT pathway connecting environmental and operational sensors, edge networks, gateway data forwarding, cloud services, databases and web or mobile visualisation.',
    focus: 'Connected clinical environments', system: 'Sensors · Edge · MQTT · Cloud',
    link: 'https://www.sydneyiot.com/smart-hospital-platform', label: 'IOT / NETWORK FLOW', metricOne: 'Multi-protocol', metricTwo: 'Real-time view',
    path: 'M0 150 C48 150 60 80 110 80 S170 160 220 150 S280 55 330 85 S390 175 445 120 S520 70 620 75'
  },
  egate: {
    status: 'AWARD-WINNING HOSPITAL PILOT', title: 'COVID-19 eGate',
    description: 'An integrated hospital entry-screening pathway combining QR-based risk screening, non-contact temperature sensing and near-real-time analytics at The Children’s Hospital at Westmead.',
    focus: 'Safer, more efficient screening', system: 'QR · Thermal sensing · Analytics',
    link: 'https://www.sydneyiot.com/covid-19-egate-screening-system', label: 'EGATE / SCREENING FLOW', metricOne: '1,500+ users', metricTwo: 'Hospital pilot',
    path: 'M0 145 L85 145 L85 88 L170 88 L170 127 L265 127 L265 62 L352 62 L352 113 L450 113 L450 74 L540 74 L540 103 L620 103'
  }
};

const tabs = [...document.querySelectorAll('[role="tab"]')];
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => item.setAttribute('aria-selected', String(item === tab)));
  const project = projects[tab.dataset.project];
  document.querySelector('#project-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('#project-status').textContent = project.status;
  document.querySelector('#project-title').textContent = project.title;
  document.querySelector('#project-description').textContent = project.description;
  document.querySelector('#project-focus').textContent = project.focus;
  document.querySelector('#project-system').textContent = project.system;
  document.querySelector('#project-link').href = project.link;
  document.querySelector('#display-label').textContent = project.label;
  document.querySelector('#metric-one').textContent = project.metricOne;
  document.querySelector('#metric-two').textContent = project.metricTwo;
  const signal = document.querySelector('#signal-path');
  signal.setAttribute('d', project.path);
  signal.style.animation = 'none';
  requestAnimationFrame(() => { signal.style.animation = ''; });
}));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold: .12});
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
