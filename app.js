/* ================== Datos fijos ================== */
const TIPOS = {
  mirador:  { n: 'Mirador',          e: '🏔️', c: '#4F7CAC' },
  curvas:   { n: 'Curvas buenas',    e: '🌀', c: '#F2B33D' },
  comida:   { n: 'Comer o almorzar', e: '🍳', c: '#C2362B' },
  cafe:     { n: 'Parada café',      e: '☕', c: '#8A5A3C' },
  gasolina: { n: 'Gasolinera',       e: '⛽', c: '#3E8E5E' },
  peligro:  { n: 'Peligro o gravilla', e: '⚠️', c: '#E0662F' },
  foto:     { n: 'Foto',             e: '📸', c: '#9B6BC2' },
  dormir:   { n: 'Dormir',           e: '🛏️', c: '#5A6B7A' },
  taller:   { n: 'Taller',           e: '🔧', c: '#7A7F85' },
  otro:     { n: 'Otro',             e: '📍', c: '#D7DADD' }
};
const DIFS = { 1: 'Tranquila', 2: 'Revirada', 3: 'Muy revirada' };
const PILOTOS = { Carmen: '#F2B33D', Diego: '#6FA3D6' };

/* Rutas moteras conocidas. Los km son orientativos; al verlas se calculan por carretera. */
const CATALOGO = [
  { id:'guadarrama', nombre:'Puertos de Navacerrada, Cotos y Canencia', region:'Madrid', dif:3, km:75,
    lugares:'Navacerrada, Puerto de Navacerrada, Cotos, Rascafría, Canencia, Miraflores',
    desc:'Tres puertos de la sierra en una mañana. Curvas enlazadas y vistas al valle del Lozoya.',
    wp:[[40.7290,-4.0190],[40.7870,-4.0103],[40.8227,-3.9634],[40.9038,-3.8790],[40.9067,-3.7346],[40.8125,-3.7642]] },
  { id:'morcuera', nombre:'Puerto de la Morcuera', region:'Madrid', dif:2, km:40,
    lugares:'Miraflores de la Sierra, La Morcuera, Rascafría, Lozoya',
    desc:'Puerto corto y muy disfrutón, con parada obligada en el monasterio de El Paular.',
    wp:[[40.8125,-3.7642],[40.9038,-3.8790],[40.9484,-3.7908]] },
  { id:'alberche', nombre:'Embalses de San Juan y Burguillo', region:'Madrid y Ávila', dif:1, km:45,
    lugares:'San Martín de Valdeiglesias, El Tiemblo, El Barraco',
    desc:'Ruta suave entre pinares y embalses, perfecta para estrenar la temporada.',
    wp:[[40.3622,-4.3989],[40.4150,-4.5000],[40.4770,-4.6440]] },
  { id:'tietar', nombre:'Valle del Tiétar', region:'Ávila', dif:1, km:75,
    lugares:'San Martín de Valdeiglesias, Piedralaves, Arenas de San Pedro',
    desc:'Pueblos de la cara sur de Gredos con curvas amplias y buen asfalto.',
    wp:[[40.3622,-4.3989],[40.3175,-4.6993],[40.2108,-5.0882]] },
  { id:'gredos', nombre:'Puerto del Pico y Sierra de Gredos', region:'Ávila', dif:2, km:95,
    lugares:'Arenas de San Pedro, Mombeltrán, Puerto del Pico, Hoyos del Espino, El Barco de Ávila',
    desc:'Subida por la calzada romana del Pico y travesía por el alto Tormes.',
    wp:[[40.2108,-5.0882],[40.2597,-5.0175],[40.3436,-5.1745],[40.3572,-5.5226]] },
  { id:'jerte', nombre:'Puerto de Tornavacas y Valle del Jerte', region:'Extremadura', dif:1, km:90,
    lugares:'El Barco de Ávila, Tornavacas, Cabezuela del Valle, Plasencia',
    desc:'Bajada larga entre cerezos. En primavera, con la floración, es otra ruta.',
    wp:[[40.3572,-5.5226],[40.2550,-5.6900],[40.1925,-5.8060],[40.0303,-6.0890]] },
  { id:'honduras', nombre:'Puerto de Honduras', region:'Extremadura', dif:3, km:35,
    lugares:'Hervás, Puerto de Honduras, Cabezuela del Valle',
    desc:'Carretera estrecha y muy revirada entre castaños. Ojo con la hoja en otoño.',
    wp:[[40.2747,-5.8612],[40.1925,-5.8060]] },
  { id:'francia', nombre:'Sierra de Francia y Las Batuecas', region:'Salamanca', dif:3, km:70,
    lugares:'Béjar, Miranda del Castañar, La Alberca, Las Batuecas, Las Mestas',
    desc:'Pueblos de piedra y la bajada al valle de Las Batuecas, de las más bonitas de la meseta.',
    wp:[[40.3866,-5.7636],[40.4840,-5.9970],[40.4890,-6.1100],[40.4380,-6.1680]] },
  { id:'negra', nombre:'Pueblos de arquitectura negra', region:'Guadalajara', dif:2, km:60,
    lugares:'Tamajón, Campillo de Ranas, Majaelrayo, Valverde de los Arroyos',
    desc:'Pizarra, carreteras solitarias y el Ocejón de fondo.',
    wp:[[40.9996,-3.2475],[41.0852,-3.3133],[41.1096,-3.3015],[41.1290,-3.2320]] },
  { id:'quesera', nombre:'Puerto de la Quesera', region:'Segovia y Guadalajara', dif:3, km:35,
    lugares:'Riaza, Puerto de la Quesera, Majaelrayo',
    desc:'Puerto de montaña con curvas cerradas que une Riaza con los pueblos negros.',
    wp:[[41.2805,-3.4776],[41.1096,-3.3015]] },
  { id:'cuenca', nombre:'Serranía de Cuenca', region:'Cuenca', dif:1, km:80,
    lugares:'Cuenca, Villalba de la Sierra, Tragacete, nacimiento del Cuervo',
    desc:'Hoces del Júcar, el Ventano del Diablo y pinares hasta el nacimiento del río Cuervo.',
    wp:[[40.0704,-2.1374],[40.2350,-2.0870],[40.3460,-1.8480],[40.4120,-1.8960]] },
  { id:'hermida', nombre:'Desfiladero de La Hermida y Fuente Dé', region:'Cantabria', dif:2, km:55,
    lugares:'Panes, La Hermida, Potes, Fuente Dé',
    desc:'Paredes de roca a los dos lados y final al pie del teleférico de Fuente Dé.',
    wp:[[43.3270,-4.5850],[43.1540,-4.6230],[43.1450,-4.8100]] },
  { id:'sanglorio', nombre:'Puerto de San Glorio', region:'Cantabria y León', dif:3, km:70,
    lugares:'Potes, San Glorio, Portilla de la Reina, Riaño',
    desc:'Puerto alto de Picos de Europa. Mirador del Corzo arriba y embalse de Riaño al final.',
    wp:[[43.1540,-4.6230],[43.0459,-4.8611],[42.9773,-5.0040]] },
  { id:'beyos', nombre:'Desfiladero de los Beyos', region:'Asturias y León', dif:2, km:75,
    lugares:'Cangas de Onís, Los Beyos, Puerto del Pontón, Riaño',
    desc:'Carretera encajonada junto al Sella y subida al Pontón con el mirador de Riaño.',
    wp:[[43.3507,-5.1294],[42.9773,-5.0040]] },
  { id:'covadonga', nombre:'Lagos de Covadonga', region:'Asturias', dif:3, km:25,
    lugares:'Cangas de Onís, Covadonga, lago Enol',
    desc:'Subida corta y exigente. En temporada alta el acceso a los lagos está restringido: mirad horarios antes.',
    wp:[[43.3507,-5.1294],[43.3094,-5.0560],[43.2713,-4.9895]] },
  { id:'ribeira', nombre:'Ribeira Sacra y cañón del Sil', region:'Galicia', dif:2, km:65,
    lugares:'Monforte de Lemos, Castro Caldelas, Parada de Sil',
    desc:'Viñedos en terrazas imposibles y miradores sobre el cañón del Sil.',
    wp:[[42.5220,-7.5140],[42.3750,-7.4160],[42.3840,-7.5680]] },
  { id:'ventamillo', nombre:'Congosto de Ventamillo hasta Benasque', region:'Huesca', dif:2, km:75,
    lugares:'Graus, Campo, Congosto de Ventamillo, Castejón de Sos, Benasque',
    desc:'Valle del Ésera hacia el Pirineo, con el estrecho de Ventamillo como plato fuerte.',
    wp:[[42.1890,0.3390],[42.4170,0.3970],[42.5130,0.4920],[42.6040,0.5230]] },
  { id:'bonaigua', nombre:'Port de la Bonaigua', region:'Lleida', dif:3, km:85,
    lugares:'Sort, Esterri d’Àneu, Port de la Bonaigua, Vielha',
    desc:'Uno de los grandes puertos del Pirineo, a más de 2.000 metros. Solo de primavera a otoño.',
    wp:[[42.4133,1.1300],[42.6283,1.1240],[42.7017,0.7956]] },
  { id:'montseny', nombre:'Montseny', region:'Barcelona', dif:3, km:45,
    lugares:'Sant Celoni, Montseny, Seva',
    desc:'Curva tras curva entre hayedos y encinares. Muy concurrida en fin de semana.',
    wp:[[41.6890,2.4910],[41.7600,2.3990],[41.8380,2.2810]] },
  { id:'grazalema', nombre:'Sierra de Grazalema', region:'Andalucía', dif:3, km:50,
    lugares:'Ronda, Grazalema, Puerto de las Palomas, Zahara de la Sierra',
    desc:'Pueblos blancos y la bajada del Puerto de las Palomas con el embalse de Zahara a los pies.',
    wp:[[36.7423,-5.1671],[36.7596,-5.3687],[36.8406,-5.3912]] },
  { id:'alpujarras', nombre:'Las Alpujarras', region:'Andalucía', dif:2, km:50,
    lugares:'Lanjarón, Órgiva, Pampaneira, Trevélez',
    desc:'Subida por la cara sur de Sierra Nevada hasta Trevélez y su jamón.',
    wp:[[36.9190,-3.4800],[36.8960,-3.4240],[36.9395,-3.3620],[37.0010,-3.2660]] }
];

