# 📧 Proyecto EMAIL - Servidor de Envío de Correos

Este proyecto implementa un servidor en **Node.js** que permite **enviar correos electrónicos** mediante peticiones HTTP. Está estructurado en capas para mantener un código limpio, modular y escalable.

---

## 🗂️ Estructura del Proyecto

```
EMAIL/
│
├── Server/
│ ├── node_modules/
│ ├── src/
│ │ ├── Controller/
│ │ │ └── Enviar.Controller.js
│ │ ├── DataBase/
│ │ │ ├── db.db
│ │ │ └── db.js
│ │ ├── Routers/
│ │ │ └── Enviar.Routes.js
│ │ └── Utils/
│ │ └── Email.js
│ │
│ ├── .env
│ ├── app.js
│ ├── package.json
│ ├── package-lock.json
│ └── Readme.md
```


---

## 🚀 Funcionalidad Principal

El sistema permite **enviar correos electrónicos** utilizando librerías como **Nodemailer** 
### Flujo básico

1. **El usuario realiza una petición POST** al endpoint `/api/EnviarEmail`.
2. El router (`Enviar.Routes.js`) redirige la solicitud al controlador (`Enviar.Controller.js`).
3. El controlador procesa los datos y llama al servicio de envío (`Utils/Email.js`).
4. Se genera la respuesta con el estado del envío (éxito o error).

---

## ⚙️ Configuración del Entorno

Crea un archivo `.env` en la raíz del proyecto con tus credenciales y configuraciones de correo:

```env
PORT=3000
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña
EMAIL_SERVICE=gmail
```
