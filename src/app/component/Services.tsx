import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Desenvolvimento Web Full-Stack",
      description: "Criação de aplicações web completas, desde o backend até o frontend, utilizando as mais recentes tecnologias.",
      items: [
        "Aplicações React e Next.js",
        "APIs RESTful e GraphQL",
        "Integração com bancos de dados",
        "Autenticação e autorização"
      ]
    },
    {
      title: "Consultoria Técnica",
      description: "Assessoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas.",
      items: [
        "Análise de arquitetura de software",
        "Recomendações de stack tecnológico",
        "Revisão de código e melhores práticas",
        "Planejamento de escalabilidade"
      ]
    },
    {
      title: "Otimização de Performance",
      description: "Melhoria do desempenho de aplicações existentes para uma experiência do usuário mais rápida e eficiente.",
      items: [
        "Análise e otimização de código",
        "Melhoria de tempo de carregamento",
        "Otimização de consultas de banco de dados",
        "Implementação de caching"
      ]
    },
  ]

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold mb-24 mt-12 text-center">Meus Serviços</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

