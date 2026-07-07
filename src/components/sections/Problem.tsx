import { Cog, BarChart3, MessageCircleMore, Network } from "lucide-react";
import Card from "@/components/Card";

export default function Problem() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl max-w-3xl leading-snug">
        Quanto tempo — e quanto dinheiro — sua empresa ainda perde com
        tarefas que já poderiam estar automatizadas?
      </h2>
      <p className="text-gray-medium mt-4">
        Muitas empresas convivem diariamente com estes desafios:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        <Card icon={<Cog size={20} />} title="Processos manuais e repetitivos">
          Tarefas do dia a dia que consomem tempo da equipe e poderiam ser
          automatizadas.
        </Card>
        <Card icon={<BarChart3 size={20} />} title="Decisões sem dados">
          Decisões importantes tomadas na intuição, sem apoio de dados e
          análises do próprio negócio.
        </Card>
        <Card
          icon={<MessageCircleMore size={20} />}
          title="Atendimento que não escala"
        >
          Dificuldade em atender clientes com agilidade conforme o negócio
          cresce.
        </Card>
        <Card
          icon={<Network size={20} />}
          title="Soluções genéricas que não encaixam"
        >
          Ferramentas prontas que não resolvem o problema específico da sua
          operação.
        </Card>
      </div>
    </section>
  );
}
