import http from 'http';

console.log("Projet CI/CD M1 Architecture des logiciels");

const PORT = 5000;

const server = http.createServer((req, res) => {
  // Réponse HTML
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>CICD</title>
      </head>
      <body>
        <h1>Bienvenue sur la page CICD 🚀</h1>
      </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
