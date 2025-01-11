import { Github, Linkedin, X } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 m-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Guilherme Mafaldo. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/GuiMafaldo" target='_blank' rel='noopener noreferrer' className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/guimafaldo/" target='_blank' rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

