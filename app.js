const translations = {
  es: {
    skip: "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.resume": "GitHub",
    "nav.menu": "Menú",
    "hero.hi": "Hola! Mi nombre es",
    "hero.role": "Desarrollador de software",
    "hero.lead": "Construyo productos web de punta a punta: interfaces claras, APIs sólidas y soluciones que resuelven problemas reales. Escribo código limpio, reutilizable y con criterio, usando React, Python y FastAPI.",
    "hero.ctaContact": "Decime hola",
    "about.title": "Sobre mí",
    "about.p1": "Soy técnico en Análisis de Sistemas y desarrollador de software en Salta, Argentina. Me gusta llevar ideas al deploy: tomo la iniciativa, documento lo que construyo y busco siempre el siguiente paso.",
    "about.p2": "Trabajo productos orientados a negocio, desde landings hasta sistemas con roles, APIs y bases de datos. También programo cosas para uso propio, por hobby o por utilidad.",
    "about.p3": "Algunas de las tecnologías con las que me formé y trabajo:",
    "exp.title": "Experiencia",
    "exp.tab1": "Formación",
    "exp.tab2": "Freelance",
    "exp.formacionTitle": "Tec. Superior en Analista de Sistemas",
    "exp.formacionDate": "En curso · Salta, Argentina",
    "exp.formacion1": "Desarrollo web, bases de datos y análisis de sistemas.",
    "exp.formacion2": "Prácticas profesionalizantes con metodologías ágiles (Scrum y Kanban).",
    "exp.formacion3": "Proyectos académicos en HTML, CSS, JavaScript, React, Python y C++.",
    "exp.freeTitle": "Desarrollador freelance",
    "exp.freeDate": "Abierto a proyectos · Remoto",
    "exp.free1": "Landings, web apps, APIs y MVPs de punta a punta.",
    "exp.free2": "Interfaces claras, documentación y entrega continua.",
    "exp.free3": "Disponible para freelance y oportunidades formales remotas.",
    "exp.boxlyTitle": "Sistema de gestión · Boxly",
    "exp.boxly1": "Clientes, órdenes de trabajo, inventario, turnos y roles.",
    "exp.boxly2": "Stack React, FastAPI y PostgreSQL.",
    "exp.boxly3": "Producto pensado para el día a día de un taller mecánico.",
    "exp.arikivTitle": "Auditoría vial · ViArkiv",
    "exp.arikiv1": "App mobile-first de reportes inmutables para RN 51 / Eje del Litio.",
    "exp.arikiv2": "Reportes offline, IA y registro en blockchain.",
    "exp.arikiv3": "React + FastAPI, deploy en Railway.",
    "projects.title": "Proyectos",
    "projects.featured": "Proyecto destacado",
    "projects.boxly": "Sistema de gestión para taller mecánico: clientes, órdenes, inventario, turnos y roles.",
    "projects.arikiv": "App mobile-first de auditoría vial inmutable: reportes offline, IA y blockchain.",
    "projects.vineria": "Landing institucional para una vinería de Salta: catálogo, ubicación y contacto.",
    "projects.noapay": "SDK de pagos y dashboard asociado para un proveedor de cobros.",
    "projects.caja": "Proyecto en C++ para practicar lógica, estructuras y control de acceso.",
    "projects.ecom": "Proyecto final de tienda online: catálogo, interfaz y flujo de compra.",
    "other.title": "Más proyectos",
    "contact.eyebrow": "¿Y ahora?",
    "contact.title": "Decime hola",
    "contact.lead": "¿Tenés un proyecto, una idea o una vacante? Escribime y te respondo apenas vea el mensaje.",
    "form.name": "Nombre completo *",
    "form.namePh": "Ej. Juan Pérez",
    "form.email": "Email *",
    "form.emailPh": "ej. hola@correo.com",
    "form.phone": "Teléfono *",
    "form.phonePh": "ej. 387000000",
    "form.city": "Residencia *",
    "form.cityPh": "Salta Capital",
    "form.reason": "Motivo *",
    "form.reasonEmpty": "-- Seleccioná una opción --",
    "form.reasonGeneral": "Consulta general",
    "form.reasonWork": "Proyecto / trabajo",
    "form.reasonOther": "Otro",
    "form.message": "Mensaje *",
    "form.messagePh": "Contame en qué puedo ayudarte",
    "form.terms": "Acepto los términos y condiciones *",
    "form.submit": "Enviar",
    "footer.credit": "Diseño inspirado en",
    "theme.toLight": "Cambiar a modo claro",
    "theme.toDark": "Cambiar a modo oscuro",
    "page.title": "Antonio Chocobar · Desarrollador de software",
    "page.contactTitle": "Contacto · Antonio Chocobar"
  },
  en: {
    skip: "Skip to content",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "GitHub",
    "nav.menu": "Menu",
    "hero.hi": "Hello! My name is",
    "hero.role": "Software developer",
    "hero.lead": "I build web products end to end: clear interfaces, solid APIs, and solutions that solve real problems. I write clean, reusable code with intent, using React, Python, and FastAPI.",
    "hero.ctaContact": "Say hi",
    "about.title": "About me",
    "about.p1": "I'm a systems-analysis student and software developer in Salta, Argentina. I like taking ideas to deploy: I take initiative, document what I build, and always look for the next step.",
    "about.p2": "I work on business-oriented products, from landings to systems with roles, APIs, and databases. I also build things for my own use, as a hobby or a utility.",
    "about.p3": "Some of the technologies I've trained and worked with:",
    "exp.title": "Experience",
    "exp.tab1": "Education",
    "exp.tab2": "Freelance",
    "exp.formacionTitle": "Higher Technician in Systems Analysis",
    "exp.formacionDate": "In progress · Salta, Argentina",
    "exp.formacion1": "Web development, databases, and systems analysis.",
    "exp.formacion2": "Professional practice with agile methods (Scrum and Kanban).",
    "exp.formacion3": "Academic projects in HTML, CSS, JavaScript, React, Python, and C++.",
    "exp.freeTitle": "Freelance developer",
    "exp.freeDate": "Open to projects · Remote",
    "exp.free1": "Landings, web apps, APIs, and MVPs end to end.",
    "exp.free2": "Clear interfaces, documentation, and continuous delivery.",
    "exp.free3": "Open to freelance work and remote full-time roles.",
    "exp.boxlyTitle": "Workshop management · Boxly",
    "exp.boxly1": "Clients, work orders, inventory, appointments, and roles.",
    "exp.boxly2": "React, FastAPI, and PostgreSQL stack.",
    "exp.boxly3": "A product built for the day-to-day of a mechanic shop.",
    "exp.arikivTitle": "Road audit · ViArkiv",
    "exp.arikiv1": "Mobile-first immutable reports for RN 51 / Lithium Corridor.",
    "exp.arikiv2": "Offline reports, AI, and blockchain records.",
    "exp.arikiv3": "React + FastAPI, deployed on Railway.",
    "projects.title": "Projects",
    "projects.featured": "Featured project",
    "projects.boxly": "Workshop management system: clients, work orders, inventory, appointments, and roles.",
    "projects.arikiv": "Mobile-first immutable road-audit app: offline reports, AI, and blockchain.",
    "projects.vineria": "Institutional landing for a Salta winery: catalog, location, and contact.",
    "projects.noapay": "Payment-provider SDK and companion dashboard.",
    "projects.caja": "C++ project to practice logic, data structures, and access control.",
    "projects.ecom": "Final-project online store: catalog, interface, and purchase flow.",
    "other.title": "Other projects",
    "contact.eyebrow": "What's next?",
    "contact.title": "Say hi",
    "contact.lead": "Have a project, an idea, or a role? Write to me and I'll reply as soon as I see it.",
    "form.name": "Full name *",
    "form.namePh": "e.g. Jane Perez",
    "form.email": "Email *",
    "form.emailPh": "e.g. hello@email.com",
    "form.phone": "Phone *",
    "form.phonePh": "e.g. 387000000",
    "form.city": "City *",
    "form.cityPh": "Salta, Argentina",
    "form.reason": "Reason *",
    "form.reasonEmpty": "-- Choose an option --",
    "form.reasonGeneral": "General inquiry",
    "form.reasonWork": "Project / job",
    "form.reasonOther": "Other",
    "form.message": "Message *",
    "form.messagePh": "Tell me how I can help",
    "form.terms": "I accept the terms and conditions *",
    "form.submit": "Send",
    "footer.credit": "Design inspired by",
    "theme.toLight": "Switch to light mode",
    "theme.toDark": "Switch to dark mode",
    "page.title": "Antonio Chocobar · Software developer",
    "page.contactTitle": "Contact · Antonio Chocobar"
  }
};

