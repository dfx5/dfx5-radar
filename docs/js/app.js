const USERS_KEY = 'dfx5_radar_users_v2';
const LINKS_KEY = 'dfx5_radar_links_v2';
const PROJECTS_KEY = 'dfx5_radar_projects_v2';
const CURRENT_USER_KEY = 'dfx5_radar_current_user_v2';

const ICON_DFX5 = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>';
const ICON_PROJECT = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>';
const ICON_USER = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>';
const ICON_LOCK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7099" stroke-width="1.8"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
const ICON_EDIT = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
const ICON_TRASH = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>';
const ICON_SEARCH_BIG = '<svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#6b7099" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';

const seedUsers = [
  {id:'u1', name:'Desireé López', email:'desiree@dfx5.com', password:'demo123', isGlobalAdmin:true},
  {id:'u2', name:'Carlos Méndez', email:'carlos@dfx5.com', password:'demo123', isGlobalAdmin:false},
  {id:'u3', name:'Ana Torres', email:'ana@dfx5.com', password:'demo123', isGlobalAdmin:false},
  {id:'u4', name:'Luis Ramírez', email:'luis@dfx5.com', password:'demo123', isGlobalAdmin:false},
];

const seedProjects = [
  {id:'proj1', name:'Cliente Retail Corp', admins:['u1','u2']},
  {id:'proj2', name:'Cliente Banca XYZ', admins:['u3']},
  {id:'proj3', name:'Cliente Salud Plus', admins:['u1','u4']},
];