/* ================== Estado ================== */
const LS = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const E = {
  puntos: [], rutas: [], piloto: LS.get('cardi_piloto'),
  filtroRutas: 'pendiente', filtroTipoMapa: '', filtroTipoLista: '',
  buscar: { texto: '', region: '', dif: 0, cerca: false },
  miPos: null, trazado: null, marcadores: {}, capa: 'carretera', odoVisto: false, cargado: false
};
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

/* ================== Servidor ================== */
const enGoogle = typeof google !== 'undefined' && google.script && google.script.run;
const demo = {
  datos() { return JSON.parse(LS.get('cardi_demo') || '{"puntos":[],"rutas":[]}'); },
  save(d) { LS.set('cardi_demo', JSON.stringify(d)); },
  up(col, o) {
    const d = this.datos();
    if (!o.id) o.id = Math.random().toString(36).slice(2, 10);
    if (!o.fecha) o.fecha = new Date().toISOString();
    const i = d[col].findIndex(x => x.id === o.id);
    if (i >= 0) d[col][i] = o; else d[col].push(o);
    this.save(d); return o;
  },
  del(col, id) {
    const d = this.datos();
    d[col] = d[col].filter(x => x.id !== id);
    if (col === 'rutas') d.puntos.forEach(p => { if (p.rutaId === id) p.rutaId = ''; });
    this.save(d); return true;
  }
};
const servidorDemo = {
  obtenerDatos: () => demo.datos(),
  guardarPunto: p => demo.up('puntos', p), borrarPunto: id => demo.del('puntos', id),
  guardarRuta: r => demo.up('rutas', r),   borrarRuta: id => demo.del('rutas', id)
};
function api(fn, ...args) {
  return new Promise((ok, ko) => {
    if (enGoogle) {
      google.script.run.withSuccessHandler(ok).withFailureHandler(ko)[fn](...args);
    } else {
      try { ok(servidorDemo[fn](...args)); } catch (e) { ko(e); }
    }
  });
}
const jsonArr = s => { if (Array.isArray(s)) return s; try { return JSON.parse(s || '[]'); } catch (e) { return []; } };
const normPunto = p => ({ ...p, lat: +p.lat, lng: +p.lng, valoracion: +p.valoracion || 0 });
const normRuta = r => ({ ...r, km: +r.km || 0, minutos: +r.minutos || 0, dificultad: +r.dificultad || 2,
  waypoints: jsonArr(r.waypoints), geometria: jsonArr(r.geometria) });
const rutaParaServidor = r => ({ ...r, waypoints: JSON.stringify(r.waypoints || []), geometria: JSON.stringify(r.geometria || []) });

