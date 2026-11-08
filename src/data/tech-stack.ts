export type Tech = {
  name: string
  category: 'Frontend' | 'Backend' | 'Banco de Dados' | 'Ferramentas'
}

export const techStack: Tech[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Banco de Dados' },
  { name: 'Prisma ORM', category: 'Banco de Dados' },
  { name: 'Vite', category: 'Ferramentas' },
  { name: 'Git & GitHub', category: 'Ferramentas' },
  { name: 'Vercel', category: 'Ferramentas' },
  { name: 'Docker', category: 'Ferramentas' },
]