const seedLinks = [
  // ---- DFX5 (generales, visibles para todo el equipo, solo Admin DFX5 edita) ----
  {id:'d1', scope:'dfx5', category:'AWS Console', name:'AWS Console — Cuenta Organización DFX5', url:'https://console.aws.amazon.com/', desc:'Cuenta raíz de AWS Organizations. Gestiona las cuentas de todos los clientes desde aquí.'},
  {id:'d2', scope:'dfx5', category:'Documentación', name:'Wiki interna DFX5', url:'https://confluence.dfx5.internal/', desc:'Documentación de procesos internos, onboarding y políticas del equipo.'},
  {id:'d3', scope:'dfx5', category:'Otro', name:'Slack — Workspace DFX5', url:'https://dfx5.slack.com/', desc:'Canal principal de comunicación del equipo.'},
  {id:'d4', scope:'dfx5', category:'Otro', name:'GitHub — Repos DFX5', url:'https://github.com/dfx5', desc:'Código fuente de librerías compartidas y plantillas de Connect reutilizables entre proyectos.'},

  // ---- Clientes DFX5 (acceso = ser administrador del proyecto) ----
  {id:'1', scope:'proyecto', project:'Cliente Retail Corp', category:'AWS Console', name:'AWS Console — Cuenta Producción', url:'https://console.aws.amazon.com/', desc:'Cuenta principal de AWS del cliente. Acceso a todos los servicios desplegados en producción.'},
  {id:'2', scope:'proyecto', project:'Cliente Retail Corp', category:'Amazon Connect', name:'Connect — Instancia Ventas', url:'https://us-east-1.console.aws.amazon.com/connect/', desc:'Instancia de Connect para el flujo de ventas telefónicas. Revisar aquí ante caídas de llamadas entrantes.'},
  {id:'3', scope:'proyecto', project:'Cliente Retail Corp', category:'Amazon Connect', name:'Connect — Instancia Soporte', url:'https://us-east-1.console.aws.amazon.com/connect/', desc:'Instancia separada para soporte postventa. No compartir agentes con la instancia de Ventas.'},
  {id:'4', scope:'proyecto', project:'Cliente Retail Corp', category:'Lambda', name:'Lambda — IVR Router', url:'https://console.aws.amazon.com/lambda/', desc:'Enruta llamadas del IVR según horario y disponibilidad de colas. Punto crítico del flujo.'},
  {id:'5', scope:'proyecto', project:'Cliente Retail Corp', category:'Logs', name:'CloudWatch — Errores Contact Flow', url:'https://console.aws.amazon.com/cloudwatch/', desc:'Log group con errores de ejecución de los contact flows. Primer lugar a revisar ante fallas reportadas.'},

  {id:'6', scope:'proyecto', project:'Cliente Banca XYZ', category:'AWS Console', name:'AWS Console — Cuenta Producción', url:'https://console.aws.amazon.com/', desc:'Cuenta AWS aislada del cliente banca, por requerimiento de compliance.'},
  {id:'7', scope:'proyecto', project:'Cliente Banca XYZ', category:'Amazon Connect', name:'Connect — Instancia Cobranza', url:'https://us-east-1.console.aws.amazon.com/connect/', desc:'Instancia usada para campañas de cobranza outbound.'},
  {id:'8', scope:'proyecto', project:'Cliente Banca XYZ', category:'Lambda', name:'Lambda — Validación Identidad', url:'https://console.aws.amazon.com/lambda/', desc:'Valida identidad del cliente contra Customer Profiles antes de enrutar la llamada.'},
  {id:'9', scope:'proyecto', project:'Cliente Banca XYZ', category:'Logs', name:'CloudWatch — Lambda Validación', url:'https://console.aws.amazon.com/cloudwatch/', desc:'Logs específicos de la Lambda de validación de identidad. Útil para depurar rechazos falsos.'},
  {id:'10', scope:'proyecto', project:'Cliente Banca XYZ', category:'Otro', name:'Customer Profiles — Domain Banca', url:'https://console.aws.amazon.com/customerprofiles/', desc:'Dominio de Customer Profiles con los perfiles unificados de clientes del banco.'},

  {id:'11', scope:'proyecto', project:'Cliente Salud Plus', category:'AWS Console', name:'AWS Console — Cuenta Producción', url:'https://console.aws.amazon.com/', desc:'Cuenta AWS del proyecto de agendamiento de citas médicas.'},
  {id:'12', scope:'proyecto', project:'Cliente Salud Plus', category:'Amazon Connect', name:'Connect — Instancia Citas Médicas', url:'https://us-east-1.console.aws.amazon.com/connect/', desc:'Instancia con IVR conversacional (Lex + Bedrock) para agendar y confirmar citas.'},
  {id:'13', scope:'proyecto', project:'Cliente Salud Plus', category:'Lambda', name:'Lambda — Sync Agenda Médica', url:'https://console.aws.amazon.com/lambda/', desc:'Sincroniza disponibilidad de doctores con el sistema externo de agendamiento.'},
  {id:'14', scope:'proyecto', project:'Cliente Salud Plus', category:'Logs', name:'CloudWatch — Agente IA (Bedrock)', url:'https://console.aws.amazon.com/cloudwatch/', desc:'Logs de las respuestas del agente de IA. Revisar aquí si el agente responde algo incorrecto.'},

  // ---- Mis Links (privados, solo visibles para el dueño) ----
  {id:'p1', scope:'propio', owner:'u1', category:'Documentación', name:'Notas — Roadmap Radar Fase 2', url:'https://notion.so/roadmap-radar', desc:'Borrador de arquitectura para el backend real: auth, permisos por proyecto y persistencia.'},
  {id:'p2', scope:'propio', owner:'u1', category:'Otro', name:'Snippets — Plantillas Lambda', url:'https://github.com/dlopez/snippets', desc:'Fragmentos de código reutilizables para Lambdas de Connect.'},
  {id:'p3', scope:'propio', owner:'u2', category:'Otro', name:'Checklist personal — Guardias', url:'https://docs.google.com/checklist-guardia', desc:'Mi checklist antes de tomar turno de guardia en Retail Corp.'},
];

const CATEGORY_ICONS = {
  'AWS Console':'cat-aws', 'Amazon Connect':'cat-connect', 'Lambda':'cat-lambda', 'Logs':'cat-logs', 'Documentación':'cat-doc', 'Otro':'cat-otro'
};
const PROJECT_COLORS = {};
const PALETTE = ['#8b3ffc','#e0559a','#22c55e','#f59e0b','#38bdf8','#f472b6'];

