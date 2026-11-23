import { Analytics } from "@vercel/analytics/react"
import ProjectCarousel from "../../components/ProjectCarousel"
import type { Shot } from "../../components/ProjectCarousel"

const facts = [
  { label: 'Local', value: 'Santa Luzia — MG' },
  { label: 'Experiência', value: '3+ anos em desenvolvimento' },
  { label: 'Formação', value: 'Sistemas de Informação, Estácio (12/2025)' },
  { label: 'Stack principal', value: 'React, Node.js e TypeScript' },
]

const stack = [
  {
    title: 'Front-end',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'HTML e CSS', 'React Hook Form + Zod'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'APIs REST', 'JWT', 'Sequelize'],
  },
  {
    title: 'Banco de dados',
    items: ['MySQL (via Sequelize)', 'Redis', 'Supabase'],
  },
  {
    title: 'DevOps e entrega',
    items: ['Linux', 'Nginx', 'PM2', 'SSL', 'GitHub Actions (CI/CD)', 'Git'],
  },
  {
    title: 'Qualidade e segurança',
    items: ['Code review', 'Swagger', 'Postman', 'Validação de dados', 'Scrum'],
  },
]

const education = [
  'Bacharelado em Sistemas de Informação — Estácio (12/2025)',
  'Curso JavaScript e TypeScript (Udemy)',
  'Curso Node.js',
  'Curso JavaScript Completo',
  'HTML, CSS e Bootstrap',
  'Redes de Computadores e Endereçamento IPv4',
]

const experiences = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'CIEEMG',
    period: 'Mar 2023 — atual',
    location: 'Belo Horizonte, MG',
    bullets: [
      'Desenvolvimento e manutenção de sistemas corporativos com React, Node.js, TypeScript, Express e MySQL.',
      'Criação de APIs REST, integrações entre serviços, autenticação JWT e implementação de regras de negócio.',
      'Apoio técnico à equipe de desenvolvimento: revisão de código, organização de demandas e definição de boas práticas.',
      'Investigação e resolução de incidentes em produção, análise de logs e melhorias de segurança.',
      'Implantação e sustentação de aplicações em Linux com Nginx, PM2 e certificados SSL.',
      'Implementação e manutenção de pipelines de CI/CD com GitHub Actions.',
    ],
  },
  {
    role: 'Estagiário em TI',
    company: 'CIEEMG',
    period: 'Ago 2022 — Mar 2023',
    location: 'Belo Horizonte, MG',
    bullets: [
      'Suporte técnico presencial e remoto para hardware e software.',
      'Apoio em infraestrutura de rede, cabeamento e manutenção de estações.',
      'Atualização e organização de inventário de equipamentos de TI.',
    ],
  },
  {
    role: 'Auxiliar Administrativo',
    company: 'Saúde PASA',
    period: 'Nov 2021 — Set 2022',
    location: 'Rio de Janeiro, RJ',
    bullets: ['Apoio em processos administrativos e organização de documentos.'],
  },
]

type Project = {
  name: string
  status?: string
  description: string
  highlights: string[]
  images: Shot[]
  liveUrl: string
  repoUrl?: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Tá Confirmado',
    status: 'Em produção',
    description:
      'Plataforma de convites online e confirmação de presença (RSVP). O organizador cria o evento, compartilha um link pelo WhatsApp e acompanha em um painel quem confirmou e quantos acompanhantes vêm — sem que os convidados precisem criar conta.',
    highlights: [
      'Autenticação de organizadores e isolamento dos dados de cada evento no Supabase.',
      'Confirmação pública sem login, protegida contra bots com Cloudflare Turnstile.',
      'Controle de acompanhantes e indicadores do evento (respostas, ausências, pessoas esperadas).',
      'Painel com busca, filtro por presença, paginação, correção de respostas e exportação em CSV.',
      'Contato e nomes de acompanhantes ficam visíveis só para o organizador.',
    ],
    images: [
      { src: '/images/taconfirmado.png', caption: 'Página inicial' },
      { src: '/images/taconfirmado-painel.png', caption: 'Painel do organizador com a lista de convidados' },
      { src: '/images/taconfirmado-convite.png', caption: 'Convite público com confirmação de presença' },
      { src: '/images/taconfirmado-cadastro.png', caption: 'Cadastro do organizador' },
    ],
    liveUrl: 'https://taconfirmado.app.br/',
    tags: ['React', 'Node.js', 'Vite', 'Supabase', 'Zod', 'Vercel'],
  },
  {
    name: 'Cardápio SaaS Online',
    description:
      'Aplicação SaaS para restaurantes: painel administrativo para gerenciar o cardápio e uma página pública acessada pelo cliente via QR Code.',
    highlights: [
      'API REST em Node.js com autenticação JWT protegendo as rotas do painel.',
      'CRUD completo de categorias e produtos, com upload de imagens.',
      'Formulários validados no front-end com React Hook Form + Zod.',
      'Geração de QR Code que leva ao cardápio público do restaurante.',
    ],
    images: [{ src: '/images/cardapio-online.png', caption: 'Tela de login do painel' }],
    liveUrl: 'https://sistema-de-cardapio-saas-re8mussd0-projetos-online.vercel.app/',
    tags: ['React', 'TypeScript', 'Node.js', 'Axios', 'React Hook Form + Zod', 'JWT'],
  },
  {
    name: 'Landing page de agência de viagem',
    description:
      'Site para exibição de destinos, passagens disponíveis e preços, com formulário de contato integrado ao banco de dados.',
    highlights: [
      'Formulário de contato que grava os leads no banco via PHP, apoiando o fluxo comercial.',
    ],
    images: [{ src: '/images/projeto-viagens.png', caption: 'Página inicial' }],
    liveUrl: 'https://site-viagem-o2vlkkesm-projetos-online.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'],
  },
]

