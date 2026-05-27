function LinkedInIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.94 8.5v12H3.2v-12h3.74Zm.24-3.71c0 1.07-.82 1.94-2.15 1.94h-.02C3.76 6.73 3 5.86 3 4.79 3 3.69 3.79 2.83 5.15 2.83c1.35 0 2.03.86 2.03 1.96ZM21 13.61V20.5h-3.73v-6.42c0-1.61-.58-2.71-2.04-2.71-1.12 0-1.78.75-2.07 1.48-.11.27-.14.65-.14 1.03v6.62H9.29s.05-10.74 0-11.86h3.73v1.68c.5-.78 1.39-1.89 3.39-1.89 2.48 0 4.59 1.62 4.59 5.18Z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 .47A9.52 9.52 0 0 0 2.5 12c0 4.19 2.71 7.75 6.47 9.01.47.08.64-.2.64-.45v-1.57c-2.63.57-3.19-1.1-3.19-1.1-.43-1.1-1.05-1.39-1.05-1.39-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.84 1.44 2.2 1.02 2.74.78.09-.61.33-1.02.6-1.25-2.1-.24-4.31-1.05-4.31-4.67 0-1.03.36-1.88.96-2.54-.1-.24-.42-1.2.09-2.5 0 0 .78-.25 2.56.97a8.87 8.87 0 0 1 4.66 0c1.77-1.22 2.55-.97 2.55-.97.52 1.3.2 2.26.1 2.5.6.66.95 1.51.95 2.54 0 3.63-2.21 4.43-4.32 4.67.34.29.64.86.64 1.74v2.58c0 .25.17.54.65.45A9.52 9.52 0 0 0 21.5 12a9.5 9.5 0 0 0-9.5-9.5Z" />
    </svg>
  )
}