let state = { tab:'dfx5', category:'Todos', project:'Todos' };

/* ---------- persistence ---------- */
function loadUsers(){
  const raw = localStorage.getItem(USERS_KEY);
  if(raw){ try{ return JSON.parse(raw); }catch(e){} }
  localStorage.setItem(USERS_KEY, JSON.stringify(seedUsers));
  return seedUsers;
}
function saveUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }

function loadLinks(){
  const raw = localStorage.getItem(LINKS_KEY);
  if(raw){ try{ return JSON.parse(raw); }catch(e){} }
  localStorage.setItem(LINKS_KEY, JSON.stringify(seedLinks));
  return seedLinks;
}
function saveLinks(d){ localStorage.setItem(LINKS_KEY, JSON.stringify(d)); }

function loadProjects(){
  const raw = localStorage.getItem(PROJECTS_KEY);
  if(raw){ try{ return JSON.parse(raw); }catch(e){} }
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(seedProjects));
  return seedProjects;
}
function saveProjects(p){ localStorage.setItem(PROJECTS_KEY, JSON.stringify(p)); }

function getCurrentUser(){
  const users = loadUsers();
  const id = localStorage.getItem(CURRENT_USER_KEY);
  return users.find(u=>u.id===id) || users[0];
}
function setCurrentUser(id){ localStorage.setItem(CURRENT_USER_KEY, id); render(); }

/* ---------- permissions ---------- */
function isProjectAdmin(user, projectName, projects){
  const p = projects.find(pr=>pr.name===projectName);
  return !!p && p.admins.includes(user.id);
}
function canEdit(link, user, projects){
  if(link.scope==='dfx5') return user.isGlobalAdmin;
  if(link.scope==='proyecto') return isProjectAdmin(user, link.project, projects);
  if(link.scope==='propio') return link.owner===user.id;
  return false;
}
function getAdminProjects(user, projects){ return projects.filter(p=>p.admins.includes(user.id)).map(p=>p.name); }
function getProjectAdminNames(projectName, projects, users){
  const p = projects.find(pr=>pr.name===projectName);
  if(!p || !p.admins.length) return 'nadie todavía';
  return p.admins.map(id=>{ const u = users.find(x=>x.id===id); return u ? u.name : '—'; }).join(', ');
}
function canAddInCurrentTab(user, projects){
  if(state.tab==='dfx5') return user.isGlobalAdmin;
  if(state.tab==='propio') return true;
  if(state.tab==='proyecto') return getAdminProjects(user, projects).length>0;
  return false;
}
function getProjectColor(project){
  if(!PROJECT_COLORS[project]){ PROJECT_COLORS[project] = PALETTE[Object.keys(PROJECT_COLORS).length % PALETTE.length]; }
  return PROJECT_COLORS[project];
}
function initials(name){ return name.split(' ').filter(Boolean).slice(0,2).map(w=>w[0].toUpperCase()).join(''); }

/* ---------- top controls ---------- */
function toggleAdmin(){
  document.body.classList.toggle('admin-mode');
  const on = document.body.classList.contains('admin-mode');
  document.getElementById('adminToggle').classList.toggle('active', on);
  document.getElementById('adminLabel').textContent = on ? 'Editando' : 'Modo edición';
  showToast(on ? 'Modo edición activado — ya puedes agregar o editar lo que te corresponda' : 'Modo edición desactivado');
  render();
}

function setTab(tab){ state.tab = tab; state.category = 'Todos'; state.project = 'Todos'; render(); }
function setFilter(type, value){ state[type] = value; render(); }

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}

function requestAccess(project){
  const projects = loadProjects(); const users = loadUsers();
  showToast(`Solicitud de acceso enviada a los administradores de ${project} (${getProjectAdminNames(project, projects, users)})`);
}

