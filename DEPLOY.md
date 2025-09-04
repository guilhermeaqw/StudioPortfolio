# 🚀 Deploy do LOVE STUDIOS Portfolio

## 📋 Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta no [Netlify](https://netlify.com)
- Repositório com o código do portfolio

## 🔧 Configuração do Netlify

### 1. Conectar ao GitHub
1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em "New site from Git"
3. Escolha "GitHub"
4. Autorize o Netlify a acessar seus repositórios
5. Selecione o repositório `StudioPortfolio`

### 2. Configurações de Build
- **Build command:** (deixe vazio - site estático)
- **Publish directory:** `.` (raiz do projeto)
- **Node version:** 18.x

### 3. Deploy Automático
- O Netlify fará deploy automático a cada push para a branch `main`
- Cada pull request criará um preview automático

## 🌐 Domínio Personalizado (Opcional)

1. No painel do Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure seu domínio (ex: `lovestudios.com`)

## 📁 Estrutura do Projeto

```
StudioPortfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript principal
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── netlify.toml       # Configuração do Netlify
├── package.json       # Configuração do projeto
├── .gitignore         # Arquivos ignorados
├── README.md          # Documentação
├── DEPLOY.md          # Este arquivo
├── 3DModel/           # Modelos 3D
├── Buildings/         # Construções
├── ConceptArt/        # Arte conceitual
├── Illustration/      # Ilustrações
├── GUI-UI/           # Interfaces
├── Rig/              # Rigging
└── Animations/       # Animações
```

## 🔄 Atualizações

Para atualizar o site:
1. Faça as alterações no código
2. Commit e push para o GitHub
3. O Netlify fará deploy automático

## 🛠️ Troubleshooting

### Problema: Site não carrega
- Verifique se o `index.html` está na raiz
- Confirme se todos os arquivos estão no repositório

### Problema: Imagens não aparecem
- Verifique se as pastas de imagens estão incluídas
- Confirme os caminhos no `script.js`

### Problema: CSS/JS não carrega
- Verifique se os arquivos `styles.css` e `script.js` existem
- Confirme os caminhos no `index.html`

## 📞 Suporte

- [Documentação do Netlify](https://docs.netlify.com)
- [GitHub Issues](https://github.com/seu-usuario/StudioPortfolio/issues)

---

**LOVE STUDIOS** - Criando experiências extraordinárias no Roblox 🎮
