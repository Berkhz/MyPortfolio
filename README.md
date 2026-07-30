# Kauan Henrique Bertalha — Portfólio

Portfólio pessoal responsivo e **bilíngue (PT/EN)** de um engenheiro de software back-end,
feito com **HTML, CSS e JavaScript puro** — sem build, sem dependências, deploy direto no GitHub Pages.

🔗 **Live:** _(ative o GitHub Pages nas configurações do repositório)_

---

## ✨ Destaques

- **Single-page bilíngue** — troca de idioma sem duplicar HTML, via dicionário i18n em `script.js`
- **Dark / Light mode** persistido em `localStorage` (respeita a preferência do sistema no 1º acesso)
- **Idioma persistido** e detecção automática pelo navegador
- **Cases reais** — Velo (SaaS full-stack), Khrawk Labs, PowerTrain e outros
- **SEO + social preview** — meta description e Open Graph tags
- **Acessibilidade** — skip link, `aria-label`, HTML semântico, `prefers-reduced-motion`
- **Performance** — foto de perfil otimizada (~25 KB), fontes com `preconnect`
- **Animações sutis** de scroll com `IntersectionObserver`

---

## 📁 Estrutura

```
MyPortfolio/
├── index.html      # Página única bilíngue (elementos marcados com data-i18n)
├── en.html         # Redirect legado → index.html (mantém links antigos /en.html)
├── style.css       # Design system (tokens CSS), dark/light, responsivo
├── script.js       # i18n PT/EN + tema + idioma persistidos + scroll reveal
└── img/
    ├── perfil.jpg  # Foto de perfil otimizada
    └── codeman.png # Favicon
```

---

## 🌐 Como funciona o bilíngue

Cada texto traduzível tem um atributo `data-i18n="chave"`. O `script.js` guarda um dicionário
com as chaves em `pt-br` e `en`; ao trocar o idioma, ele percorre os elementos e substitui o texto.
Adicionar um novo texto = adicionar o `data-i18n` no HTML e a chave nos **dois** idiomas.

---

## 🚀 Deploy (GitHub Pages)

1. `Settings → Pages`
2. Source: branch `main`, pasta `/root`
3. Salvar — o site fica disponível em `https://berkhz.github.io/MyPortfolio/`

---

## 🛠️ Rodar localmente

Por usar `fetch`/`localStorage`, abra via servidor (não como `file://`):

```bash
python -m http.server 8000
# http://localhost:8000
```
