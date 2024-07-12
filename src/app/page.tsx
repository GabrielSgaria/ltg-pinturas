import Image from "next/image";

export default function Home() {
  return (
    <>
     <body className="bg-background text-foreground">
        <nav className="bg-primary text-primary-foreground p-4 flex justify-between items-center shadow-lg">
          <div className="text-xl font-bold">LTG Pinturas e Drywall</div>
          <button className="hidden md:block bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg shadow-md">Contato</button>
        </nav>
        <section className="p-8 md:p-16 text-center bg-gradient-to-r from-accent to-accent-foreground text-accent-foreground">
          <h1 className="text-4xl md:text-6xl font-bold">Serviços de alta qualidade</h1>
          <p className="text-lg md:text-xl mt-4">Garantindo satisfação e superando expectativas.</p>
        </section>
        <section className="p-8 md:p-16 bg-card text-card-foreground rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold">Sobre Nós</h2>
          <p className="mt-4">
            Na LTG Pinturas, somos especialistas em pinturas, drywall e reformas. Com uma equipe altamente qualificada, oferecemos serviços de alta qualidade, sempre visando a satisfação dos nossos clientes
            e superando suas expectativas.
          </p>
        </section>
        <section className="p-8 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold">Missão, Visão e Valores</h2>
          <h3 className="text-xl md:text-2xl font-bold mt-4">Missão</h3>
          <p>Transformar ambientes com qualidade e excelência, proporcionando satisfação e superando as expectativas de nossos clientes.</p>
          <h3 className="text-xl md:text-2xl font-bold mt-4">Visão</h3>
          <p>Ser referência no mercado de pinturas e reformas, reconhecida pela qualidade dos nossos serviços e pelo compromisso com a satisfação do cliente.</p>
          <h3 className="text-xl md:text-2xl font-bold mt-4">Valores</h3>
          <ul className="list-disc list-inside">
            <li>Qualidade</li>
            <li>Comprometimento</li>
            <li>Transparência</li>
            <li>Inovação</li>
            <li>Satisfação do Cliente</li>
          </ul>
        </section>
        <section className="p-8 md:p-16 bg-card text-card-foreground rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold">Serviços</h2>
          <ul className="mt-4">
            <li><strong>Pinturas Residenciais e Comerciais:</strong> Breve descrição do serviço.</li>
            <li><strong>Aplicação de Drywall:</strong> Breve descrição do serviço.</li>
            <li><strong>Reformas e Manutenções:</strong> Breve descrição do serviço.</li>
            <li><strong>Texturização e Acabamentos:</strong> Breve descrição do serviço.</li>
            <li><strong>Pintura de Fachadas:</strong> Breve descrição do serviço.</li>
            <li><strong>Serviços de Gesso:</strong> Breve descrição do serviço.</li>
            <li><strong>Pintura de Portas e Janelas:</strong> Breve descrição do serviço.</li>
          </ul>
        </section>
        <section className="p-8 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold">Portfólio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-muted rounded-lg overflow-hidden shadow-md">
              <Image src="https://openui.fly.dev/openui/400x300.svg?text=Project+1" width={900} height={900} alt="Project 1" className="w-full h-48 object-cover" />
              <p className="mt-2 p-4">Breve descrição do projeto 1.</p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden shadow-md">
              <Image src="https://openui.fly.dev/openui/400x300.svg?text=Project+2" width={900} height={900} alt="Project 2" className="w-full h-48 object-cover" />
              <p className="mt-2 p-4">Breve descrição do projeto 2.</p>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden shadow-md">
              <Image src="https://openui.fly.dev/openui/400x300.svg?text=Project+3" width={900} height={900} alt="Project 3" className="w-full h-48 object-cover" />
              <p className="mt-2 p-4">Breve descrição do projeto 3.</p>
            </div>
          </div>
        </section>
        <section className="p-8 md:p-16 bg-card text-card-foreground rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold">Depoimentos</h2>
          <div className="mt-4 space-y-4">
            <blockquote className="bg-muted p-4 rounded-lg shadow-md">
              Feedback do cliente 1.
              <footer className="text-right">Cliente 1</footer>
            </blockquote>
            <blockquote className="bg-muted p-4 rounded-lg shadow-md">
              Feedback do cliente 2.
              <footer className="text-right">Cliente 2</footer>
            </blockquote>
          </div>
        </section>
        <section className="p-8 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold">Contato</h2>
          <div className="mt-4">
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full p-2 rounded-lg border border-input" />
              <input type="email" placeholder="Email" className="w-full p-2 rounded-lg border border-input" />
              <textarea placeholder="Mensagem" className="w-full p-2 rounded-lg border border-input"></textarea>
              <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg shadow-md">Enviar</button>
            </form>
            <div className="mt-4 space-y-2">
              <p>Telefone: 123-456-7890</p>
              <p>Email: contato@ltgpinturas.com</p>
              <p>Endereço: Rua das Pinturas, 123</p>
            </div>
            <div className="mt-4">
              <Image src="https://openui.fly.dev/openui/600x400.svg?text=Mapa+da+Localização" width={900} height={900} alt="Mapa da Localização"  className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </section>
        <section className="p-8 md:p-16 bg-card text-card-foreground rounded-lg shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold">Blog</h2>
          <div className="mt-4 space-y-4">
            <article className="bg-muted p-4 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold">Título do Artigo 1</h3>
              <p>Descrição breve do artigo 1.</p>
            </article>
            <article className="bg-muted p-4 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-bold">Título do Artigo 2</h3>
              <p>Descrição breve do artigo 2.</p>
            </article>
          </div>
        </section>
        <footer className="bg-primary text-primary-foreground p-4 text-center shadow-lg">© 2023 LTG Pinturas e Drywall. Todos os direitos reservados.</footer>
      </body>
    </>
  );
}