const root = document.documentElement;
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const langButtons = document.querySelectorAll("[data-lang-btn]");

function currentLang() {
  return root.getAttribute("lang") === "en" ? "en" : "es";
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.es;
  root.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  langButtons.forEach((btn) => {
    const active = btn.getAttribute("data-lang-btn") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  const isContact = document.body.querySelector(".contact-page");
  document.title = isContact ? dict["page.contactTitle"] : dict["page.title"];
  updateThemeLabel();
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    theme === "light" ? "#f6f0fc" : "#0a0814"
  );
  if (themeIcon) {
    themeIcon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
  updateThemeLabel();
}

let themeBusy = false;

function themeOrigin(event) {
  const source = event?.currentTarget || themeToggle;
  if (source?.getBoundingClientRect) {
    const rect = source.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }
  return {
    x: event?.clientX ?? window.innerWidth / 2,
    y: event?.clientY ?? window.innerHeight / 2
  };
}

function revealTheme(theme, event) {
  if (themeBusy) return;

  const { x, y } = themeOrigin(event);
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  ) + 24;

  themeBusy = true;
  root.style.setProperty("--vt-x", `${x}px`);
  root.style.setProperty("--vt-y", `${y}px`);
  root.style.setProperty("--vt-r", `${Math.ceil(endRadius)}px`);

  const burst = document.createElement("span");
  burst.className = "theme-burst";
  burst.setAttribute("aria-hidden", "true");
  burst.style.setProperty("--burst-bg", theme === "light" ? "#f6f0fc" : "#0a0814");
  document.body.appendChild(burst);

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    applyTheme(theme);
    burst.remove();
    themeBusy = false;
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      burst.classList.add("is-on");
    });
  });

  burst.addEventListener("transitionend", (ev) => {
    if (ev.propertyName === "clip-path") finish();
  });
  window.setTimeout(finish, 850);
}

function updateThemeLabel() {
  if (!themeToggle) return;
  const theme = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  const dict = translations[currentLang()];
  themeToggle.setAttribute("aria-label", theme === "dark" ? dict["theme.toLight"] : dict["theme.toDark"]);
}

function closeMenu() {
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

function initJobs() {
  const tabs = document.querySelectorAll("[data-job]");
  const panels = document.querySelectorAll("[data-job-panel]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.getAttribute("data-job");
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        panel.hidden = panel.getAttribute("data-job-panel") !== id;
      });
    });
  });
}

applyLanguage(currentLang());
applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
initJobs();

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang-btn")));
});

themeToggle?.addEventListener("click", (event) => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  revealTheme(next, event);
});

menuToggle?.addEventListener("click", () => {
  const open = !nav?.classList.contains("is-open");
  nav?.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

if (window.AOS) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.AOS.init({
    duration: 750,
    easing: "ease-out-cubic",
    once: true,
    offset: 70,
    disable: reduceMotion
  });
}
