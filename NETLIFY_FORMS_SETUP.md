# Configuración de Netlify Forms para el Formulario de Contacto

## ¿Qué es Netlify Forms?

Netlify Forms es un servicio integrado que permite recibir envíos de formularios sin necesidad de configurar un backend o servicios externos. Es completamente gratuito en el plan básico (hasta 100 envíos/mes).

## Ventajas de Netlify Forms

✅ **Gratis** - Hasta 100 envíos/mes en el plan gratuito  
✅ **Sin configuración adicional** - No necesitas EmailJS, backend, ni APIs  
✅ **Spam protection** - Protección automática contra spam  
✅ **Notificaciones por email** - Recibes los envíos directamente en tu email  
✅ **Dashboard** - Puedes ver todos los envíos en el panel de Netlify

## Pasos para Configurar

### 1. Desplegar en Netlify

Si aún no tienes el sitio desplegado en Netlify:

1. Ve a [netlify.com](https://www.netlify.com/)
2. Crea una cuenta o inicia sesión
3. Arrastra la carpeta `dist` (después de hacer `npm run build`) o conecta tu repositorio de Git

### 2. Configurar el Build

En la configuración de Netlify, asegúrate de tener:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 3. El Formulario Ya Está Configurado

El formulario ya tiene todos los atributos necesarios:

- `name="contacto"` - Identifica el formulario
- `data-netlify="true"` - Activa Netlify Forms
- `method="POST"` - Método HTTP correcto
- Campo oculto `form-name` - Requerido por Netlify
- Campo honeypot `bot-field` - Protección contra spam
- **Formulario Decoy** en `index.html` - Requerido para React (método recomendado)

**Nota importante**: Como estamos usando React, el formulario "Decoy" está incluido en el `index.html` fuera del contenedor de React. Esto permite que Netlify detecte el formulario durante el build.

### 4. Configurar Notificaciones por Email

1. Ve a tu dashboard de Netlify
2. Navega a **Forms** en el menú lateral
3. Busca el formulario llamado "contacto"
4. Haz clic en **Settings** (Configuración)
5. En **Form notifications**, haz clic en **Add notification**
6. Selecciona **Email notification**
7. Ingresa el email donde quieres recibir los envíos (ej: `hola@efedigital.com.ar`)
8. Personaliza el asunto y el mensaje si lo deseas
9. Guarda los cambios

### 5. Probar el Formulario

1. Despliega tu sitio en Netlify
2. Completa el formulario de contacto
3. Envía un mensaje de prueba
4. Verifica que recibas el email en la dirección configurada

## Estructura del Formulario

El formulario envía los siguientes campos:

- **nombre**: Nombre completo del usuario
- **email**: Email del usuario
- **servicio**: Servicio de interés seleccionado
- **mensaje**: Mensaje del usuario

## Personalizar las Notificaciones

Puedes personalizar el email de notificación usando variables:

```
Asunto: Nuevo contacto desde el sitio web - {{servicio}}

Mensaje:
Nombre: {{nombre}}
Email: {{email}}
Servicio: {{servicio}}

Mensaje:
{{mensaje}}
```

## Límites del Plan Gratuito

- **100 envíos/mes** - Suficiente para la mayoría de sitios pequeños
- Si necesitas más, puedes actualizar a un plan de pago

## Solución de Problemas

### El formulario no envía

1. Verifica que el sitio esté desplegado en Netlify (no funciona en desarrollo local)
2. Asegúrate de que el formulario tenga `data-netlify="true"`
3. Verifica que el campo oculto `form-name` esté presente

### No recibes los emails

1. Revisa la carpeta de spam
2. Verifica que las notificaciones estén configuradas en el dashboard de Netlify
3. Asegúrate de que el email esté correctamente escrito en la configuración

### El formulario aparece en el dashboard pero no recibes emails

1. Ve a **Forms** > **contacto** > **Settings**
2. Verifica que tengas una notificación de email activa
3. Prueba agregar otra notificación de email

## Alternativas de Notificación

Además de email, puedes configurar:

- **Slack notifications** - Recibe notificaciones en un canal de Slack
- **Webhooks** - Envía los datos a otro servicio
- **Zapier** - Integra con otras herramientas

## Migración desde EmailJS

Si estabas usando EmailJS:

1. ✅ Ya removimos la dependencia de `@emailjs/browser`
2. ✅ El formulario ahora usa Netlify Forms
3. ⚠️ Puedes eliminar las variables de entorno de EmailJS si las tenías
4. ⚠️ Puedes desinstalar EmailJS: `npm uninstall @emailjs/browser`

## Próximos Pasos

1. Despliega el sitio en Netlify
2. Configura las notificaciones por email
3. Prueba el formulario
4. ¡Listo! Ya estás recibiendo contactos automáticamente
