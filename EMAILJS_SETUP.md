# Configuración de EmailJS para el Formulario de Contacto

## Pasos para activar el envío de emails

### 1. Crear cuenta en EmailJS

1. Ve a https://www.emailjs.com/
2. Crea una cuenta gratuita (hasta 200 emails/mes)
3. Verifica tu email

### 2. Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Elige tu proveedor de email (Gmail, Outlook, etc.)
4. Conecta tu cuenta de email (hola@efedigital.com.ar)
5. Copia el **Service ID** que se genera

### 3. Crear un template de email

1. Ve a **Email Templates** en el dashboard
2. Haz clic en **Create New Template**
3. Configura el template con estos campos:

   - **To Email**: `hola@efedigital.com.ar`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`
   - **Subject**: `Nuevo contacto desde el sitio web - {{servicio}}`
   - **Content** (ejemplo):

     ```
     Nombre: {{from_name}}
     Email: {{from_email}}
     Servicio de interés: {{servicio}}

     Mensaje:
     {{message}}
     ```

4. Guarda el template y copia el **Template ID**

### 4. Obtener tu Public Key

1. Ve a **Account** > **General**
2. Copia tu **Public Key**

### 5. Configurar las credenciales en el proyecto

**Opción A: Usando archivo .env (Recomendado)**

1. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

2. Reinicia el servidor de desarrollo (`npm run dev`)

**Opción B: Configurar directamente en el código**

Edita `src/components/ContactForm.tsx` y reemplaza los valores en las líneas 101-103:

```typescript
const serviceId = "tu_service_id_aqui";
const templateId = "tu_template_id_aqui";
const publicKey = "tu_public_key_aqui";
```

### 6. Probar el formulario

1. Completa el formulario de contacto
2. Envía un mensaje de prueba
3. Verifica que recibas el email en hola@efedigital.com.ar

## Notas importantes

- ⚠️ **Nunca subas el archivo `.env` a Git** - agrégalo a `.gitignore`
- El plan gratuito de EmailJS permite 200 emails/mes
- Los emails se envían directamente desde el frontend, no necesitas backend
- Si necesitas más emails, puedes actualizar a un plan de pago en EmailJS

## Solución de problemas

- **Error "Por favor configura las credenciales"**: Verifica que hayas configurado las variables de entorno o los valores directos
- **Error al enviar**: Verifica que el Service ID, Template ID y Public Key sean correctos
- **No recibes emails**: Revisa la carpeta de spam y verifica que el template esté configurado correctamente
