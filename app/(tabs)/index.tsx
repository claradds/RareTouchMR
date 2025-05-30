import React from "react";
import "./styles.css";

const App: React.FC = () => {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rare Touch</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <header>
          <div className="logo" aria-label="Logo Rare Touch">Rare Touch</div>
          <nav>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="hero" id="inicio">
            <h1>Cuide da sua pele com amor</h1>
            <p>Descubra nossa linha de produtos naturais e eficazes</p>
            <a href="#produtos" className="btn">Ver produtos</a>
          </section>

          <section className="catalogo" id="produtos">
            <h2>Produtos em destaque</h2>
            <div className="produtos">
              <div className="produto">
                <img
                  src="15601c43-d5c9-4562-8bbe-ad92978e71ef.png"
                  alt="Hidratante Facial"
                />
                <h3>Hidratante Facial</h3>
                <p>R$ 69,90</p>
              </div>

              <div className="produto">
                <img
                  src="b19f9a65-7e7c-42cd-90c5-410cd2c6cdf0.png"
                  alt="Sérum Vitamina C"
                />
                <h3>Sérum Vitamina C</h3>
                <p>R$ 89,90</p>
              </div>

              <div className="produto">
                <img
                  src="ea8936dc-092d-4cfe-b7c3-11631fdcff75.png"
                  alt="Máscara Facial"
                />
                <h3>Máscara Facial</h3>
                <p>R$ 79,90</p>
              </div>
            </div>
          </section>

          <section className="sobre" id="sobre">
            <h2>Sobre nós</h2>
            <p>
              A Rare Touch é uma marca dedicada ao cuidado com a pele, oferecendo
              produtos de alta qualidade e eficácia.
            </p>
          </section>

          <section className="contato" id="contato">
            <h2>Contato</h2>
            <p>Entre em contato conosco pelo email: contato@raretouch.com</p>
          </section>
        </main>

        <footer>
          <p>&copy; 2025 Rare Touch. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
};