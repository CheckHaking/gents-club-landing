# 🚀 Guía de Despliegue - Gents Club Landing

## Servidor Oracle
- **IP:** 40.233.29.154
- **Usuario SSH:** sergioantunez
- **EasyPanel:** http://40.233.29.154:3000

---

## 📦 Opción A: Despliegue con EasyPanel (Recomendado)

### Paso 1: Acceder a EasyPanel

1. Abrir: http://40.233.29.154:3000
2. Login:
   - Email: `sergiomantunez@gmail.com`
   - Password: `81985c6bdd99283f1589`

### Paso 2: Crear Nueva App

1. Click en **"+ Create"** → **"App"**
2. Configurar:
   - **Name:** `gents-club-landing`
   - **Source:** GitHub
   - **Repository:** `CheckHaking/gents-club-landing`
   - **Branch:** `main`

### Paso 3: Configurar Build

```yaml
Build Command: npm install && npm run build
Start Command: npx serve dist -l 3000
Environment: Node.js
Port: 3000
```

### Paso 4: Configurar Dominio (Opcional)

1. En la app, ir a **"Domains"**
2. Agregar dominio: `gentsclub.tudominio.com`
3. EasyPanel configurará automáticamente:
   - Nginx reverse proxy
   - Certificado SSL con Let's Encrypt
   - Renovación automática

### Paso 5: Deploy

1. Click en **"Deploy"**
2. EasyPanel:
   - Clonará el repo
   - Instalará dependencias
   - Ejecutará build
   - Iniciará el servidor

**URL de acceso:** Se generará automáticamente o usará tu dominio.

---

## 🔧 Opción B: CI/CD con GitHub Actions

### Paso 1: Configurar SSH Key en GitHub

1. Ir a: https://github.com/CheckHaking/gents-club-landing/settings/secrets/actions
2. Agregar estos **Repository Secrets**:

```
SSH_HOST: 40.233.29.154
SSH_USER: sergioantunez
SSH_KEY: [contenido de ~/.ssh/ssh-key-2025-05-06.key]
SSH_PORT: 22
DEPLOY_PATH: /home/sergioantunez/apps/gents-club-landing
```

### Paso 2: Workflow de GitHub Actions

Ya está configurado en `.github/workflows/deploy.yml` (creado automáticamente).

### Paso 3: Configurar Nginx

```bash
# Conectar al servidor
ssh main-server

# Crear directorio de deploy
mkdir -p ~/apps/gents-club-landing

# Instalar Node.js si no está
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

# Instalar PM2 (process manager)
sudo npm install -g pm2

# Configurar Nginx
sudo nano /etc/nginx/conf.d/gents-club.conf
```

Contenido del archivo nginx:

```nginx
server {
    listen 80;
    server_name gentsclub.tudominio.com;  # Cambiar por tu dominio

    root /home/sergioantunez/apps/gents-club-landing/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caché para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Reiniciar Nginx:
```bash
sudo systemctl restart nginx
```

### Paso 4: Configurar SSL (Let's Encrypt)

```bash
# Instalar Certbot
sudo yum install -y certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d gentsclub.tudominio.com

# Renovación automática ya está configurada
```

### Paso 5: Deploy Automático

Cada push a `main` ejecutará:
1. Build del proyecto
2. Deploy via SSH al servidor
3. Reinicio del servicio

---

## 🔍 Verificación

### EasyPanel
- Acceder a la URL generada
- Verificar logs en el panel

### GitHub Actions
- Ver progreso en: https://github.com/CheckHaking/gents-club-landing/actions
- Verificar en: http://40.233.29.154 o tu dominio

---

## 🛠️ Comandos Útiles

### Conectar al servidor
```bash
ssh main-server
```

### Ver logs (si usas PM2)
```bash
pm2 logs gents-club
```

### Reiniciar app
```bash
pm2 restart gents-club
```

### Ver status
```bash
pm2 status
```

---

## 🔒 Seguridad

**Recomendaciones:**
1. Cambiar password de EasyPanel después del primer login
2. Configurar firewall para solo permitir puertos necesarios
3. Mantener Node.js actualizado
4. Configurar backups automáticos

---

## 📊 Monitoreo

**Con EasyPanel:**
- Dashboard con métricas en tiempo real
- Logs centralizados
- Alertas de errores

**Con GitHub Actions:**
- Ver historial de deploys
- Notificaciones de éxito/error

---

## 🆘 Troubleshooting

### Error de conexión SSH
```bash
# Verificar permisos de la key
chmod 600 ~/.ssh/ssh-key-2025-05-06.key

# Test de conexión
ssh -i ~/.ssh/ssh-key-2025-05-06.key sergioantunez@40.233.29.154
```

### Build falla
```bash
# Limpiar caché
rm -rf node_modules dist
npm install
npm run build
```

### Puerto ocupado
```bash
# Verificar qué usa el puerto
sudo lsof -i :3000

# Matar proceso si es necesario
sudo kill -9 <PID>
```

---

**¿Cuál opción prefieres?**
- **Opción A:** Más simple, UI amigable, SSL automático
- **Opción B:** Más control, personalización total
