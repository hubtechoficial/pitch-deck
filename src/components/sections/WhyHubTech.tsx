import { Handshake, MessageCircleMore, ShieldCheck, ClipboardCheck } from "lucide-react";
import Card from "@/components/Card";

export default function WhyHubTech() {
  return (
    <section className="px-6 py-16 sm:py-20 md:py-24 max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl">
        Por que escolher a Hub Tech
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        <Card
          icon={<Handshake size={20} />}
          title="Metodologia própria, não fórmula pronta"
        >
          Seguimos o Método Hub Tech de IA sob Medida — cada solução nasce
          do seu processo, não de um modelo genérico.
        </Card>
        <Card
          icon={<MessageCircleMore size={20} />}
          title="Comunicação sem jargão técnico"
        >
          Direto ao ponto, em linguagem executiva, para você decidir com
          segurança e sem precisar de um tradutor técnico.
        </Card>
        <Card
          icon={<ShieldCheck size={20} />}
          title="Dados protegidos, com rigor e LGPD"
        >
          Os dados usados no desenvolvimento e treinamento dos modelos
          seguem as boas práticas da Lei Geral de Proteção de Dados.
        </Card>
        <Card
          icon={<ClipboardCheck size={20} />}
          title="Acompanhamento próximo, direto de Brasília"
        >
          Relatórios claros sobre a evolução da solução, com um time local
          e acessível — não um call center.
        </Card>
      </div>
    </section>
  );
}
