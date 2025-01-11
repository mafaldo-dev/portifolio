import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/tech-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4">Desenvolvedor Full-Stack</h1>
        <p className="text-xl mb-8">Criando soluções inovadoras e eficientes para o seu negócio <br />
        Com as principais e melhores  tecnologias disponiveis no mercado.</p>
        <Button size="lg" asChild>
          <a className='font-bold text-lg' href="#contact">Entre em Contato</a>
        </Button>
      </div>
    </section>
  )
}

