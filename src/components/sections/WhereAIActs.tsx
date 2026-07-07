import { Cog, MessageCircleMore, BarChart3, Network } from "lucide-react";
import Card from "@/components/Card";

export default function WhereAIActs() {
  return (
    <section className="px-6 py-16 sm:py-20 md:py-24 max-w-5xl mx-auto">
      <h2 className="font-display font-bold text-2xl md:text-3xl">
        Onde a IA atua no seu negócio
      </h2>
      <p className="text-gray-medium mt-4">
        Quatro frentes de aplicação prática, com exemplos reais de como isso
        funciona
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        <Card icon={<Cog size={20} />} title="Automação de Processos">
          <ul className="list-disc list-inside space-y-1">
            <li>Organização automática de documentos e planilhas</li>
            <li>Triagem e preenchimento de formulários sem esforço manual</li>
          </ul>
        </Card>
        <Card
          icon={<MessageCircleMore size={20} />}
          title="Atendimento Inteligente"
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Assistente que responde dúvidas frequentes 24 horas por dia</li>
            <li>
              Chatbot que qualifica clientes antes de repassar ao time
              comercial
            </li>
          </ul>
        </Card>
        <Card icon={<BarChart3 size={20} />} title="Análise de Dados e Decisão">
          <ul className="list-disc list-inside space-y-1">
            <li>Previsão de demanda e estoque para os próximos meses</li>
            <li>
              Identificação de padrões de consumo e comportamento do cliente
            </li>
          </ul>
        </Card>
        <Card icon={<Network size={20} />} title="Integração com Sistemas">
          <ul className="list-disc list-inside space-y-1">
            <li>IA conectada ao ERP ou CRM que a empresa já utiliza</li>
            <li>Relatórios automáticos reunindo dados de múltiplos sistemas</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