/* ================== Utilidades ================== */
let toastT;
function toast(msg, ms = 2600) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('ver');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('ver'), ms);
}
function tiempo(min) {
  if (!min) return '';
  const h = Math.floor(min / 60), m = min % 60;
  return h ? `${h} h ${m ? m + ' min' : ''}`.trim() : `${m} min`;
}
const fmtKm = k => (Math.round(k * 10) / 10).toLocaleString('es-ES');
const hoyISO = () => new Date().toISOString().slice(0, 10);
function fechaCorta(s) {
  if (!s) return '';
  const d = new Date(s); if (isNaN(d)) return s;
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
}
const autorChip = a => a ? `<span class="autor" style="--a:${PILOTOS[a] || '#9AA1A8'}">${esc(a)}</span>` : '';
const curvas = n => `<span class="curvas" title="${DIFS[n]}">${[1,2,3].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span> ${DIFS[n]}`;
const estrellasTxt = n => n ? `<span class="estrellas-txt" aria-label="${n} de 5">${'★'.repeat(n)}${'☆'.repeat(5 - n)}</span>` : '';
function distanciaKm(a, b) {
  const R = 6371, rad = x => x * Math.PI / 180;
  const dLat = rad(b[0] - a[0]), dLng = rad(b[1] - a[1]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[0])) * Math.cos(rad(b[0])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
const urlLlegar = (lat, lng) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
function urlNavegar(wps) {
  if (!wps || wps.length < 2) return '#';
  const f = w => w[0] + ',' + w[1];
  let mid = wps.slice(1, -1);
  if (mid.length > 8) { const s = mid.length / 8; mid = Array.from({ length: 8 }, (_, i) => mid[Math.floor(i * s)]); }
  return 'https://www.google.com/maps/dir/?api=1&origin=' + f(wps[0]) + '&destination=' + f(wps[wps.length - 1]) +
    (mid.length ? '&waypoints=' + encodeURIComponent(mid.map(f).join('|')) : '') + '&travelmode=driving';
}

/* ================== Rutas por carretera (OSRM) y sitios (Nominatim) ================== */
function simplificar(pts, max = 1200) {
  const paso = Math.max(1, Math.ceil(pts.length / max));
  const r = p => [+p[0].toFixed(5), +p[1].toFixed(5)];
  const out = pts.filter((_, i) => i % paso === 0).map(r);
  if (pts.length && (pts.length - 1) % paso !== 0) out.push(r(pts[pts.length - 1]));
  return out;
}
async function calcularCarretera(wps) {
  const coords = wps.map(w => w[1] + ',' + w[0]).join(';');
  let j;
  try {
    const r = await fetch('https://router.project-osrm.org/route/v1/driving/' + coords + '?overview=full&geometries=geojson');
    j = await r.json();
  } catch (e) { throw new Error('No hay conexión con el calculador de rutas. Prueba en un momento.'); }
  if (j.code !== 'Ok' || !j.routes || !j.routes.length) throw new Error('No encuentro carretera entre esas paradas. Acércalas a una vía.');
  const rt = j.routes[0];
  return { geometria: simplificar(rt.geometry.coordinates.map(c => [c[1], c[0]])),
           km: Math.round(rt.distance / 100) / 10, minutos: Math.round(rt.duration / 60) };
}
async function buscarSitio(q) {
  const r = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=6&accept-language=es&countrycodes=es,pt,ad,fr&q=' + encodeURIComponent(q));
  return r.json();
}
function miPosicion() {
  return new Promise((ok, ko) => {
    if (!navigator.geolocation) return ko(new Error('Este navegador no deja usar la ubicación.'));
    navigator.geolocation.getCurrentPosition(
      p => { E.miPos = [p.coords.latitude, p.coords.longitude]; pintarYo(); ok(E.miPos); },
      () => ko(new Error('No sé dónde estás: revisa el permiso de ubicación del navegador.')),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 });
  });
}

