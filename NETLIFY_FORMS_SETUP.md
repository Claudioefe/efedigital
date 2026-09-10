# Configuración de Netlify Forms para el Formulario de Contacto

## ¿Qué es Netlify Forms?

Netlify Forms es un servicio integrado que permite recibir envíos de formularios sin necesidad de configurar un backend o servicios externos. Es completamente gratuito en el plan básico (hasta 100 envíos/mes).

## Cómo está implementado

El sitio es Astro (HTML estático generado en build), así que el formulario de `/contacto` ya está presente como HTML real en el archivo que se sube a Netlify — **no hace falta ningún formulario "decoy"** (eso solo era necesario con la versión anterior en React, donde el formulario se renderizaba en el navegador y Netlify no podía verlo en build).

El formulario (`src/components/ContactForm.astro`) ya tiene todos los atributos necesarios:

- `name="contacto"` — identifica el formulario
- `data-netlify="true"` — activa Netlify Forms
- `method="POST"`
- Campo oculto `form-name` con el mismo valor (`contacto`)
- Campo honeypot `bot-field` (protección contra spam), con `netlify-honeypot="bot-field"` en el `<form>`

El envío está mejorado con un pequeño script (en el mismo componente) que hace el POST por `fetch` y muestra el estado de éxito/error sin recargar la página. Si JavaScript estuviera deshabilitado, el formulario igual funciona como un POST tradicional (Netlify procesa el envío igual).

Campos que envía: `nombre`, `email`, `necesidades` (lo que el usuario seleccionó con los chips), `mensaje`.

## Configuración en Netlify

El build está fijado en `netlify.toml` (`npm run build`, publish dir `dist`), así que no hace falta configurarlo a mano en el dashboard — pero si el sitio ya estaba conectado con otra configuración, verificá que coincida.

### Configurar notificaciones por email

1. Dashboard de Netlify → **Forms**
2. Buscá el formulario **contacto**
3. **Settings** → **Form notifications** → **Add notification** → **Email notification**
4. Ingresá el email donde querés recibir los envíos (ej: `claudioefe@icloud.com`)

### Probar el formulario

El formulario solo lo detecta y procesa Netlify **en un sitio ya deployado** (no funciona en `astro dev` local, ni en un preview que no pase por Netlify). Después de desplegar:

1. Completá el formulario en `/contacto`
2. Enviá un mensaje de prueba
3. Confirmá que aparece en el dashboard (**Forms** → **contacto**) y que llega el email de notificación

## Solución de problemas

- **El formulario no aparece en el dashboard de Netlify tras el deploy**: Netlify detecta forms escaneando el HTML generado en `dist/` durante el build — confirmá que `dist/contacto/index.html` contenga el `<form data-netlify="true" name="contacto">` (correr `npm run build` y revisar el archivo).
- **No llegan los emails**: revisá spam, y que la notificación esté configurada en **Forms** → **contacto** → **Settings**.
