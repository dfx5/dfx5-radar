# DFX5 Radar

Hub interno de recursos técnicos para el equipo DFX5: cuentas AWS, instancias de Amazon Connect, Lambdas, logs y documentación — organizados por proyecto/cliente, con autogestión y permisos por equipo.

## Estructura del repo

```
.
├── docs/                # Frontend del prototipo (sin backend todavía)
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── .gitignore
└── README.md
```

## Prototipo

`docs/` contiene el frontend del prototipo: HTML, CSS y JS separados. No hay backend — los permisos (login por usuario, administradores de proyecto, etc.) se simulan con `localStorage` en el navegador. Sirve para validar el flujo con el equipo antes de invertir en la Fase 2 (backend real, ver Roadmap).

Categorías dentro del hub:

- **DFX5** — recursos generales de la empresa, visibles para todos. Solo el Admin DFX5 puede editarlos.
- **Clientes DFX5** — recursos por proyecto/cliente. Quien crea un proyecto es su primer administrador; un administrador puede dar acceso a más ingenieros, quienes también se vuelven administradores del proyecto.
- **Mis Links** — links propios y privados de cada persona.

### Ver el prototipo localmente

Abre `docs/index.html` directamente en el navegador (funciona sin servidor), o sirve la carpeta con cualquier servidor estático, por ejemplo:

```bash
cd docs
python3 -m http.server 8000
# abre http://localhost:8000
```

### Publicarlo con GitHub Pages (opcional)

En Settings → Pages del repo, selecciona la rama `main` y la carpeta `/docs` como origen. GitHub generará una URL pública para compartir el prototipo.

## Roadmap

1. **Fase 1 — Prototipo funcional** (lista): frontend navegable con búsqueda, filtros y autogestión, validado con datos de ejemplo. Sin backend — todo vive en `localStorage` del navegador.
2. **Fase 2 — Backend real + control de acceso**: persistencia en base de datos, autenticación del equipo y permisos por proyecto (hoy simulados en el cliente).
3. **Fase 3 — Integraciones**: notificaciones de cambios, inicio de sesión único (SSO) y sincronización automática con cuentas AWS.

## Contacto

Desireé López · desireelopezu@gmail.com
