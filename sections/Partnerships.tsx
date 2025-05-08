import { Partnerships as PartinershipsOdin } from "@stone-payments/odin-legacy-stone/preact";

interface ImageProps {
  alternativeText: string;
  width: number;
  height: number;
  path: string;
}
export interface Partners {
  mobile: ImageProps;
  tablet: ImageProps;
  web: ImageProps;
}

export interface Props {
  referId?: string;
  bg?: string;
  partners: Partners[];
}

export default function Partnerships({
  referId = "",
  bg = "bg-white",
  partners = [
    {
      mobile: {
        alternativeText: "levis",
        width: 79,
        height: 33,
        path: "/v1721758453/stone-cms/prod/levis_mobile_68a610c9c9.png",
      },
      tablet: {
        alternativeText: "levis",
        width: 79,
        height: 33,
        path: "/v1721758453/stone-cms/prod/levis_mobile_68a610c9c9.png",
      },
      web: {
        alternativeText: "levis",
        width: 96,
        height: 40,
        path: "/v1702404769/stone-cms/prod/logo_levis_web_169a8a33e9.webp",
      },
    },
    {
      mobile: {
        alternativeText: "alphabeto",
        width: 133,
        height: 40,
        path: "/v1721758453/stone-cms/prod/alphabeto_mobile_5a77aa51f8.png",
      },
      tablet: {
        alternativeText: "alphabeto",
        width: 133,
        height: 40,
        path: "/v1721758453/stone-cms/prod/alphabeto_mobile_5a77aa51f8.png",
      },
      web: {
        alternativeText: "alphabeto",
        width: 166,
        height: 50,
        path: "/v1721758766/stone-cms/prod/Camada_1_2_9671d8b208.png",
      },
    },
    {
      mobile: {
        alternativeText: "oakberry",
        width: 68,
        height: 100,
        path: "/v1721758453/stone-cms/prod/oak_mobile_31a728609c.png",
      },
      tablet: {
        alternativeText: "oakberry",
        width: 68,
        height: 100,
        path: "/v1721758453/stone-cms/prod/oak_mobile_31a728609c.png",
      },
      web: {
        alternativeText: "oakberry",
        width: 80,
        height: 116,
        path: "/v1721758453/stone-cms/prod/oak_mobile_31a728609c.png",
      },
    },
    {
      mobile: {
        alternativeText: "melissa",
        width: 102,
        height: 33,
        path: "/v1721758453/stone-cms/prod/melessa_mobile_2e51aea260.png",
      },
      tablet: {
        alternativeText: "melissa",
        width: 102,
        height: 33,
        path: "/v1721758453/stone-cms/prod/melessa_mobile_2e51aea260.png",
      },
      web: {
        alternativeText: "melissa",
        width: 113,
        height: 40,
        path: "/v1702404769/stone-cms/prod/logo_melissa_68775342e2.webp",
      },
    },
    {
      mobile: {
        alternativeText: "miniso",
        width: 46,
        height: 58,
        path: "/v1702404769/stone-cms/prod/logo_miniso_tablet_mobile_8b4194a2df.webp",
      },
      tablet: {
        alternativeText: "miniso",
        width: 46,
        height: 58,
        path: "/v1702404769/stone-cms/prod/logo_miniso_tablet_mobile_8b4194a2df.webp",
      },
      web: {
        alternativeText: "miniso",
        width: 56,
        height: 70,
        path: "/v1702404769/stone-cms/prod/logo_miniso_web_7a6e0535bc.webp",
      },
    },
    {
      mobile: {
        alternativeText: "julietto",
        width: 127,
        height: 33,
        path: "/v1721758453/stone-cms/prod/julieto_mobile_a26090f542.png",
      },
      tablet: {
        alternativeText: "julietto",
        width: 127,
        height: 33,
        path: "/v1721758453/stone-cms/prod/julieto_mobile_a26090f542.png",
      },
      web: {
        alternativeText: "",
        width: 155,
        height: 40,
        path: "/v1702404769/stone-cms/prod/logo_julietto_tablet_mobile_fbf44b9afa.webp",
      },
    },
  ],
}: Props) {
  return <PartinershipsOdin referId={referId} partners={partners} bg={bg} />;
}
