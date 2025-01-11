'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import listProjects, { Projetos } from '@/app/component/listProjects'


export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container m-auto">
        <h2 className="text-3xl font-bold mb-24 mt-12 text-center">Projetos Relevantes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listProjects.map((project: Projetos, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Projetos }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.image.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.image.length);
      }, 5000);

      return () => clearInterval(interval); 
    }
  }, [project.image]);

  return (
    <Card className="flex flex-col">
      <Image
        src={project.image[currentImageIndex]}
        alt={project.nome}
        width={400}
        height={200}
        className="object-cover h-48 w-full"
      />
      <CardHeader>
        <CardTitle>{project.nome}</CardTitle>
        <CardDescription>{project.descricao}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={project.link} target='_blank' rel='noopener noreferrer'>Ver Projeto</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
