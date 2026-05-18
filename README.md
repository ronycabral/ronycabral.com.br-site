# ronycabral.com.br

Site pessoal de Rony Cabral — Empreendedor e Produtor Audiovisual.

Stack: Next.js 14 (App Router) · Tailwind CSS · TypeScript

---

## Rodar local

```bash
npm install
npm run dev
```

Acesse em [http://localhost:3000](http://localhost:3000).

---

## Adicionar um negócio

Edite `data/businesses.ts` e adicione um objeto ao array `businesses`:

```ts
{
  id: 7,
  categoria: 'Categoria',
  nome: 'Nome do negócio',
  descricao: 'Descrição curta e direta.',
  url: 'https://exemplo.com',
  cta: 'Texto do botão',
}
```

Salve o arquivo — o card aparece automaticamente na seção "O QUE CONSTRUO".

---

## Substituir a foto

1. Coloque seu arquivo de foto em `public/images/rony.jpg`
2. Dimensão recomendada: **800 × 1000 px** (proporção 4:5, retrato vertical)
3. O placeholder SVG em `public/images/rony-placeholder.svg` pode ser ignorado após substituição

> A imagem atual no código aponta para `/images/rony.jpg`. Mantenha esse nome ou atualize o caminho em `app/page.tsx`.

---

## Deploy na Hetzner (recomendado)

### 1. Criar VPS

- Acesse [hetzner.com/cloud](https://www.hetzner.com/cloud)
- Crie servidor **CAX11** (ARM, 2 vCPU, 4 GB RAM) — ~€4/mês
- Sistema operacional: **Ubuntu 22.04**
- Adicione sua chave SSH pública

### 2. Configurar o servidor

```bash
# Conectar via SSH
ssh root@SEU_IP

# Atualizar sistema
apt update && apt upgrade -y

# Instalar Node.js 20 via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Instalar PM2
npm install -g pm2

# Instalar Nginx
apt install -y nginx

# Instalar Git
apt install -y git
```

### 3. Fazer deploy da aplicação

```bash
# Clonar repositório (substitua pela sua URL)
git clone https://github.com/seu-usuario/ronycabral-site.git /var/www/ronycabral

cd /var/www/ronycabral

# Instalar dependências e fazer build
npm install
npm run build

# Iniciar com PM2
pm2 start npm --name "ronycabral" -- start
pm2 save
pm2 startup
```

### 4. Configurar Nginx como reverse proxy

```bash
nano /etc/nginx/sites-available/ronycabral
```

Cole o conteúdo:

```nginx
server {
    listen 80;
    server_name ronycabral.com.br www.ronycabral.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Ativar o site
ln -s /etc/nginx/sites-available/ronycabral /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 5. Apontar domínio para Cloudflare

1. Cadastre `ronycabral.com.br` no [Cloudflare](https://cloudflare.com) (plano Free)
2. Aponte os nameservers do domínio para os da Cloudflare
3. No painel Cloudflare, crie um registro **A** apontando para o IP da VPS
   - Nome: `@` → IP da VPS (proxy ativado — nuvem laranja)
   - Nome: `www` → IP da VPS (proxy ativado)
4. SSL/TLS → modo **Full** (ou Full Strict)
5. Cloudflare emite SSL grátis e serve como CDN automaticamente

### 6. Atualizar o site

```bash
cd /var/www/ronycabral
git pull
npm install
npm run build
pm2 restart ronycabral
```

---

## Estrutura de arquivos

```
ronycabral-site/
├── app/
│   ├── globals.css       # Variáveis CSS, Google Fonts, animações
│   ├── layout.tsx        # Metadata, OG tags
│   └── page.tsx          # Página principal (Hero + Negócios + Contato)
├── data/
│   └── businesses.ts     # Array de negócios — edite aqui
├── public/
│   └── images/
│       ├── rony.jpg              # ← SUBSTITUA PELA SUA FOTO
│       └── rony-placeholder.svg  # Placeholder visual
├── tailwind.config.ts
├── next.config.js
└── package.json
```
