import DefaultRTBsO from "site/islands/DefaultRTBs.tsx";

export interface Cards {
  // deno-lint-ignore no-explicit-any
  icon: any;
  href: string;
  title: string;
  description: string;
}

export interface Props {
  referId: string;
  title: string;
  cards: Cards[];
}

//TODO: Fazer funcionar no admin e revisar o tipo de cons

export default function DefaultRTBs({
  referId = "234",
  title = "Tudo que o seu negócio precisa pra vender, gerir e girar",
  cards = [
    {
      icon: "coin",
      href: "https://www.stone.com.br/",
      title: "Tudo no App Stone",
      description:
        "Venda de várias formas, pague contas e faça toda sua gestão",
    },
    {
      icon: "boleto",
      href: "https://www.stone.com.br/",
      title: "Justo pro seu bolso",
      description: "Quanto mais seu negócio vende, menos taxa você paga",
    },
    {
      icon: "boleto",
      href: "https://www.stone.com.br/",
      title: "Melhor atendimento",
      description: "No seu balcão em todo Brasil ou no telefone em 5 segundos",
    },
    {
      icon: "pix",
      href: "https://www.stone.com.br/",
      title: "Totalmente integrado",
      description: "Conexão com +90 sistemas de gestão pra otimizar seu fluxo",
    },
  ],
}: Props) {
  return <DefaultRTBsO cards={cards} title={title} referId={referId} />;
}
