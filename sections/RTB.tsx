import { icons } from "@stone-payments/odin-icons";
import RTBComponent from "../islands/RTBIsland.tsx";
import { ButtonProps } from "site/components/ui/Button.tsx";

export type IconsNames = keyof typeof icons;

export interface ImageCMSProps {
  alternativeText: string;
  width?: number;
  height?: number;
  path: string;
}

export interface Props {
  qrCodeLink?: string;
  viewButton?: boolean;
  primaryButton?: number;
  id: number;
  referId?: string;
  title: string;
  description: string;
  image: ImageCMSProps;
  features: IconTitleDescriptionProps[];
  buttons: ButtonProps[];
}

export interface IconTitleDescriptionProps {
  title: string;
  id: number;
  description: string;
  subDescription?: string;
  tag?: string;
  icon: IconsNames;
}

export default function RTB({
  buttons = [{ label: "Teste" }],
  description = "Receba pagamentos recorrentes por cartão de crédito, débito Pinless e boleto. Crie e gerencie suas assinaturas de forma simples e eficiente.",
  features = [
    {
      title: "Retentativas",
      id: 1,
      description:
        "Se um pagamento falhar, realizamos várias tentativas antes de suspender a assinatura.",
      subDescription: "",
      tag: "",
      icon: "pix",
    },
    {
      title: "Retentativas",
      id: 2,
      description:
        "Se um pagamento falhar, realizamos várias tentativas antes de suspender a assinatura.",
      subDescription: "",
      tag: "",
      icon: "pix",
    },
    {
      title: "Retentativas",
      id: 4,
      description:
        "Se um pagamento falhar, realizamos várias tentativas antes de suspender a assinatura.",
      subDescription: "",
      tag: "",
      icon: "pix",
    },
    {
      title: "Retentativas",
      id: 3,
      description:
        "Se um pagamento falhar, realizamos várias tentativas antes de suspender a assinatura.",
      subDescription: "",
      tag: "",
      icon: "pix",
    },
  ],
  id = 1,
  image = {
    path: "/stone-cms/prod/rtb_machine_11fde68437",
    alternativeText: "Uma imagem",
  },
  title = "Solução completa e flexível de recorrência",
  primaryButton,
  qrCodeLink,
  referId,
  viewButton,
}: Props) {
  return (
    <RTBComponent
      buttons={buttons}
      description={description}
      features={features}
      id={id}
      image={image}
      title={title}
      primaryButton={primaryButton}
      qrCodeLink={qrCodeLink}
      referId={referId}
      viewButton={viewButton}
    />
  );
}
