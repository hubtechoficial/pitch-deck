import { Search, Cog, ClipboardCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Diagnóstico",
    text: "Entendemos seu processo e identificamos onde a IA gera mais impacto para o negócio.",
  },
  {
    number: 2,
    icon: Cog,
    title: "Desenvolvimento",
    text: "Construímos a solução sob medida, testando e ajustando junto com a sua equipe.",
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: "Implementação",
    text: "Colocamos a solução em produção com o mínimo de disrupção possível.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Evolução Contínua",
    text: "Acompanhamos os resultados e evoluímos o modelo com o tempo.",
  },
];

export default function Method() {
  return (
    <section className="px-6 py-16 sm:py-20 md:py-24 max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl">
        Método Hub Tech de IA sob Medida
      </h2>
      <p className="text-gray-medium mt-4">
        Um processo contínuo, não um projeto pontual
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {steps.map(({ number, icon: Icon, title, text }) => (
          <div
            key={number}
            className="bg-surface border border-white/10 rounded-lg p-6 text-center"
          >
            <span className="text-primary font-display font-bold text-sm">
              {number}
            </span>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mt-3 mb-4">
              <Icon size={20} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-base mb-2">{title}</h3>
            <p className="text-gray-medium text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
