import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  const hardSkills = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", "TailwindCss", "Postgres","C#",".NET", "SQL Server", "Git & Github", "Docker", "Azure"
  ]
  const softSkills = [
    "Trabalho em equipe", "Rapida adaptação", "Grande capacidade na Resolução de problemas", "Comunicativo", "Liderança de equipes"
  ]

  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container flex flex-col m-auto">
        <h2 className="text-3xl font-bold mb-24 mt-24 text-center">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Experiência Profissional</CardTitle>
              <CardDescription>Minha jornada no desenvolvimento de web</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Com mais de 2 anos e 7 meses de experiência em desenvolvimento de projetos, 
                especializei-me na criação de aplicações web robustas e escaláveis. 
                Minha paixão por tecnologia e inovação me impulsiona a estar sempre em busca de novos desafios e conhecimentos e estar sempre
                atualizado com as mais recentes tendências, tecnologias e melhores práticas do mercado.
              </p>
              <p>
                Trabalhei em diversos projetos pessoais, desde o desenvolvimento de aplicativo <strong>Mobile</strong> até grandes aplicações como: <strong>NexusEarth</strong>: Motor de busca, simples porem estou trabalhando em melhorias dirariamente. <strong>Keppler ERP:</strong> para controle e gestao de estoque de micro-empresas, e <strong>EmpreGo:</strong> Site de vagas de emprego, que visa
                facilitar a vida dos profissionais na procura de emprego. E para empresas que buscam grandes talentos no mercado de trabalho, 
                sempre focando em entregar soluções de alta qualidade que atendam às 
                necessidades específicas de cada cliente.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hard Skills</CardTitle>
              <CardDescription>Tecnologias que domino</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>

            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>Areas de destaque</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>

          </Card>
        </div>
      </div>
    </section>
  )
}