function Home() {
  const highlights = [
    'Santa Luzia - MG, Brasil',
    '24 anos',

  ]

  const stack = [
    {
      title: 'Front-end',
      items: ['JavaScript', 'TypeScript', 'React', 'Vite', 'React Hook Form + Zod'],
    },
    {
      title: 'Back-end e Infra',
      items: ['Node.js', 'APIs REST', 'MySQL (noções)', 'Linux (PM2/Nginx)', 'SSL'],
    },
    {
      title: 'Entrega e qualidade',
      items: ['Git', 'Scrum', 'Integrações com API'],
    },
  ]

  const certifications = [
    'Curso Node.js',
    'Curso JavaScript Completo',
    'Curso JavaScript e TypeScript (Udemy)',
    'HTML, CSS e Bootstrap',
    'Curso de Enderecamento IPv4',
    'Curso Prático de Redes de Computadores e Internet',
  ]


  const experiences = [
    {
      role: 'Desenvolvedor Full Stack',
      company: 'CIEEMG',
      period: 'Mar/2023 - Atual',
      location: 'Belo Horizonte - MG',
      bullets: [
        'Desenvolvimento e manutenção de sistemas web com React e Node.js.',
        'Integração de APIs REST e evolução de funcionalidades conforme regra de negócio.',
        'Deploy em Linux com PM2 e Nginx, incluindo configuração e renovação de SSL.',
        'Versionamento com Git, colaboração em rituais Scrum e criação de documentação técnica.',
      ],
    },
    {
      role: 'Estagiário em TI',
      company: 'CIEEMG',
      period: 'Ago/2022 - Mar/2023',
      location: 'Belo Horizonte - MG',
      bullets: [
        'Suporte técnico presencial e remoto para hardware e software.',
        'Apoio em infraestrutura de rede, cabeamento e manutenção de estações.',
        'Atualização e organização de inventário de equipamentos de TI.',
      ],
    },
    {
      role: 'Auxiliar Administrativo',
      company: 'Saude PASA',
      period: 'Nov/2021 - Set/2022',
      location: 'Rio de Janeiro - RJ',
      bullets: ['Apoio em processos administrativos e organização de documentos.'],
    },
  ]

  const projects = [
    {
      name: 'Cardapio SaaS Online',
      description:
        'Aplicação SaaS para restaurantes com painel administrativo em React + TypeScript e API REST com autenticação JWT, CRUD completo de categorias/produtos, upload de imagens e geração de QR Code para cardápio público.',
      imageUrl: 'src/img/cardapio-online.png',
      liveUrl: 'https://sistema-de-cardapio-saas-re8mussd0-projetos-online.vercel.app/',
      tags: ['React', 'TypeScript', 'Node.js', 'Axios', 'React Hook Form + Zod', 'JWT'],
    },
    {
      name: 'Landing Page de Agencia de Viagem',
      description:
        'Projeto web para exibição de destinos, passagens disponíveis e preços, com formulário de contato integrado ao banco para captura de leads e suporte ao fluxo comercial.',
      imageUrl: 'src/img/projeto-viagens.png',
      liveUrl: 'https://site-viagem-o2vlkkesm-projetos-online.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'],
    },
    {
      name: 'Landing Page de Agencia de Viagem',
      description:
        'Projeto web para exibição de destinos, passagens disponíveis e preços, com formulário de contato integrado ao banco para captura de leads e suporte ao fluxo comercial.',
      imageUrl: 'src/img/projeto-viagens.png',
      liveUrl: 'https://site-viagem-o2vlkkesm-projetos-online.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'],
    },
  ]

  return (
    <>
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark"></span>
          <div>
            <strong>Victor Hugo</strong>
            <span>Full Stack</span>
          </div>
        </div>
        <nav className="site-nav">
          <a href="#sobre">Sobre</a>
          <a href="#stack">Stack</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato" className="nav-cta">Contato</a>
        </nav>
      </header>

      <main className="portfolio-shell">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Victor Hugo Nunes Oliveira</p>
            <h1>Desenvolvedor Full Stack focado em produto, código limpo e entrega.</h1>
            <p className="hero-text">
              Formado em Sistemas de Informação, com experiência em JavaScript, React e Node.js. Atuo com integração de APIs, deploy em Linux e manutenção de sistemas em produção.
            </p>
            <div className="hero-actions">
              <a href="#projetos" className="primary-action">Ver projetos</a>
              <a href="#contato" className="secondary-action">Falar comigo</a>
              <a href="/Curriculo_Victor_Hugo-dev.pdf" target="_blank" rel="noopener noreferrer" className="secondary-action">Abrir CV</a>
              <a href="/Curriculo_Victor_Hugo-dev.pdf" download="Curriculo_Victor_Hugo-dev.pdf" className="secondary-action">Download CV</a>
            </div>
            <ul className="highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <div className="hero-media">
              <img className="hero-photo" src="src/img/image.png" alt="Foto de Victor Hugo" />
            </div>
            <p className="card-label">Posicionamento</p>
            <h2>Desenvolvedor Full Stack</h2>
            <div className="metrics">
              <div>
                <strong>2+ anos</strong>
                <span>experiência em tecnologia</span>
              </div>
              <div>
                <strong>Estácio</strong>
                <span>Sistemas de Informação (12/2025)</span>
              </div>
              <div>
                <strong>React + Node</strong>
                <span>stack principal de atuação</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section about-section" id="sobre">
          <div>
            <p className="section-label">Resumo profissional</p>
            <h2>Experiência prática com produto, código e operação em produção.</h2>
          </div>
          <p>
            Atuo no desenvolvimento e manutenção de sistemas web com integração de APIs REST, versionamento com Git e publicação em servidores Linux com PM2 e Nginx. Tenho perfil organizado, colaborativo e orientado a resultado, com foco em transformação digital e trabalho em equipe.
          </p>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading">
            <p className="section-label">Stack</p>
            <h2 id="stack-title">Tecnologias organizadas por contexto de uso.</h2>
          </div>
          <div className="stack-grid">
            {stack.map((group) => (
              <article key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projetos">
          <div className="section-heading">
            <p className="section-label">Projetos pessoais</p>
            {/* <h2>Projetos reais para validar arquitetura, produto e entrega.</h2> */}
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <p className="project-kicker">Projeto em destaque</p>
                <h3>{project.name}</h3>
                <img className="project-image" src={project.imageUrl} alt={`Preview do projeto ${project.name}`} loading="lazy" />
                <p>{project.description}</p>
                <ul>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-metrics">
                  <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">Acessar projeto</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="section-heading">
            <p className="section-label">Experiência profissional</p>
            <h2>Histórico de atuação com desenvolvimento e suporte.</h2>
          </div>

          <div className="experience-list">
            {experiences.map((job) => (
              <article className="experience-card" key={`${job.company}-${job.period}`}>
                <p className="project-kicker">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="experience-meta">{job.company} | {job.location}</p>
                <ul>
                  {job.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* <section className="section principles-section">
          <div className="section-heading">
            <p className="section-label">Design system</p>
            <h2>Princípios que uso para manter consistência e credibilidade.</h2>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.title} className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section> */}

        <section className="section skills-section" aria-labelledby="courses-title">
          <div className="section-heading">
            <p className="section-label">Cursos e certificações</p>
            <h2 id="courses-title">Formação complementar em desenvolvimento e redes.</h2>
          </div>
          <div className="skill-grid">
            {certifications.map((course) => (
              <span key={course} className="skill-pill">{course}</span>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="contact-copy">
            <p className="section-label">Contato</p>
            <ul className="contact-list">
              <li>
                <a href="mailto:victorhugonunesoliveira2002@gmail.com">
                  victorhugonunesoliveira2002@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5531985592981">(31) 98559-2981</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/victor-hugo-286134221/" target="_blank" rel="noreferrer">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/VITAO23" target="_blank" rel="noreferrer">
                  <GithubIcon />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </section>
      </main>
    </>
  )
}

export default Home
