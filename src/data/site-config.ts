// Qué páginas de /servicios se indexan.
//
// SERVICIOS_HUB_INDEXABLE: la página /servicios (listado). Publicada.
// SERVICIOS_INDEXABLES: las 5 páginas internas /servicios/*. Mientras sea false llevan
// noindex, quedan fuera del sitemap y llms.txt no las enlaza; al pasarlo a true las
// tres cosas cambian juntas.
export const SERVICIOS_HUB_INDEXABLE = true;
export const SERVICIOS_INDEXABLES = true;
