function Home() {
//   const highlights = [
//     'Santa Luzia - MG, Brasil',
//     '24 anos',
//     'Cargo alvo: Desenvolvedor Trainee Full Stack',
//   ]

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'APIs REST',
    'Git',
    'Linux (PM2/Nginx)',
    'SSL',
    'Scrum',
    'MySQL (nocoes)',
  ]

  const certifications = [
    'Curso Node.js',
    'Curso JavaScript Completo',
    'Curso JavaScript e TypeScript (Udemy)',
    'HTML, CSS e Bootstrap',
    'Curso de Enderecamento IPv4',
    'Curso Pratico de Redes de Computadores e Internet',
  ]

  const experiences = [
    {
      role: 'Desenvolvedor Full Stack',
      company: 'CIEEMG',
      period: 'Mar/2023 - Atual',
      location: 'Belo Horizonte - MG',
      bullets: [
        'Desenvolvimento e manutencao de sistemas web com React e Node.js.',
        'Integracao de APIs REST e evolucao de funcionalidades conforme regra de negocio.',
        'Deploy em Linux com PM2 e Nginx, incluindo configuracao e renovacao de SSL.',
        'Versionamento com Git, colaboracao em rituais Scrum e criacao de documentacao tecnica.',
      ],
    },
    {
      role: 'Estagiario em TI',
      company: 'CIEEMG',
      period: 'Ago/2022 - Mar/2023',
      location: 'Belo Horizonte - MG',
      bullets: [
        'Suporte tecnico presencial e remoto para hardware e software.',
        'Apoio em infraestrutura de rede, cabeamento e manutencao de estacoes.',
        'Atualizacao e organizacao de inventario de equipamentos de TI.',
      ],
    },
    {
      role: 'Auxiliar Administrativo',
      company: 'Saude PASA',
      period: 'Nov/2021 - Set/2022',
      location: 'Rio de Janeiro - RJ',
      bullets: [
        'Apoio em processos administrativos e organizacao de documentos.',
      ],
    },
  ]

  const projects = [
    {
      name: 'Cardapio SaaS Online',
      description:
        'Aplicacao SaaS para restaurantes com painel administrativo em React + TypeScript e API REST com autenticacao JWT, CRUD completo de categorias/produtos, upload de imagens e geracao de QR Code para cardapio publico.',
      imageUrl:
        'src/img/cardapio-online.png',
      liveUrl: 'https://sistema-de-cardapio-saas-re8mussd0-projetos-online.vercel.app/',
      tags: [
        'React',
        'TypeScript',
        'Node.js',
        'Axios',
        'React Hook Form + Zod',
        'JWT',
      ],
    },
    {
      name: 'Landing Page de Agencia de Viagem',
      description:
        'Projeto web para exibicao de destinos, passagens disponiveis e precos, com formulario de contato integrado ao banco para captura de leads e suporte ao fluxo comercial.',
      imageUrl:
        'src/img/projeto-viagens.png',
      liveUrl: 'https://site-viagem-o2vlkkesm-projetos-online.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'],
    },
  ]

  return (
    <main className="portfolio-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portifolio de Victor Hugo</p>
          <h1>
            Victor Hugo Nunes Oliveira
          </h1>
          <p className="hero-text">
            Desenvolvedor Full Stack formado em Sistemas de Informacao, com
            experiencia pratica em JavaScript, React e Node.js, focado em
            entregas colaborativas e evolucao continua.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="primary-action">
              Ver projetos
            </a>
            <a href="#contato" className="secondary-action">
              Falar comigo
            </a>
          </div>
          {/* <ul className="highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul> */}
        </div>

        <aside className="hero-card">
          {/* <p className="card-label">Cargo pretendido</p> */}
          <h2>Desenvolvedor Full Stack</h2>
          <div className="metrics">
            <div>
              <strong>3+ anos</strong>
              <span>experiencia em tecnologia</span>
            </div>
            <div>
              <strong>Estacio</strong>
              <span>Sistemas de Informacao (12/2025)</span>
            </div>
            <div>
              <strong>React + Node</strong>
              <span>stack principal de atuacao</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section about-section">
        <div>
          <p className="section-label">Resumo profissional</p>
          <h2>Experiencia pratica com produto, codigo e operacao em producao.</h2>
        </div>
        <p>
          Atuo no desenvolvimento e manutencao de sistemas web com integracao de
          APIs REST, versionamento com Git e publicacao em servidores Linux com
          PM2 e Nginx. Tenho perfil organizado, colaborativo e orientado a
          resultado, com foco em transformacao digital e trabalho em equipe.
        </p>
      </section>

      <section className="section skills-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-label">Habilidades</p>
          <h2 id="skills-title">Ferramentas que sustentam meu trabalho.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projetos">
        <div className="section-heading">
          <p className="section-label">Projetos pessoais</p>
          <h2>Projetos reais para validar arquitetura, produto e entrega.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="project-kicker">Projeto em destaque</p>
              <h3>{project.name}</h3>
              <img
                className="project-image"
                src={project.imageUrl}
                alt={`Preview do projeto ${project.name}`}
                loading="lazy"
              />
              <p>{project.description}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                Acessar projeto
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="section-heading">
          <p className="section-label">Experiencia profissional</p>
          <h2>Historico de atuacao com desenvolvimento e suporte.</h2>
        </div>

        <div className="experience-list">
          {experiences.map((job) => (
            <article className="experience-card" key={`${job.company}-${job.period}`}>
              <p className="project-kicker">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="experience-meta">
                {job.company} | {job.location}
              </p>
              <ul>
                {job.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" aria-labelledby="courses-title">
        <div className="section-heading">
          <p className="section-label">Cursos e certificacoes</p>
          <h2 id="courses-title">Formacao complementar em desenvolvimento e redes.</h2>
        </div>
        <div className="skill-grid">
          {certifications.map((course) => (
            <span key={course} className="skill-pill">
              {course}
            </span>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="contact-copy">
          <p className="section-label">Contato</p>
          {/* <h2>Aberto a oportunidades em Belo Horizonte e Regiao Metropolitana.</h2> */}
          {/* <p>
            Tenho disponibilidade para modelo hibrido ou presencial pontual, com
            interesse em trilha de crescimento em desenvolvimento full stack e
            plataformas corporativas.
          </p> */}
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
              <a
                href="https://www.linkedin.com/in/victor-hugo-28613422"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/VITAO23" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <a className="contact-link" href="mailto:victorhugonunesoliveira2002@gmail.com">
          Enviar e-mail
        </a>
      </section>
    </main>
  )
}

export default Home