/* ---------- new project ---------- */
function openNewProjectModal(){ document.getElementById('projectOverlay').classList.add('show'); }
function closeNewProjectModal(){ document.getElementById('projectOverlay').classList.remove('show'); document.getElementById('np_name').value=''; }
function createProject(){
  const name = document.getElementById('np_name').value.trim();
  if(!name){ showToast('Escribe un nombre de proyecto'); return; }
  const projects = loadProjects();
  if(projects.some(p=>p.name.toLowerCase()===name.toLowerCase())){ showToast('Ya existe un proyecto con ese nombre'); return; }
  const currentUser = getCurrentUser();
  projects.push({id:'proj_'+Date.now(), name, admins:[currentUser.id]});
  saveProjects(projects);
  closeNewProjectModal();
  state.tab = 'proyecto'; state.category = 'Todos'; state.project = name;
  showToast('Proyecto creado — ya eres administrador');
  render();
}

/* ---------- link modal ---------- */
function openModal(link){
  const currentUser = getCurrentUser();
  const projects = loadProjects();
  const scope = link ? link.scope : state.tab;

  if(!link && !canAddInCurrentTab(currentUser, projects)){ showToast('No tienes permiso para agregar links aquí.'); return; }
  if(link && !canEdit(link, currentUser, projects)){ showToast('No tienes permiso para editar este link.'); return; }

  document.getElementById('overlay').classList.add('show');
  document.getElementById('modalScope').value = scope;

  const titles = {dfx5:'recurso DFX5', proyecto:'recurso de proyecto', propio:'link propio (privado)'};
  document.getElementById('modalTitle').textContent = (link ? 'Editar ' : 'Agregar nuevo ') + titles[scope];
  document.getElementById('modalSub').textContent =
    scope==='dfx5' ? 'Visible para todo el equipo DFX5.' :
    scope==='proyecto' ? 'Visible solo para los administradores de este proyecto.' :
    'Privado — solo tú lo puedes ver.';

  document.getElementById('editId').value = link ? link.id : '';

  const pc = document.getElementById('projectFieldContainer');
  if(scope==='proyecto'){
    pc.style.display = 'block';
    const adminProjects = getAdminProjects(currentUser, projects);
    pc.innerHTML = `
      <label>Proyecto / Cliente (solo donde eres administrador)</label>
      <select id="f_project" onchange="onProjectSelectChange()">
        <option value="" disabled ${!link ? 'selected' : ''}>Selecciona un proyecto...</option>
        ${adminProjects.map(p=>`<option value="${p.replace(/"/g,'&quot;')}" ${link && link.project===p ? 'selected' : ''}>${p}</option>`).join('')}
        <option value="__new__">+ Agregar nuevo proyecto...</option>
      </select>
      <input id="f_project_new" placeholder="Nombre del nuevo proyecto" style="display:none;margin-top:8px;">
    `;
  } else {
    pc.style.display = 'none';
    pc.innerHTML = '<input id="f_project" type="hidden" value=""><input id="f_project_new" type="hidden" value="">';
  }

  const cc = document.getElementById('categoryFieldContainer');
  const defaultCats = ['AWS Console','Amazon Connect','Lambda','Logs','Documentación','Otro'];
  const extraCats = [...new Set(loadLinks().map(l=>l.category))].filter(c=>c && !defaultCats.includes(c));
  const allCats = [...defaultCats, ...extraCats];
  cc.innerHTML = `
    <label>Categoría</label>
    <select id="f_category" onchange="onCategorySelectChange()">
      <option value="" disabled ${!link ? 'selected' : ''}>Selecciona una categoría...</option>
      ${allCats.map(c=>`<option value="${c.replace(/"/g,'&quot;')}" ${link && link.category===c ? 'selected' : ''}>${c}</option>`).join('')}
      <option value="__new__">+ Agregar nueva categoría...</option>
    </select>
    <input id="f_category_new" placeholder="Nombre de la nueva categoría" style="display:none;margin-top:8px;">
  `;

  document.getElementById('f_name').value = link ? link.name : '';
  document.getElementById('f_url').value = link ? link.url : '';
  document.getElementById('f_desc').value = link ? link.desc : '';
}
function closeModal(){ document.getElementById('overlay').classList.remove('show'); }

function onProjectSelectChange(){
  const sel = document.getElementById('f_project');
  const newInput = document.getElementById('f_project_new');
  if(!sel || !newInput) return;
  newInput.style.display = sel.value === '__new__' ? 'block' : 'none';
  if(sel.value === '__new__') newInput.focus();
}
function onCategorySelectChange(){
  const sel = document.getElementById('f_category');
  const newInput = document.getElementById('f_category_new');
  if(!sel || !newInput) return;
  newInput.style.display = sel.value === '__new__' ? 'block' : 'none';
  if(sel.value === '__new__') newInput.focus();
}

function saveLink(){
  const currentUser = getCurrentUser();
  const projects = loadProjects();
  const id = document.getElementById('editId').value;
  const scope = document.getElementById('modalScope').value;

  let category = document.getElementById('f_category').value;
  if(category === '__new__'){ category = document.getElementById('f_category_new').value.trim(); }
  if(!category){ showToast('Selecciona o escribe una categoría'); return; }

  const name = document.getElementById('f_name').value.trim();
  const url = document.getElementById('f_url').value.trim();
  const desc = document.getElementById('f_desc').value.trim();

  let project = '';
  if(scope==='proyecto'){
    const pf = document.getElementById('f_project');
    let projectVal = pf ? pf.value : '';
    if(projectVal === '__new__'){
      const newName = document.getElementById('f_project_new').value.trim();
      if(!newName){ showToast('Escribe el nombre del nuevo proyecto'); return; }
      if(projects.some(p=>p.name.toLowerCase()===newName.toLowerCase())){
        showToast('Ya existe un proyecto con ese nombre — selecciónalo de la lista'); return;
      }
      projects.push({id:'proj_'+Date.now(), name:newName, admins:[currentUser.id]});
      saveProjects(projects);
      projectVal = newName;
    }
    if(!projectVal || !isProjectAdmin(currentUser, projectVal, projects)){ showToast('Selecciona un proyecto donde seas administrador'); return; }
    project = projectVal;
  }
  if(!name || !url){ showToast('Completa nombre y URL'); return; }

  let data = loadLinks();
  if(id){
    data = data.map(l => l.id===id ? {...l, category, name, url, desc, ...(scope==='proyecto' ? {project} : {})} : l);
    showToast('Link actualizado ✓');
  } else {
    const newLink = {id: Date.now().toString(), scope, category, name, url, desc};
    if(scope==='proyecto') newLink.project = project;
    if(scope==='propio') newLink.owner = currentUser.id;
    data.push(newLink);
    showToast('Link agregado ✓');
  }
  saveLinks(data);
  closeModal();
  render();
}

function deleteLink(id){
  const currentUser = getCurrentUser();
  const projects = loadProjects();
  const data = loadLinks();
  const link = data.find(l=>l.id===id);
  if(!link || !canEdit(link, currentUser, projects)){ showToast('No tienes permiso para eliminar este link.'); return; }
  if(!confirm('¿Eliminar este link?')) return;
  saveLinks(data.filter(l=>l.id!==id));
  showToast('Link eliminado');
  render();
}

/* ---------- manage project admins ---------- */
function openAccessModal(project){
  const currentUser = getCurrentUser();
  const projects = loadProjects();
  if(!isProjectAdmin(currentUser, project, projects)){ showToast('Solo un administrador del proyecto puede gestionar accesos.'); return; }

  const users = loadUsers();
  const p = projects.find(pr=>pr.name===project);

  document.getElementById('accessOverlay').classList.add('show');
  document.getElementById('accessProjectName').textContent = project;

  const rows = users.map(u=>{
    const checked = p.admins.includes(u.id);
    return `
      <div class="access-row">
        <div>
          <div style="font-weight:600;font-size:13px;">${u.name}</div>
          <div style="font-size:11.5px;color:var(--text-dim2);">${u.email}${checked ? ' · Administrador' : ''}</div>
        </div>
        <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleProjectAdmin('${project.replace(/'/g,"&apos;")}','${u.id}',this.checked)">
      </div>
    `;
  }).join('');
  document.getElementById('accessList').innerHTML = rows || '<p style="font-size:12.5px;color:var(--text-dim2);">No hay usuarios registrados todavía.</p>';
}
function closeAccessModal(){ document.getElementById('accessOverlay').classList.remove('show'); }

function toggleProjectAdmin(project, userId, checked){
  const projects = loadProjects();
  const p = projects.find(pr=>pr.name===project);
  if(!p) return;

  if(checked){
    if(!p.admins.includes(userId)) p.admins.push(userId);
    saveProjects(projects);
    showToast('Ahora es administrador del proyecto');
  } else {
    if(p.admins.length<=1 && p.admins.includes(userId)){
      showToast('No puedes quitar al último administrador del proyecto');
      openAccessModal(project);
      return;
    }
    p.admins = p.admins.filter(x=>x!==userId);
    saveProjects(projects);
    showToast('Acceso de administrador revocado');
  }

  const currentUser = getCurrentUser();
  closeAccessModal();
  render();
  if(isProjectAdmin(currentUser, project, projects)) openAccessModal(project);
}

/* ---------- fab ---------- */
function updateFabVisibility(user, projects){
  const fab = document.getElementById('fab');
  const adminMode = document.body.classList.contains('admin-mode');
  fab.style.display = (adminMode && canAddInCurrentTab(user, projects)) ? 'flex' : 'none';
}

/* ---------- rendering ---------- */
function renderUserChip(user){
  document.getElementById('userAvatar').textContent = initials(user.name);
  const sel = document.getElementById('userSelect');
  const users = loadUsers();
  sel.innerHTML = users.map(u=>`<option value="${u.id}" ${u.id===user.id ? 'selected' : ''}>${u.name}</option>`).join('');
  const badge = document.getElementById('roleBadge');
  if(user.isGlobalAdmin){ badge.textContent = 'Admin DFX5'; badge.className = 'role-badge role-admin'; badge.style.display = 'inline-flex'; }
  else { badge.style.display = 'none'; }
}

function renderTabs(currentUser, allLinks, projects){
  const dfx5Count = allLinks.filter(l=>l.scope==='dfx5').length;
  const proyectoCount = allLinks.filter(l=>l.scope==='proyecto' && isProjectAdmin(currentUser, l.project, projects)).length;
  const propioCount = allLinks.filter(l=>l.scope==='propio' && l.owner===currentUser.id).length;
  const tabsDef = [
    {key:'dfx5', label:'DFX5', count:dfx5Count, icon:ICON_DFX5},
    {key:'proyecto', label:'Clientes DFX5', count:proyectoCount, icon:ICON_PROJECT},
    {key:'propio', label:'Mis Links', count:propioCount, icon:ICON_USER},
  ];
  document.getElementById('tabs').innerHTML = tabsDef.map(t=>`
    <div class="tab-btn ${state.tab===t.key ? 'active' : ''}" onclick="setTab('${t.key}')">
      ${t.icon}<span>${t.label}</span><span class="tab-count">${t.count}</span>
    </div>
  `).join('');
}

function renderFilters(scopeLinks, accessibleProjects){
  const defaultCats = ['AWS Console','Amazon Connect','Lambda','Logs','Documentación','Otro'];
  const extraCats = [...new Set(scopeLinks.map(l=>l.category))].filter(c=>c && !defaultCats.includes(c));
  const cats = ['Todos', ...defaultCats, ...extraCats];
  document.getElementById('categoryFilters').innerHTML = '<span class="filter-label">Categoría</span>' + cats.map(c =>
    `<span class="chip ${state.category===c ? 'active' : ''}" onclick="setFilter('category','${c}')">${c}</span>`
  ).join('');

  const projBox = document.getElementById('projectFilters');
  if(state.tab==='proyecto'){
    const projects = ['Todos', ...accessibleProjects];
    projBox.style.display = 'flex';
    projBox.innerHTML = '<span class="filter-label">Proyecto</span>' + projects.map(p =>
      `<span class="chip ${state.project===p ? 'active' : ''}" onclick="setFilter('project','${p}')">${p}</span>`
    ).join('') + `<button class="btn-manage admin-only" style="margin-left:auto;" onclick="openNewProjectModal()">+ Nuevo proyecto</button>`;
  } else {
    projBox.style.display = 'none';
    projBox.innerHTML = '';
  }
}

function cardHtml(user, l, projects){
  const editable = canEdit(l, user, projects);
  return `
    <div class="card">
      <div class="card-top">
        <span class="cat-badge ${CATEGORY_ICONS[l.category] || 'cat-otro'}">${l.category}</span>
        ${editable ? `
        <div class="admin-only" style="gap:6px;">
          <div class="icon-btn" onclick='openModal(${JSON.stringify(l).replace(/'/g,"&apos;")})' title="Editar">${ICON_EDIT}</div>
          <div class="icon-btn danger" onclick="deleteLink('${l.id}')" title="Eliminar">${ICON_TRASH}</div>
        </div>` : ''}
      </div>
      <h4>${l.name}</h4>
      <p class="desc">${l.desc || 'Sin descripción.'}</p>
      <div class="card-actions">
        <a class="btn-open" href="${l.url}" target="_blank" rel="noopener">Abrir recurso →</a>
      </div>
    </div>
  `;
}

function emptyState(msg){ return `<div class="empty">${ICON_SEARCH_BIG}<p>${msg}</p></div>`; }

function projectGroupHtml(user, users, projects, project, links){
  const adminNames = getProjectAdminNames(project, projects, users);
  const canManage = isProjectAdmin(user, project, projects);
  return `
    <div class="project-group">
      <div class="project-head">
        <span class="project-dot" style="background:${getProjectColor(project)}"></span>
        <h3>${project}</h3>
        <span class="count">${links.length} recurso${links.length>1 ? 's' : ''}</span>
        <span class="leader-badge">Admins: ${adminNames}</span>
        ${canManage ? `<button class="btn-manage admin-only" onclick="openAccessModal('${project.replace(/'/g,"&apos;")}')">Gestionar acceso</button>` : ''}
      </div>
      <div class="grid">${links.map(l=>cardHtml(user,l,projects)).join('')}</div>
    </div>
  `;
}

function flatGroupHtml(user, projects, title, links, dotColor){
  return `
    <div class="project-group">
      <div class="project-head">
        <span class="project-dot" style="background:${dotColor}"></span>
        <h3>${title}</h3>
        <span class="count">${links.length} recurso${links.length>1 ? 's' : ''}</span>
      </div>
      <div class="grid">${links.map(l=>cardHtml(user,l,projects)).join('')}</div>
    </div>
  `;
}

function lockedSectionHtml(lockedProjects, projects, users){
  return `
    <div class="project-group">
      <div class="project-head">
        <span class="project-dot" style="background:#4b4f7a"></span>
        <h3>Proyectos sin acceso</h3>
        <span class="count">${lockedProjects.length}</span>
      </div>
      <div class="grid">
        ${lockedProjects.map(p => `
          <div class="locked-card">
            ${ICON_LOCK}
            <h4>${p}</h4>
            <p>Necesitas que un administrador de este proyecto (${getProjectAdminNames(p, projects, users)}) te dé acceso.</p>
            <button class="btn-request" onclick="requestAccess('${p.replace(/'/g,"&apos;")}')">Solicitar acceso</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderStats(user, allLinks, scopeLinks, filtered, projects){
  let label = '';
  if(state.tab==='dfx5'){
    label = `<div class="stat"><b>${scopeLinks.length}</b>recursos generales</div>`;
  } else if(state.tab==='propio'){
    label = `<div class="stat"><b>${scopeLinks.length}</b>links propios (privados)</div>`;
  } else {
    const accessibleProjects = getAdminProjects(user, projects);
    label = `<div class="stat"><b>${accessibleProjects.length}</b>proyectos con acceso</div><div class="stat"><b>${scopeLinks.length}</b>recursos</div>`;
  }
  document.getElementById('statsRow').innerHTML = label + `<div class="stat"><b>${filtered.length}</b>coincidencias</div>`;
}

function renderMain(user, users, projects, filtered, allLinks){
  const main = document.getElementById('main');

  if(state.tab==='proyecto'){
    const byProject = {};
    filtered.forEach(l => { (byProject[l.project] ||= []).push(l); });
    let html = Object.entries(byProject).map(([project, links]) => projectGroupHtml(user, users, projects, project, links)).join('');

    const lockedProjects = projects.map(p=>p.name).filter(p=>!isProjectAdmin(user, p, projects));
    if(lockedProjects.length && state.project==='Todos'){
      html += lockedSectionHtml(lockedProjects, projects, users);
    }
    main.innerHTML = html || emptyState('No tienes acceso a ningún proyecto todavía. Pide acceso a un administrador o crea uno nuevo.');
  } else {
    if(filtered.length===0){
      main.innerHTML = emptyState(state.tab==='propio' ? 'Aún no agregaste links propios. Actívalos con "Modo edición".' : 'No se encontraron recursos con esos filtros.');
      return;
    }
    const title = state.tab==='dfx5' ? 'Recursos generales DFX5' : 'Tus links personales';
    const dot = state.tab==='dfx5' ? '#8b3ffc' : '#38bdf8';
    main.innerHTML = flatGroupHtml(user, projects, title, filtered, dot);
  }
}

function render(){
  const currentUser = getCurrentUser();
  const users = loadUsers();
  const allLinks = loadLinks();
  const projects = loadProjects();

  renderUserChip(currentUser);
  renderTabs(currentUser, allLinks, projects);

  let scopeLinks;
  let accessibleProjects = [];
  if(state.tab==='dfx5'){
    scopeLinks = allLinks.filter(l=>l.scope==='dfx5');
  } else if(state.tab==='propio'){
    scopeLinks = allLinks.filter(l=>l.scope==='propio' && l.owner===currentUser.id);
  } else {
    accessibleProjects = getAdminProjects(currentUser, projects);
    scopeLinks = allLinks.filter(l=>l.scope==='proyecto' && accessibleProjects.includes(l.project));
  }

  renderFilters(scopeLinks, accessibleProjects);

  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const filtered = scopeLinks.filter(l => {
    const hay = [l.project, l.name, l.desc, l.category].filter(Boolean).join(' ').toLowerCase();
    const matchesQ = !q || hay.includes(q);
    const matchesCat = state.category==='Todos' || l.category===state.category;
    const matchesProj = state.tab!=='proyecto' || state.project==='Todos' || l.project===state.project;
    return matchesQ && matchesCat && matchesProj;
  });

  renderStats(currentUser, allLinks, scopeLinks, filtered, projects);
  renderMain(currentUser, users, projects, filtered, allLinks);
  updateFabVisibility(currentUser, projects);
}

document.addEventListener('keydown', (e)=>{
  if(e.key === '/' && document.activeElement.id !== 'searchInput'){
    e.preventDefault();
    document.getElementById('searchInput').focus();
  }
  if(e.key === 'Escape'){ closeModal(); closeAccessModal(); closeNewProjectModal(); }
});
document.getElementById('overlay').addEventListener('click', (e)=>{ if(e.target.id === 'overlay') closeModal(); });
document.getElementById('accessOverlay').addEventListener('click', (e)=>{ if(e.target.id === 'accessOverlay') closeAccessModal(); });
document.getElementById('projectOverlay').addEventListener('click', (e)=>{ if(e.target.id === 'projectOverlay') closeNewProjectModal(); });

render();
