# Como publicar o app Cifras

## 1. Suba o código no GitHub

1. Crie um repositório público em github.com (ex: `cifras`)
2. Faça upload dos arquivos: `index.html`, `manifest.json`, `sw.js`
3. Vá em **Settings → Pages**, escolha branch `main`, pasta `/` (root) e clique **Save**
4. Aguarde ~1 minuto — seu app estará em: `https://seu-usuario.github.io/cifras/`

---

## 2. Configure o Google Cloud Console (gratuito)

1. Acesse https://console.cloud.google.com/
2. Crie um projeto novo (ex: "Cifras")
3. No menu lateral: **APIs e serviços → Biblioteca** → busque **Google Drive API** → Ativar
4. Vá em **APIs e serviços → Credenciais** → **Criar credenciais → ID do cliente OAuth**
5. Tipo: **Aplicativo da Web**
6. Em **Origens JavaScript autorizadas**, adicione:
   - `https://seu-usuario.github.io`
7. Clique **Criar** e copie o **ID do cliente** (termina em `.apps.googleusercontent.com`)

> ⚠️ NÃO coloque uma URI de redirecionamento — o app usa o fluxo implícito (Token).

---

## 3. Configure o app

1. Abra o app no iPad: `https://seu-usuario.github.io/cifras/`
2. Toque em **"Configurar Client ID"**
3. Cole o ID do cliente que você copiou
4. Toque **Salvar e continuar**
5. Toque **Entrar com Google** — autorize o acesso ao Drive

---

## 4. Instale no iPad (opcional, mas recomendado)

1. No Safari, abra a URL do app
2. Toque no ícone de compartilhar (quadrado com seta ↑)
3. Role e toque **"Adicionar à Tela de Início"**
4. Confirme — o app vira um ícone na home, abre em tela cheia sem barra do Safari

---

## Organização dos PDFs no Drive

O app lista **todos os PDFs** do seu Drive. Para facilitar:
- Coloque suas cifras numa pasta chamada "Cifras" (o app mostra tudo, mas fica mais limpo)
- Nomeie os arquivos como: `Artista - Nome da música.pdf`
- Use a busca no app para filtrar rapidamente

---

## Funcionalidades

- 📚 **Biblioteca**: lista todos os PDFs do Drive, com busca
- ➕ **Adicionar à playlist**: toque no "＋" em qualquer cifra
- 📋 **Playlists**: organize por estilo, show, nível etc.
- 📖 **Leitor**: toque na cifra para abrir — deslize para virar página
- 🔄 **Atualizar**: botão ↻ na biblioteca recarrega do Drive

---

## Custo total: R$ 0,00
