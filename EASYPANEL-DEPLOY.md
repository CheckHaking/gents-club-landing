# 🚀 Despliegue en EasyPanel - Guía Paso a Paso

## 📋 Información del Servidor

| Campo | Valor |
|-------|-------|
| **IP** | 40.233.29.154 |
| **Panel** | http://40.233.29.154:3000 |
| **Email** | sergiomantunez@gmail.com |
| **Password** | 81985c6bdd99283f1589 |
| **Repositorio** | https://github.com/CheckHaking/gents-club-landing |

---

## 🎯 Paso 1: Acceder a EasyPanel

1. Abrir navegador
2. Ir a: **http://40.233.29.154:3000**
3. Iniciar sesión con:
   - Email: `sergiomantunez@gmail.com`
   - Password: `81985c6bdd99283f1589`

---

## 🔧 Paso 2: Conectar GitHub

### 2.1 Generar GitHub Personal Access Token

1. Ir a: https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. Configurar:
   - **Note:** `EasyPanel - Gents Club`
   - **Expiration:** `90 days` (o `No expiration`)
   - **Scopes:** Seleccionar:
     - ☑️ `repo` (Full control of private repositories)
     - ☑️ `admin:repo_hook` (Full control of repository hooks)
4. Click en **"Generate token"**
5. **⚠️ COPIAR EL TOKEN** (solo se muestra una vez)
   - Ejemplo: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 2.2 Agregar Token en EasyPanel

1. En EasyPanel, ir a **Settings** (⚙️) → **Git Providers**
2. Click en **"+ Add Provider"**
3. Seleccionar **GitHub**
4. Pegar el token generado
5. Click en **"Save"**

---

## 📦 Paso 3: Crear la Aplicación

### 3.1 Crear Nuevo Proyecto

1. En EasyPanel, click en **"+ Create"**
2. Seleccionar **"App"**

### 3.2 Configurar Source

```
┌─────────────────────────────────┐
│ Create App                      │
├─────────────────────────────────┤
│ Name: gents-club-landing        │
│                                 │
│ Source Type: Git                │
│ Provider: GitHub                │
│ Repository: CheckHaking/        │
│             gents-club-landing  │
│ Branch: main                    │
└─────────────────────────────────┘
```

### 3.3 Configurar Build

```yaml
Build Type: Nixpacks (auto-detect)

# O configuración manual:
Build Command: npm install && npm run build
Start Command: npx serve dist -l 3000

Environment: Node.js 20
Port: 3000
```

### 3.4 Variables de Entorno (Opcional)

Si tu app necesita variables:
```
NODE_ENV=production
```

---

## 🌐 Paso 4: Configurar Dominio

### Opción A: Sin Dominio (Acceso por IP)

EasyPanel generará automáticamente:
```
http://gents-club-landing.40.233.29.154.sslip.io
```

### Opción B: Con Dominio Propio

1. En la app, ir a **"Domains"**
2. Click en **"+ Add Domain"**
3. Ingresar dominio: `gentsclub.tudominio.com`
4. Configurar DNS en tu proveedor:
   ```
   Type: A
   Name: gentsclub (o @)
   Value: 40.233.29.154
   TTL: 300
   ```
5. Click en **"Enable SSL"** (Let's Encrypt)
6. EasyPanel configurará automáticamente:
   - Nginx reverse proxy
   - Certificado SSL
   - Renovación automática

---

## 🚀 Paso 5: Deploy

1. Click en **"Deploy"** (botón verde)
2. EasyPanel ejecutará:
   ```
   ✓ Cloning repository...
   ✓ Installing dependencies...
   ✓ Running build...
   ✓ Starting service...
   ✓ Health check passed
   ```
3. Ver logs en tiempo real en la pestaña **"Logs"**

---

## ✅ Paso 6: Verificar Despliegue

1. **Ver logs:** Pestaña "Logs" en EasyPanel
2. **Acceder a la app:**
   - Con dominio: `https://gentsclub.tudominio.com`
   - Sin dominio: URL generada por EasyPanel
3. **Verificar estado:** Indicador verde = Running ✅

---

## 🔄 Paso 7: Configurar Auto-Deploy

### Opción A: Deploy Automático (Recomendado)

1. En la app, ir a **"Settings"**
2. Activar **"Auto Deploy"**
3. Cada push a `main` → Deploy automático

### Opción B: Deploy Manual

1. Ir a la app en EasyPanel
2. Click en **"Deploy"** cuando quieras actualizar

---

## 📊 Paso 8: Monitoreo

### Recursos Disponibles

- **Logs:** Ver logs en tiempo real
- **Metrics:** CPU, RAM, Network
- **Shell:** Terminal dentro del container
- **Environment:** Editar variables

### Comandos Útiles en Shell

```bash
# Ver archivos
ls -la

# Ver proceso
ps aux

# Ver puerto
netstat -tulpn | grep 3000
```

---

## 🛠️ Configuración Avanzada

### Nginx Custom (Opcional)

Si necesitas configurar headers custom:

```nginx
# En EasyPanel → App → Settings → Nginx Config
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
```

### Health Checks

EasyPanel configura automáticamente:
```
Path: /
Interval: 10s
Timeout: 5s
```

### Resources Limits

```
CPU: 1 core
RAM: 512MB (ajustar según necesidad)
```

---

## 🔒 Seguridad

### Cambiar Password de EasyPanel

1. Ir a **Settings** → **Profile**
2. Click en **"Change Password"**
3. Ingresar:
   - Current password: `81985c6bdd99283f1589`
   - New password: (tu nueva contraseña segura)

### Backups

EasyPanel hace backups automáticos de la configuración.

Para código:
- Git es el backup (está en GitHub)
- EasyPanel puede restaurar cualquier commit

---

## 📈 Escalabilidad

### Múltiples Instancias

Si necesitas más capacidad:
1. Duplicar la app en EasyPanel
2. Configurar Load Balancer

### Base de Datos

Si necesitas agregar DB:
1. Crear servicio de PostgreSQL/MySQL en EasyPanel
2. Conectar desde la app vía variables de entorno

---

## 🆘 Troubleshooting

### Build Falla

**Error: Timeout durante npm install**
```
Solución: Aumentar build timeout en Settings
```

**Error: Out of memory**
```
Solución: Aumentar RAM limit en Resources
```

### App No Inicia

**Puerto incorrecto**
```bash
# Verificar que el puerto sea 3000
# Editar start command si es necesario
npx serve dist -l 3000
```

**Archivos no encontrados**
```bash
# Verificar que dist/ fue generado
# Ver logs de build
```

### SSL No Funciona

1. Verificar DNS apunta a 40.233.29.154
2. Esperar propagación DNS (hasta 48h)
3. Reintentar "Enable SSL" en EasyPanel

### Ver Logs Detallados

```bash
# En la pestaña Logs de EasyPanel
# Filtrar por nivel:
- All
- Error
- Warning
- Info
```

---

## 🎉 ¡Listo!

Tu landing page debería estar en línea en:
- **Con dominio:** https://gentsclub.tudominio.com
- **Sin dominio:** URL generada por EasyPanel

### Próximos Pasos

1. ✅ Agregar imágenes reales a la galería
2. ✅ Personalizar testimonios
3. ✅ Configurar dominio personalizado
4. ✅ Activar auto-deploy desde GitHub
5. ✅ Cambiar password de EasyPanel

---

## 📞 Soporte

**EasyPanel Docs:** https://easypanel.io/docs

**Tu Servidor:**
```bash
ssh main-server
# Para acceso directo al servidor
```

---

**Tiempo estimado de setup:** 10-15 minutos ⏱️