const contacts = [
  { label: 'E-mail', value: 'victorhugonunesoliveira2002@gmail.com', href: 'mailto:victorhugonunesoliveira2002@gmail.com' },
  { label: 'Telefone', value: '(31) 98559-2981', href: 'tel:+5531985592981' },
  { label: 'LinkedIn', value: 'in/victor-hugo-286134221', href: 'https://www.linkedin.com/in/victor-hugo-286134221/' },
  { label: 'GitHub', value: 'github.com/VITAO23', href: 'https://github.com/VITAO23' },
]

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <header className="section-head">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
    </header>
  )
}

function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#topo" className="topbar-name">Victor Hugo</a>
          <nav className="topbar-nav" aria-label="Seções">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#experiencia">Experiência</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main className="page" id="topo">
        <section className="intro">
          <p className="intro-meta">Victor Hugo Nunes Oliveira · Desenvolvedor Full Stack</p>
          <h1>
            Desenvolvo soluções Full Stack, da arquitetura à produção.
          </h1>

          <div className="intro-grid">
            <img className="intro-photo" src="/images/foto-my-2.jpeg" alt="Foto de Victor Hugo" />

            <div className="intro-body">
              <p className="lead">
                Desenvolvedor Full Stack com mais de 3 anos de experiência em React, Node.js,
                TypeScript e APIs REST. Atuo em sistemas corporativos, integração de serviços,
                segurança e entrega de aplicações em produção.
              </p>

              <dl className="facts">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="intro-actions">
                <a href="#projetos" className="btn btn-solid">Ver projetos</a>
                <a href="/Curriculo_Victor_Hugo_Nunes_Oliveira_Full_Stack.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                  Currículo (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <SectionHead index="01" title="Sobre" />
          <div className="section-body">
            <p className="prose">
              Atuo no desenvolvimento e manutenção de sistemas web com integração de APIs REST,
              versionamento com Git e publicação em servidores Linux com PM2 e Nginx. Tenho perfil
              organizado, colaborativo e orientado a resultado, com foco em transformação digital e
              trabalho em equipe.
            </p>

            <div className="stack">
              {stack.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <SectionHead index="02" title="Projetos" />
          <div className="section-body">
            {projects.map((project) => (
              <article key={project.name} className="project">
                <ProjectCarousel shots={project.images} projectName={project.name} />
                <div className="project-info">
                  {project.status && <p className="project-status">{project.status}</p>}
                  <h3>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {project.name} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p>{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="tags">{project.tags.join(' · ')}</p>
                  <p className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">Ver online ↗</a>
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">Código ↗</a>
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experiencia">
          <SectionHead index="03" title="Experiência" />
          <div className="section-body">
            {experiences.map((job) => (
              <article className="job" key={`${job.company}-${job.period}`}>
                <p className="job-period">{job.period}</p>
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-meta">{job.company} · {job.location}</p>
                  <ul>
                    {job.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead index="04" title="Formação" />
          <div className="section-body">
            <ol className="courses">
              {education.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section contact" id="contato">
          <SectionHead index="05" title="Contato" />
          <div className="section-body">
            <p className="contact-call">
              Vamos conversar? <a href="mailto:victorhugonunesoliveira2002@gmail.com">Me mande um e-mail.</a>
            </p>
            <dl className="contact-list">
              {contacts.map((c) => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>
                    <a
                      href={c.href}
                      {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Victor Hugo</span>
          <a href="#topo">Voltar ao topo ↑</a>
        </footer>
        <Analytics />
      </main>
    </>
  )
}

export default Home
