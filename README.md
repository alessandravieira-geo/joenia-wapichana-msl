# Novo site — Joênia Wapichana

Este pacote recria o site usando como referência o mockup enviado: fundo de papel, tipografia editorial,
paleta verde/roxo/laranja/dourado, elementos botânicos, linha do tempo, bloco de atuação e uma galeria em destaque.

A estrutura de conteúdo foi organizada para manter as áreas do site anterior:

- Início
- Trajetória
- Atuação
- Povos Indígenas
- Galeria
- Contato

## 1. Instalar

Recomendado: Node.js 18 ou superior.

Abra o terminal dentro desta pasta e execute:

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado pelo Vite (normalmente http://localhost:5173).

## 2. Publicar no GitHub

1. Crie um novo repositório no GitHub, por exemplo `joenia-wapichana-novo`.
2. No terminal, dentro desta pasta, execute:

```bash
git init
git add .
git commit -m "Novo site Joenia Wapichana"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/joenia-wapichana-novo.git
git push -u origin main
```

Se preferir, também pode criar o repositório pelo GitHub Desktop.

## 3. Publicar na Vercel

1. Entre na Vercel.
2. Clique em **Add New... > Project**.
3. Escolha o repositório do GitHub.
4. A Vercel deve detectar Vite automaticamente.
5. Clique em **Deploy**.

Não é necessário criar uma pasta `dist` manualmente para a Vercel.

## 4. Galeria

A galeria já está configurada para buscar as seis fotos que estavam no projeto original, pelos arquivos:

- joenia-1.jpg
- joenia-2.jpg
- joenia-5.jpg
- joenia-6.jpg
- joenia-9.jpg
- joenia-99.jpg

Por isso, o novo site pode exibir as mesmas fotos sem duplicá-las dentro deste ZIP.

Se alguma foto aparecer como "Foto não encontrada", abra `src/main.jsx` e altere o endereço da imagem.
A alternativa mais segura é colocar as fotos fisicamente em:

`public/assets/galeria/`

e usar caminhos como:

`/assets/galeria/joenia-1.jpg`

## 5. Onde alterar o conteúdo

Quase todo o texto está no arquivo:

`src/main.jsx`

A aparência está em:

`src/styles.css`

A ilustração principal está em:

`public/assets/joenia-portrait.png`

O arquivo `mockup-reference.png` não é necessário para o funcionamento do site; o layout foi reproduzido em código.