/* ================== Mapa ================== */
let mapa, capaPuntos, capaRuta, capaTrazado, capaYo;
const capas = {};
const NOMBRE_CAPA = { carretera: 'carreteras', relieve: 'relieve', noche: 'nocturno' };
function iniciarMapa() {
  mapa = L.map('mapa', { zoomControl: false }).setView([40.55, -3.95], 8);
  capas.carretera = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    { maxZoom: 19, subdomains: 'abcd', attribution: '© OpenStreetMap, © CARTO' });
  capas.relieve = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    { maxZoom: 17, subdomains: 'abc', attribution: '© OpenStreetMap, SRTM, © OpenTopoMap' });
  capas.noche = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    { maxZoom: 19, subdomains: 'abcd', attribution: '© OpenStreetMap, © CARTO' });
  const guardada = LS.get('cardi_capa');
  E.capa = capas[guardada] ? guardada : 'carretera';
  capas[E.capa].addTo(mapa);
  capaRuta = L.layerGroup().addTo(mapa);
  capaPuntos = L.layerGroup().addTo(mapa);
  capaTrazado = L.layerGroup().addTo(mapa);
  capaYo = L.layerGroup().addTo(mapa);
  mapa.on('click', alPulsarMapa);
  mapa.on('popupopen', ev => {
    const el = ev.popup.getElement();
    if (el && !el._cardi) { el._cardi = true; el.addEventListener('click', manejarAccion); }
  });
}
function cambiarCapa() {
  const orden = ['carretera', 'relieve', 'noche'];
  const sig = orden[(orden.indexOf(E.capa) + 1) % orden.length];
  mapa.removeLayer(capas[E.capa]); capas[sig].addTo(mapa);
  E.capa = sig; LS.set('cardi_capa', sig);
  toast('Mapa de ' + NOMBRE_CAPA[sig]);
}
function iconoTipo(t) {
  const T = TIPOS[t] || TIPOS.otro;
  return L.divIcon({ className: '', html: `<div class="pin" style="--c:${T.c}"><div class="cabeza"><span>${T.e}</span></div></div>`,
    iconSize: [34, 42], iconAnchor: [17, 41], popupAnchor: [0, -38] });
}
function iconoParada(i, n, cls) {
  const c = cls || (i === 0 ? 'ini' : (i === n - 1 && n > 1 ? 'fin' : ''));
  const txt = c === 'ini' ? 'S' : c === 'fin' ? 'L' : i;
  return L.divIcon({ className: '', html: `<div class="parada ${c}">${txt}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] });
}
function lineaRuta(geom, capa) {
  L.polyline(geom, { color: '#1b1c1e', weight: 9, opacity: .85, interactive: false }).addTo(capa);
  return L.polyline(geom, { color: '#F2B33D', weight: 5, opacity: 1, interactive: false }).addTo(capa);
}
function pintarYo() {
  capaYo.clearLayers();
  if (E.miPos) L.marker(E.miPos, { icon: L.divIcon({ className: '', html: '<div class="yo"></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), interactive: false }).addTo(capaYo);
}
function popupPunto(p) {
  const T = TIPOS[p.tipo] || TIPOS.otro;
  const ruta = E.rutas.find(r => r.id === p.rutaId);
  return `<div class="pop"><strong>${esc(p.nombre)}</strong>
    <div class="pop-tipo">${T.e} ${T.n} ${estrellasTxt(p.valoracion)}</div>
    ${p.nota ? `<p>${esc(p.nota)}</p>` : ''}
    <div class="fila-meta">${autorChip(p.autor)}${ruta ? `<span>En ${esc(ruta.nombre)}</span>` : ''}</div>
    <div class="pop-acc"><button class="btn mini" data-act="editar-punto" data-id="${p.id}">Editar</button>
    <a class="btn mini" target="_blank" rel="noopener" href="${urlLlegar(p.lat, p.lng)}">Cómo llegar</a></div></div>`;
}
function pintarPuntosMapa() {
  capaPuntos.clearLayers(); E.marcadores = {};
  E.puntos.filter(p => !E.filtroTipoMapa || p.tipo === E.filtroTipoMapa).forEach(p => {
    if (isNaN(p.lat) || isNaN(p.lng)) return;
    const m = L.marker([p.lat, p.lng], { icon: iconoTipo(p.tipo), title: p.nombre }).bindPopup(popupPunto(p), { maxWidth: 280 });
    m.addTo(capaPuntos); E.marcadores[p.id] = m;
  });
  pintarChipsMapa();
}
function pintarChipsMapa() {
  const usados = [...new Set(E.puntos.map(p => p.tipo))].filter(t => TIPOS[t]);
  $('#chips-mapa').innerHTML = usados.length < 2 ? '' :
    `<button class="chip" data-act="filtro-mapa" data-tipo="" aria-pressed="${!E.filtroTipoMapa}">Todos</button>` +
    usados.map(t => `<button class="chip" data-act="filtro-mapa" data-tipo="${t}" aria-pressed="${E.filtroTipoMapa === t}">${TIPOS[t].e} ${TIPOS[t].n}</button>`).join('');
}
function alPulsarMapa(ev) {
  const { lat, lng } = ev.latlng;
  $('#res-sitio').hidden = true;
  if (E.trazado) { anadirParada(lat, lng); return; }
  L.popup().setLatLng(ev.latlng)
    .setContent(`<div class="pop"><button class="btn mini prim" data-act="punto-aqui" data-lat="${lat}" data-lng="${lng}">Marcar punto aquí</button></div>`)
    .openOn(mapa);
}

/* --- Ruta mostrada en el mapa --- */
function mostrarRutaEnMapa(geom, wps, panelHtml) {
  cambiarVista('mapa');
  capaRuta.clearLayers();
  const linea = lineaRuta(geom && geom.length ? geom : wps, capaRuta);
  if (wps && wps.length) {
    L.marker(wps[0], { icon: iconoParada(0, 2, 'ini'), interactive: false }).addTo(capaRuta);
    L.marker(wps[wps.length - 1], { icon: iconoParada(1, 2, 'fin'), interactive: false }).addTo(capaRuta);
  }
  setTimeout(() => { mapa.invalidateSize(); mapa.fitBounds(linea.getBounds(), { padding: [40, 40], paddingBottomRight: [40, 170] }); }, 50);
  const panel = $('#info-ruta');
  panel.innerHTML = panelHtml; panel.hidden = false;
}
function cerrarRutaMapa() { capaRuta.clearLayers(); $('#info-ruta').hidden = true; E.vistaCat = null; }
function verRuta(id) {
  const r = E.rutas.find(x => x.id === id); if (!r) return;
  mostrarRutaEnMapa(r.geometria, r.waypoints, `
    <div class="fila-cab"><h3>${esc(r.nombre)}</h3><button class="btn mini" data-act="cerrar-ruta" aria-label="Quitar ruta del mapa">✕</button></div>
    <div class="datos-ruta"><span><b>${fmtKm(r.km)} km</b></span>${r.minutos ? `<span>${tiempo(r.minutos)} aprox.</span>` : ''}<span>${curvas(r.dificultad)}</span></div>
    <div class="fila-acc"><a class="btn mini prim" target="_blank" rel="noopener" href="${urlNavegar(r.waypoints)}">Navegar con Google Maps</a></div>`);
}
async function verCatalogo(id) {
  const c = CATALOGO.find(x => x.id === id); if (!c) return;
  toast('Calculando la ruta por carretera…', 8000);
  let res;
  try { res = await calcularCarretera(c.wp); } catch (e) { toast(e.message, 4000); return; }
  E.vistaCat = { id, res };
  const guardada = E.rutas.some(r => r.origen === 'cat:' + id);
  toast('Ruta lista', 1200);
  mostrarRutaEnMapa(res.geometria, c.wp, `
    <div class="fila-cab"><h3>${esc(c.nombre)}</h3><button class="btn mini" data-act="cerrar-ruta" aria-label="Quitar ruta del mapa">✕</button></div>
    <div class="datos-ruta"><span><b>${fmtKm(res.km)} km</b></span><span>${tiempo(res.minutos)} aprox.</span><span>${curvas(c.dif)}</span></div>
    <div class="fila-acc">
      <button class="btn mini prim" data-act="guardar-cat" data-id="${c.id}" ${guardada ? 'disabled' : ''}>${guardada ? 'Ya está en vuestras rutas' : 'Guardar para hacerla'}</button>
      <a class="btn mini" target="_blank" rel="noopener" href="${urlNavegar(c.wp)}">Navegar</a></div>`);
}

/* --- Trazar una ruta propia --- */
function empezarTrazado() {
  cerrarRutaMapa(); mapa.closePopup();
  E.trazado = { wps: [], res: null };
  $('#fabs').hidden = true; $('#barra-trazado').hidden = false;
  dibujarTrazado();
  toast('Toca el mapa: salida, paradas y llegada', 3500);
}
function anadirParada(lat, lng) { E.trazado.wps.push([+lat.toFixed(5), +lng.toFixed(5)]); E.trazado.res = null; dibujarTrazado(); }
function deshacerParada() { E.trazado.wps.pop(); E.trazado.res = null; dibujarTrazado(); }
function cancelarTrazado() {
  E.trazado = null; capaTrazado.clearLayers();
  $('#barra-trazado').hidden = true; $('#fabs').hidden = false;
}
function dibujarTrazado() {
  const t = E.trazado; capaTrazado.clearLayers();
  if (t.res) lineaRuta(t.res.geometria, capaTrazado);
  else if (t.wps.length > 1) L.polyline(t.wps, { color: '#F2B33D', weight: 3, dashArray: '6 8', opacity: .85, interactive: false }).addTo(capaTrazado);
  t.wps.forEach((w, i) => L.marker(w, { icon: iconoParada(i, t.wps.length), interactive: false }).addTo(capaTrazado));
  const n = t.wps.length;
  $('#barra-trazado').innerHTML = `
    <div class="fila-cab"><h3>Trazando ruta</h3><span class="km">${t.res ? fmtKm(t.res.km) + ' km' : ''}</span></div>
    <div class="datos-ruta"><span>${n === 0 ? 'Toca el mapa donde salís' : n === 1 ? 'Ahora toca paradas o la llegada' : n + ' paradas'}</span>${t.res ? `<span>${tiempo(t.res.minutos)} aprox.</span>` : ''}</div>
    <div class="fila-acc">
      <button class="btn mini" data-act="deshacer" ${n ? '' : 'disabled'}>Quitar última</button>
      <button class="btn mini" data-act="cancelar-trazado">Cancelar</button>
      ${t.res ? `<button class="btn mini prim" data-act="guardar-trazado">Guardar ruta</button>`
              : `<button class="btn mini prim" data-act="calcular" ${n > 1 ? '' : 'disabled'}>Calcular por carretera</button>`}
    </div>`;
}
async function calcularTrazado() {
  toast('Calculando la ruta por carretera…', 8000);
  try { E.trazado.res = await calcularCarretera(E.trazado.wps); toast('Ruta calculada', 1200); }
  catch (e) { toast(e.message, 4000); return; }
  dibujarTrazado();
  mapa.fitBounds(L.latLngBounds(E.trazado.res.geometria), { padding: [40, 40], paddingBottomRight: [40, 170] });
}

/* ================== Hoja inferior ================== */
function abrirHoja(html) { $('#hoja').innerHTML = html; $('#velo').classList.add('abierto'); }
function cerrarHoja() { $('#velo').classList.remove('abierto'); $('#hoja').innerHTML = ''; if (E._conf) { E._conf(false); E._conf = null; } }
function confirmar(texto, si) {
  return new Promise(ok => {
    abrirHoja(`<h2>${esc(texto)}</h2><div class="acciones"><span class="hueco"></span>
      <button class="btn" data-act="conf-no">Cancelar</button><button class="btn peligro" data-act="conf-si">${esc(si)}</button></div>`);
    E._conf = ok;
  });
}
function elegirPiloto(primeraVez) {
  abrirHoja(`<h2>${primeraVez ? '¿Quién lleva el móvil?' : 'Cambiar de piloto'}</h2>
    <p style="color:var(--cromo-2)">Lo que marques quedará firmado con tu nombre. Solo se pregunta en este móvil.</p>
    <div class="pilotos">${Object.keys(PILOTOS).map(n => `
      <button data-act="poner-piloto" data-nombre="${n}" aria-pressed="${E.piloto === n}">
        <span class="casco" style="--c:${PILOTOS[n]}">${n[0]}</span>${n}</button>`).join('')}</div>`);
}
function ponerPiloto(n) {
  E.piloto = n; LS.set('cardi_piloto', n);
  $('#txt-piloto').textContent = n;
  const c = $('#casco-piloto'); c.textContent = n[0]; c.style.setProperty('--c', PILOTOS[n]);
  cerrarHoja();
}

/* --- Formulario de punto --- */
function abrirFormPunto(p) {
  const tipoSel = p.tipo || 'mirador';
  abrirHoja(`<h2>${p.id ? 'Editar punto' : 'Nuevo punto'}</h2>
    <label class="campo"><span>Nombre</span><input id="f-nombre" maxlength="80" value="${esc(p.nombre || '')}" placeholder="Ej.: Mirador de la presa"></label>
    <div class="campo"><span>Qué es</span><div class="tipos" id="f-tipos">${Object.entries(TIPOS).map(([k, T]) =>
      `<button type="button" class="tipo" data-tipo="${k}" aria-pressed="${k === tipoSel}"><b>${T.e}</b>${T.n}</button>`).join('')}</div></div>
    <div class="campo"><span>Valoración</span><div class="estrellas" id="f-estrellas">${[1,2,3,4,5].map(n =>
      `<button type="button" data-n="${n}" aria-label="${n} de 5" class="${n <= (p.valoracion || 0) ? 'on' : ''}">★</button>`).join('')}</div></div>
    <label class="campo"><span>Nota</span><textarea id="f-nota" rows="3" placeholder="Qué hay, cuándo ir, cuidado con…">${esc(p.nota || '')}</textarea></label>
    <label class="campo"><span>Ruta</span><select id="f-ruta"><option value="">Sin ruta</option>${E.rutas.map(r =>
      `<option value="${r.id}" ${r.id === p.rutaId ? 'selected' : ''}>${esc(r.nombre)}</option>`).join('')}</select></label>
    <p class="coords">${(+p.lat).toFixed(5)}, ${(+p.lng).toFixed(5)}${p.autor ? ' — marcado por ' + esc(p.autor) : ''}</p>
    <div class="acciones">${p.id ? `<button class="btn peligro" data-act="borrar-punto" data-id="${p.id}">Borrar</button>` : ''}
      <span class="hueco"></span><button class="btn" data-act="cerrar">Cancelar</button>
      <button class="btn prim" id="f-guardar">Guardar punto</button></div>`);
  let tipo = tipoSel, val = p.valoracion || 0;
  $('#f-tipos').onclick = e => { const b = e.target.closest('.tipo'); if (!b) return; tipo = b.dataset.tipo;
    document.querySelectorAll('#f-tipos .tipo').forEach(x => x.setAttribute('aria-pressed', x === b)); };
  $('#f-estrellas').onclick = e => { const b = e.target.closest('button'); if (!b) return; const n = +b.dataset.n; val = (val === n ? 0 : n);
    document.querySelectorAll('#f-estrellas button').forEach(x => x.classList.toggle('on', +x.dataset.n <= val)); };
  $('#f-guardar').onclick = async () => {
    const obj = { id: p.id || '', nombre: $('#f-nombre').value.trim() || TIPOS[tipo].n, tipo, nota: $('#f-nota').value.trim(),
      valoracion: val, lat: (+p.lat).toFixed(6), lng: (+p.lng).toFixed(6), rutaId: $('#f-ruta').value,
      autor: p.autor || E.piloto || '', fecha: p.fecha || '' };
    $('#f-guardar').disabled = true;
    try {
      const g = normPunto(await api('guardarPunto', obj));
      const i = E.puntos.findIndex(x => x.id === g.id);
      if (i >= 0) E.puntos[i] = g; else E.puntos.push(g);
      cerrarHoja(); refrescar(); toast('Punto guardado');
    } catch (e) { $('#f-guardar').disabled = false; toast('No se ha guardado: ' + (e.message || e), 4000); }
  };
  if (!p.id) setTimeout(() => $('#f-nombre') && $('#f-nombre').focus(), 250);
}

/* --- Formulario de ruta --- */
function abrirFormRuta(r) {
  let estado = r.estado || 'pendiente', dif = r.dificultad || 2;
  abrirHoja(`<h2>${r.id ? 'Editar ruta' : 'Guardar ruta'}</h2>
    <div class="resumen-ruta"><div><b>${fmtKm(r.km)}</b>km</div>${r.minutos ? `<div><b>${tiempo(r.minutos)}</b>aprox.</div>` : ''}<div><b>${(r.waypoints || []).length}</b>paradas</div></div>
    <label class="campo"><span>Nombre</span><input id="f-nombre" maxlength="90" value="${esc(r.nombre || '')}" placeholder="Ej.: Vuelta por los puertos"></label>
    <div class="campo"><span>Estado</span><div class="seg" id="f-estado">
      <button type="button" data-v="pendiente" aria-pressed="${estado === 'pendiente'}">Para hacer</button>
      <button type="button" data-v="hecha" aria-pressed="${estado === 'hecha'}">Ya hecha</button></div></div>
    <label class="campo" id="campo-fecha" ${estado === 'hecha' ? '' : 'hidden'}><span>Cuándo la hicisteis</span>
      <input type="date" id="f-fecha" value="${esc((r.fechaHecha || hoyISO()).slice(0, 10))}"></label>
    <div class="campo"><span>Curvas</span><div class="seg" id="f-dif">${[1,2,3].map(n =>
      `<button type="button" data-v="${n}" aria-pressed="${n === dif}">${DIFS[n]}</button>`).join('')}</div></div>
    <label class="campo"><span>Notas</span><textarea id="f-desc" rows="3" placeholder="Estado del asfalto, dónde parar, época buena…">${esc(r.descripcion || '')}</textarea></label>
    <div class="acciones">${r.id ? `<button class="btn peligro" data-act="borrar-ruta" data-id="${r.id}">Borrar</button>` : ''}
      <span class="hueco"></span><button class="btn" data-act="cerrar">Cancelar</button>
      <button class="btn prim" id="f-guardar">Guardar ruta</button></div>`);
  $('#f-estado').onclick = e => { const b = e.target.closest('button'); if (!b) return; estado = b.dataset.v;
    document.querySelectorAll('#f-estado button').forEach(x => x.setAttribute('aria-pressed', x === b));
    $('#campo-fecha').hidden = estado !== 'hecha'; };
  $('#f-dif').onclick = e => { const b = e.target.closest('button'); if (!b) return; dif = +b.dataset.v;
    document.querySelectorAll('#f-dif button').forEach(x => x.setAttribute('aria-pressed', x === b)); };
  $('#f-guardar').onclick = async () => {
    const nombre = $('#f-nombre').value.trim();
    if (!nombre) { toast('Ponle un nombre a la ruta'); $('#f-nombre').focus(); return; }
    const obj = { ...r, nombre, estado, dificultad: dif, descripcion: $('#f-desc').value.trim(),
      fechaHecha: estado === 'hecha' ? $('#f-fecha').value : '', autor: r.autor || E.piloto || '' };
    $('#f-guardar').disabled = true;
    try {
      const g = normRuta(await api('guardarRuta', rutaParaServidor(obj)));
      const i = E.rutas.findIndex(x => x.id === g.id);
      if (i >= 0) E.rutas[i] = g; else E.rutas.push(g);
      cerrarHoja();
      if (E.trazado) cancelarTrazado();
      refrescar(); toast('Ruta guardada');
      if (!r.id) verRuta(g.id);
    } catch (e) { $('#f-guardar').disabled = false; toast('No se ha guardado: ' + (e.message || e), 4000); }
  };
}

async function guardarDesdeCatalogo(id) {
  const c = CATALOGO.find(x => x.id === id);
  if (!c || E.rutas.some(r => r.origen === 'cat:' + id)) return;
  let res = E.vistaCat && E.vistaCat.id === id ? E.vistaCat.res : null;
  if (!res) {
    toast('Calculando la ruta por carretera…', 8000);
    try { res = await calcularCarretera(c.wp); } catch (e) { toast(e.message, 4000); return; }
  }
  const obj = { nombre: c.nombre, estado: 'pendiente', dificultad: c.dif, descripcion: c.desc, km: res.km, minutos: res.minutos,
    waypoints: c.wp, geometria: res.geometria, autor: E.piloto || '', origen: 'cat:' + id, fechaHecha: '' };
  try {
    const g = normRuta(await api('guardarRuta', rutaParaServidor(obj)));
    E.rutas.push(g); refrescar();
    toast('Guardada en Mis rutas para hacer');
    if (E.vistaCat && E.vistaCat.id === id) {
      const b = document.querySelector('#info-ruta [data-act="guardar-cat"]');
      if (b) { b.disabled = true; b.textContent = 'Ya está en vuestras rutas'; }
    }
  } catch (e) { toast('No se ha guardado: ' + (e.message || e), 4000); }
}
async function marcarHecha(id) {
  const r = E.rutas.find(x => x.id === id); if (!r) return;
  const obj = { ...r, estado: 'hecha', fechaHecha: hoyISO() };
  try {
    const g = normRuta(await api('guardarRuta', rutaParaServidor(obj)));
    E.rutas[E.rutas.findIndex(x => x.id === id)] = g;
    E.odoVisto = false; refrescar(); toast(`¡${fmtKm(g.km)} km más al cuentakilómetros!`);
  } catch (e) { toast('No se ha guardado: ' + (e.message || e), 4000); }
}

/* ================== Vistas ================== */
function odometro(km) {
  const ent = Math.min(Math.floor(km), 99999), dec = Math.floor((km - Math.floor(km)) * 10 + 1e-6) % 10;
  const rueda = (d, cls) => `<div class="d ${cls || ''}"><div class="rueda" data-d="${d}">${[0,1,2,3,4,5,6,7,8,9].map(n => `<span>${n}</span>`).join('')}</div></div>`;
  return `<div class="odo" id="odo" role="img" aria-label="${fmtKm(km)} kilómetros">${String(ent).padStart(5, '0').split('').map(d => rueda(+d)).join('')}${rueda(dec, 'dec')}<span class="odo-km">km</span></div>`;
}
function girarOdometro() {
  const odo = $('#odo'); if (!odo) return;
  const poner = () => odo.querySelectorAll('.rueda').forEach(r => r.style.transform = `translateY(-${r.dataset.d * 10}%)`);
  if (E.odoVisto) { poner(); return; }
  E.odoVisto = true; odo.classList.add('anima');
  requestAnimationFrame(() => requestAnimationFrame(poner));
}
function pintarRutas() {
  const cont = $('#vista-rutas .ancho');
  const hechas = E.rutas.filter(r => r.estado === 'hecha');
  const pend = E.rutas.filter(r => r.estado !== 'hecha');
  const km = hechas.reduce((s, r) => s + (+r.km || 0), 0);
  const lista = E.filtroRutas === 'hecha' ? hechas : E.filtroRutas === 'pendiente' ? pend : E.rutas.slice();
  lista.sort((a, b) => (b.fechaHecha || b.fecha || '').localeCompare(a.fechaHecha || a.fecha || ''));
  cont.innerHTML = `
    <div class="cuadro">
      <p class="rotulo">Kilómetros rodados juntos</p>
      ${odometro(km)}
      <div class="marcadores"><span><b>${hechas.length}</b>hechas</span><span><b>${pend.length}</b>para hacer</span><span><b>${E.puntos.length}</b>puntos marcados</span></div>
    </div>
    <div class="seg" role="group" aria-label="Filtrar rutas">
      <button data-act="filtro-rutas" data-v="pendiente" aria-pressed="${E.filtroRutas === 'pendiente'}">Para hacer</button>
      <button data-act="filtro-rutas" data-v="hecha" aria-pressed="${E.filtroRutas === 'hecha'}">Hechas</button>
      <button data-act="filtro-rutas" data-v="todas" aria-pressed="${E.filtroRutas === 'todas'}">Todas</button>
    </div>
    ${lista.length ? lista.map(filaRuta).join('') : `<div class="vacio"><p>${E.filtroRutas === 'hecha'
      ? 'Todavía no habéis marcado ninguna ruta como hecha.'
      : 'No hay rutas para hacer. Buscad una o trazad la vuestra en el mapa.'}</p>
      <button class="btn prim" data-act="ir" data-vista="buscar">Buscar rutas</button> <button class="btn" data-act="trazar">Trazar en el mapa</button></div>`}`;
  girarOdometro();
}
function filaRuta(r) {
  const hecha = r.estado === 'hecha';
  const np = E.puntos.filter(p => p.rutaId === r.id).length;
  return `<article class="fila ${hecha ? 'hecha' : ''}">
    <div class="fila-cab"><h3>${esc(r.nombre)}</h3><span class="km">${fmtKm(r.km)} km</span></div>
    <div class="fila-meta"><span>${curvas(r.dificultad)}</span>${r.minutos ? `<span>${tiempo(r.minutos)}</span>` : ''}
      ${np ? `<span>${np} punto${np > 1 ? 's' : ''}</span>` : ''}${hecha && r.fechaHecha ? `<span>Hecha el ${fechaCorta(r.fechaHecha)}</span>` : ''}${autorChip(r.autor)}</div>
    ${r.descripcion ? `<p>${esc(r.descripcion)}</p>` : ''}
    <div class="fila-acc">
      <button class="btn mini prim" data-act="ver-ruta" data-id="${r.id}">Ver en el mapa</button>
      <a class="btn mini" target="_blank" rel="noopener" href="${urlNavegar(r.waypoints)}">Navegar</a>
      ${hecha ? '' : `<button class="btn mini" data-act="hecha" data-id="${r.id}">Ya la hicimos</button>`}
      <button class="btn mini" data-act="editar-ruta" data-id="${r.id}">Editar</button>
    </div></article>`;
}

function pintarBuscar() {
  const cont = $('#vista-buscar .ancho');
  const B = E.buscar;
  const regiones = [...new Set(CATALOGO.map(c => c.region))].sort((a, b) => a.localeCompare(b, 'es'));
  if (!cont.querySelector('#b-texto')) {
    cont.innerHTML = `<h2>Buscar rutas</h2>
      <div class="filtros">
        <input id="b-texto" type="search" placeholder="Puerto, pueblo, sierra…" aria-label="Buscar ruta">
        <div class="lin"><select id="b-region" aria-label="Zona"><option value="">Toda España</option>${regiones.map(r => `<option>${esc(r)}</option>`).join('')}</select>
          <button class="btn" id="b-cerca" aria-pressed="false">Cerca de mí</button></div>
        <div class="seg" id="b-dif" role="group" aria-label="Curvas">
          <button data-v="0" aria-pressed="true">Todas</button>${[1,2,3].map(n => `<button data-v="${n}" aria-pressed="false">${DIFS[n]}</button>`).join('')}</div>
      </div>
      <div id="b-lista"></div>
      <p class="aviso">¿Conocéis otra? Trazadla en el mapa y guardadla. Los kilómetros de la lista son orientativos hasta que se calcula la ruta.</p>`;
    $('#b-texto').oninput = e => { B.texto = e.target.value; pintarListaCatalogo(); };
    $('#b-region').onchange = e => { B.region = e.target.value; pintarListaCatalogo(); };
    $('#b-dif').onclick = e => { const b = e.target.closest('button'); if (!b) return; B.dif = +b.dataset.v;
      document.querySelectorAll('#b-dif button').forEach(x => x.setAttribute('aria-pressed', x === b)); pintarListaCatalogo(); };
    $('#b-cerca').onclick = async () => {
      if (B.cerca) { B.cerca = false; $('#b-cerca').setAttribute('aria-pressed', 'false'); pintarListaCatalogo(); return; }
      try { await miPosicion(); B.cerca = true; $('#b-cerca').setAttribute('aria-pressed', 'true'); pintarListaCatalogo(); }
      catch (e) { toast(e.message, 4000); }
    };
  }
  pintarListaCatalogo();
}
function pintarListaCatalogo() {
  const B = E.buscar;
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const q = norm(B.texto.trim());
  let lista = CATALOGO.filter(c => (!B.region || c.region === B.region) && (!B.dif || c.dif === B.dif) &&
    (!q || norm(c.nombre + ' ' + c.lugares + ' ' + c.region + ' ' + c.desc).includes(q)));
  if (B.cerca && E.miPos) lista = lista.map(c => ({ ...c, dist: distanciaKm(E.miPos, c.wp[0]) })).sort((a, b) => a.dist - b.dist);
  $('#b-lista').innerHTML = lista.length ? lista.map(c => {
    const guardada = E.rutas.find(r => r.origen === 'cat:' + c.id);
    return `<article class="fila ${guardada && guardada.estado === 'hecha' ? 'hecha' : ''}">
      <div class="fila-cab"><h3>${esc(c.nombre)}</h3><span class="km">~${c.km} km</span></div>
      <div class="fila-meta"><span>${esc(c.region)}</span><span>${curvas(c.dif)}</span>${c.dist != null ? `<span>Salida a ${Math.round(c.dist)} km de ti</span>` : ''}
        ${guardada ? `<span>${guardada.estado === 'hecha' ? 'Ya la habéis hecho' : 'En vuestras rutas'}</span>` : ''}</div>
      <p>${esc(c.desc)}</p>
      <p class="lugares">${esc(c.lugares)}</p>
      <div class="fila-acc">
        <button class="btn mini prim" data-act="ver-cat" data-id="${c.id}">Ver en el mapa</button>
        ${guardada ? '' : `<button class="btn mini" data-act="guardar-cat" data-id="${c.id}">Guardar para hacerla</button>`}
      </div></article>`;
  }).join('') : `<div class="vacio"><p>Ninguna ruta con esos filtros. Prueba con otra zona o quita el filtro de curvas.</p></div>`;
}

function pintarListaPuntos() {
  const cont = $('#vista-puntos .ancho');
  const usados = [...new Set(E.puntos.map(p => p.tipo))].filter(t => TIPOS[t]);
  const lista = E.puntos.filter(p => !E.filtroTipoLista || p.tipo === E.filtroTipoLista)
    .sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));
  cont.innerHTML = `<h2>Puntos marcados</h2>
    ${usados.length > 1 ? `<div class="chips" style="margin-bottom:12px"><button class="chip" data-act="filtro-lista" data-tipo="" aria-pressed="${!E.filtroTipoLista}">Todos</button>${usados.map(t =>
      `<button class="chip" data-act="filtro-lista" data-tipo="${t}" aria-pressed="${E.filtroTipoLista === t}">${TIPOS[t].e} ${TIPOS[t].n}</button>`).join('')}</div>` : ''}
    ${lista.length ? lista.map(p => {
      const T = TIPOS[p.tipo] || TIPOS.otro, ruta = E.rutas.find(r => r.id === p.rutaId);
      return `<article class="fila punto" style="--c:${T.c}">
        <div class="fila-cab"><h3>${T.e} ${esc(p.nombre)}</h3>${estrellasTxt(p.valoracion)}</div>
        <div class="fila-meta"><span>${T.n}</span>${ruta ? `<span>En ${esc(ruta.nombre)}</span>` : ''}${autorChip(p.autor)}</div>
        ${p.nota ? `<p>${esc(p.nota)}</p>` : ''}
        <div class="fila-acc"><button class="btn mini prim" data-act="ver-punto" data-id="${p.id}">Ver en el mapa</button>
          <a class="btn mini" target="_blank" rel="noopener" href="${urlLlegar(p.lat, p.lng)}">Cómo llegar</a>
          <button class="btn mini" data-act="editar-punto" data-id="${p.id}">Editar</button></div></article>`;
    }).join('') : `<div class="vacio"><p>Aún no hay puntos. En el mapa, toca un sitio o usa «Marcar dónde estoy» cuando estéis parados.</p>
      <button class="btn prim" data-act="ir" data-vista="mapa">Ir al mapa</button></div>`}`;
}

function cambiarVista(v) {
  document.querySelectorAll('.vista').forEach(x => x.classList.toggle('activa', x.id === 'vista-' + v));
  document.querySelectorAll('nav.abajo button').forEach(b => b.setAttribute('aria-current', b.dataset.vista === v ? 'page' : 'false'));
  E.vista = v;
  if (v === 'mapa') setTimeout(() => mapa.invalidateSize(), 0);
  if (v === 'rutas') pintarRutas();
  if (v === 'buscar') pintarBuscar();
  if (v === 'puntos') pintarListaPuntos();
}
function refrescar() {
  pintarPuntosMapa();
  if (E.vista === 'rutas') pintarRutas();
  if (E.vista === 'buscar') pintarListaCatalogo();
  if (E.vista === 'puntos') pintarListaPuntos();
}

/* ================== Acciones ================== */
async function manejarAccion(ev) {
  const b = ev.target.closest('[data-act]'); if (!b || b.disabled) return;
  if (ev.currentTarget === document && b.closest('.leaflet-popup')) return; // los popups tienen su propio oyente
  const a = b.dataset.act, id = b.dataset.id;
  switch (a) {
    case 'elegir-piloto': elegirPiloto(false); break;
    case 'poner-piloto': ponerPiloto(b.dataset.nombre); break;
    case 'cerrar': cerrarHoja(); break;
    case 'conf-si': { const f = E._conf; E._conf = null; cerrarHoja(); f && f(true); break; }
    case 'conf-no': cerrarHoja(); break;
    case 'ir': cambiarVista(b.dataset.vista); break;
    case 'capa': cambiarCapa(); break;
    case 'centrar':
      try { const p = await miPosicion(); mapa.setView(p, Math.max(mapa.getZoom(), 13)); } catch (e) { toast(e.message, 4000); }
      break;
    case 'punto-gps':
      toast('Buscando tu posición…', 6000);
      try { const p = await miPosicion(); mapa.setView(p, 15); toast('Aquí estás', 1000); abrirFormPunto({ lat: p[0], lng: p[1] }); }
      catch (e) { toast(e.message, 4000); }
      break;
    case 'punto-aqui': mapa.closePopup(); abrirFormPunto({ lat: +b.dataset.lat, lng: +b.dataset.lng }); break;
    case 'editar-punto': { mapa.closePopup(); const p = E.puntos.find(x => x.id === id); if (p) abrirFormPunto(p); break; }
    case 'borrar-punto': {
      if (!(await confirmar('¿Borrar este punto?', 'Borrar'))) return;
      try { await api('borrarPunto', id); E.puntos = E.puntos.filter(x => x.id !== id); refrescar(); toast('Punto borrado'); }
      catch (e) { toast('No se ha borrado: ' + (e.message || e), 4000); }
      break;
    }
    case 'ver-punto': {
      const p = E.puntos.find(x => x.id === id); if (!p) return;
      E.filtroTipoMapa = ''; pintarPuntosMapa(); cambiarVista('mapa');
      setTimeout(() => { mapa.setView([p.lat, p.lng], 15); E.marcadores[id] && E.marcadores[id].openPopup(); }, 60);
      break;
    }
    case 'filtro-mapa': E.filtroTipoMapa = b.dataset.tipo; pintarPuntosMapa(); break;
    case 'filtro-lista': E.filtroTipoLista = b.dataset.tipo; pintarListaPuntos(); break;
    case 'filtro-rutas': E.filtroRutas = b.dataset.v; pintarRutas(); break;
    case 'trazar': cambiarVista('mapa'); empezarTrazado(); break;
    case 'deshacer': deshacerParada(); break;
    case 'cancelar-trazado': cancelarTrazado(); break;
    case 'calcular': calcularTrazado(); break;
    case 'guardar-trazado': {
      const t = E.trazado;
      abrirFormRuta({ waypoints: t.wps, geometria: t.res.geometria, km: t.res.km, minutos: t.res.minutos, estado: 'pendiente', dificultad: 2, origen: 'trazada' });
      break;
    }
    case 'ver-ruta': verRuta(id); break;
    case 'cerrar-ruta': cerrarRutaMapa(); break;
    case 'editar-ruta': { const r = E.rutas.find(x => x.id === id); if (r) abrirFormRuta(r); break; }
    case 'borrar-ruta': {
      if (!(await confirmar('¿Borrar esta ruta? Sus puntos se quedan en el mapa.', 'Borrar ruta'))) return;
      try { await api('borrarRuta', id); E.rutas = E.rutas.filter(x => x.id !== id);
        E.puntos.forEach(p => { if (p.rutaId === id) p.rutaId = ''; }); cerrarRutaMapa(); refrescar(); toast('Ruta borrada'); }
      catch (e) { toast('No se ha borrado: ' + (e.message || e), 4000); }
      break;
    }
    case 'hecha': marcarHecha(id); break;
    case 'ver-cat': verCatalogo(id); break;
    case 'guardar-cat': guardarDesdeCatalogo(id); break;
    case 'sitio': {
      $('#res-sitio').hidden = true; $('#q-sitio').blur();
      mapa.flyTo([+b.dataset.lat, +b.dataset.lng], 13, { duration: .8 });
      break;
    }
  }
}

/* ================== Arranque ================== */
document.addEventListener('click', manejarAccion);
document.querySelectorAll('nav.abajo button').forEach(b => b.addEventListener('click', () => cambiarVista(b.dataset.vista)));
$('#velo').addEventListener('click', e => { if (e.target.id === 'velo') cerrarHoja(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#velo').classList.contains('abierto')) cerrarHoja(); });
$('#f-sitio').addEventListener('submit', async e => {
  e.preventDefault();
  const q = $('#q-sitio').value.trim(); if (!q) return;
  const caja = $('#res-sitio');
  caja.hidden = false; caja.innerHTML = '<div class="cargando">Buscando…</div>';
  try {
    const res = await buscarSitio(q);
    caja.innerHTML = res.length ? res.map(r => {
      const partes = r.display_name.split(', ');
      return `<button data-act="sitio" data-lat="${r.lat}" data-lng="${r.lon}">${esc(partes[0])}<small>${esc(partes.slice(1, 4).join(', '))}</small></button>`;
    }).join('') : '<div class="cargando">No encuentro ese sitio. Prueba con el nombre del pueblo.</div>';
  } catch (err) { caja.innerHTML = '<div class="cargando">Sin conexión con el buscador. Prueba en un momento.</div>'; }
});

iniciarMapa();
if (E.piloto && PILOTOS[E.piloto]) ponerPiloto(E.piloto);
api('obtenerDatos').then(d => {
  E.puntos = (d.puntos || []).map(normPunto);
  E.rutas = (d.rutas || []).map(normRuta);
  E.cargado = true;
  refrescar();
  if (E.puntos.length) {
    const b = L.latLngBounds(E.puntos.map(p => [p.lat, p.lng]));
    if (b.isValid()) mapa.fitBounds(b, { padding: [60, 60], maxZoom: 12 });
  }
  if (!E.piloto) elegirPiloto(true);
}).catch(e => toast('No se han podido cargar los datos: ' + (e.message || e), 6000));
