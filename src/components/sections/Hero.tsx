import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <Logo className="mb-12" />

      <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl max-w-3xl leading-tight">
        SUA EQUIPE AUTOMATIZADA, SEU ATENDIMENTO ESCALADO, SUAS DECISÕES COM
        DADOS
      </h1>

      <p className="text-gray-medium mt-6 max-w-xl text-base md:text-lg">
        Soluções de inteligência artificial sob medida — sem contratar
        ninguém a mais
      </p>

      <span className="mt-16 text-sm text-gray-medium tracking-wide">
        Apresentação Comercial
      </span>

      <footer className="mt-4 text-xs text-gray-medium">
        hubtech.tec.br · Brasília-DF
      </footer>
    </section>
  );
}
