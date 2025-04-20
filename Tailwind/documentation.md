<h1>Instalação do Tailwind CSS via CLI</h1>

<p>Para instalar o Tailwind CSS e sua interface de linha de comando (CLI), execute o seguinte comando:</p>

<pre>
<code>
npm install tailwindcss @tailwindcss/cli
</code>
</pre>

<h2>Adicionando o Tailwind ao projeto</h2>

<p>Crie um arquivo CSS de entrada (por exemplo, <code>input.css</code>) e adicione a seguinte linha para importar o Tailwind:</p>

<pre>
<code>
@import "tailwindcss";
</code>
</pre>

<h2>Gerando o CSS final</h2>

<p>Para compilar o CSS com o Tailwind e mantê-lo atualizado automaticamente, utilize o comando abaixo:</p>

<pre>
<code>
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
</code>
</pre>

<ul>
  <li><code>-i</code>: define o arquivo de entrada (<code>input.css</code>)</li>
  <li><code>-o</code>: define o arquivo de saída (<code>output.css</code>)</li>
  <li><code>--watch</code>: recompila automaticamente ao detectar alterações</li>
</ul>

<h2>Incluindo o CSS no HTML</h2>

<p>Após gerar o arquivo <code>output.css</code>, adicione-o ao seu HTML com a seguinte tag <code>&lt;link&gt;</code>:</p>

<pre>
<code>
&lt;link href="output.css" rel="stylesheet"&gt;
</code>
</pre>

<p>Seu arquivo HTML inicial pode ficar assim:</p>

<pre>
<code>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind</title>
    <link href="output.css" rel="stylesheet">
</head>
<body>

</body>
</html>
</code>
</pre>
