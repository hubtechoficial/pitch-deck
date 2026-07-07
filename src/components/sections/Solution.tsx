const tags = [
  "Automação de Processos",
  "Atendimento Inteligente",
  "Análise Preditiva de Dados",
  "Integração com Sistemas",
];

export default function Solution() {
  return (
    <section className="px-6 py-16 sm:py-20 md:py-24 max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl max-w-2xl leading-snug">
        Especialistas em inteligência artificial aplicada ao seu negócio
      </h2>

      <div className="bg-surface border border-white/10 rounded-lg p-8 mt-8">
        <p className="text-base md:text-lg leading-relaxed">
          <span className="text-primary font-semibold">
            Automatize processos, escale o atendimento e decida com mais
            dados
          </span>{" "}
          — a Hub Tech desenvolve, sob medida, as soluções de inteligência
          artificial que tornam isso possível para o seu negócio.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-semibold border border-primary/40 text-primary rounded-md px-4 py-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-medium italic text-sm mt-8">
        Soluções de IA construídas sob medida — não produtos genéricos de
        prateleira.
      </p>
    </section>
  );
}
