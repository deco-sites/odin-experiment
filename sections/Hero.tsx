import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import {
  BestExperience,
  DefaultHero,
  Hero,
  Partnerships,
  SimpleCard,
} from "@stone-payments/odin-legacy-stone/preact";
import Features from "app-template/sections/Features.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];

  /**
   * @format icon-select
   * @options site/loaders/icons.ts
   */
  icon: string;
  /**
   * @default Um teste.
   */
  textLabel?: string;
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

const partnershipsMock = {
  id: "",
  referId: "",
  bg: "bg-white",
  partners: [
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
};

const bestExperience = {
  title: " Eleita pelos clientes como a melhor experiência do mercado",
  titleColor: "text-stone-500",
  stamps: [
    {
      id: 1,
      image: {
        path: "/site-stone/stamps/premio-ibest",
        alternativeText: "Premio ibest",
      },
    },
    {
      id: 2,
      image: {
        path: "/site-stone/stamps/RA-1000",
        alternativeText: "RA 1000",
      },
    },
    {
      id: 2,
      image: {
        path: "/site-stone/stamps/premio-whow",
        alternativeText: "Premio Whow",
      },
    },
  ],
  className:
    "flex justify-center items-center py-40 lg:py-80 px-24 2xl:px-0 w-full",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
  textLabel = "Um teste",
}: Props) {
  return (
    <>
      <div className="hidden text-[48px] max-w-72 h-[64px]" />
      <div className="lg:max-w-[210px] w-[40px] h-[40px] rounded-[8px]" />
      <div className="lg:h-[880px] h-[48px] md:min-h-[648px] flex absolute top-[260px] sm:top-[220px] md:top-[180px] lg:top-[205px] flex-col gap-24 justify-center items-center py-16 pl-24 w-full overflow-x-auto xl:justify-center pr-24" />
      <Hero
        background=""
        heading={{
          title: "Título Principal do Hero",
        }}
        description={{
          text: "Descrição persuasiva destacando os principais benefícios e propostas de valor.",
        }}
        buttons={[
          {
            label: "Call to Action",
            color: "primary",
            onClick: () => console.log("CTA clicked"),
          },
        ]}
        images={{
          web: {
            path: "https://res.cloudinary.com/dunz5zfpt/image/upload/v1743082095/stone-cms/prod/hero_maquina_de_cartao_mobile_5c2f82e30d.png",
            alternativeText: "Imagem ilustrativa do desktop",
          },
          mobile: {
            path: "https://res.cloudinary.com/dunz5zfpt/image/upload/v1741821577/stone-cms/prod/green_angels_stone_b111026c17.png",
            alternativeText: "Imagem ilustrativa mobile",
          },
          tablet: {
            path: "https://res.cloudinary.com/dunz5zfpt/image/upload/v1741821577/stone-cms/prod/green_angels_stone_b111026c17.png",
            alternativeText: "Imagem ilustrativa mobile",
          },
        }}
      />
      <nav class="lg:container lg:mx-auto mx-4">
        <div class="flex flex-col items-center gap-8">
          <div
            class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
              image
                ? PLACEMENT[placement]
                : "flex-col items-center justify-center text-center"
            } lg:py-36 gap-12 md:gap-20 items-center`}
          >
            {image && (
              <Image
                width={640}
                class="w-full lg:w-1/2 object-fit"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image}
                alt={image}
                decoding="async"
                loading="lazy"
              />
            )}
            <div
              class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
                image
                  ? "lg:w-1/2 lg:max-w-xl"
                  : "flex flex-col items-center justify-center lg:max-w-3xl"
              }`}
            >
              <div
                class="inline-block lg:text-[80px] text-4xl leading-none font-medium"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              ></div>
              <p class="text-lg md:text-md leading-[150%] border-solid border-black border-2 rounded-">
                {description}
              </p>
              <div class="flex items-center gap-3">
                <div className="flex flex-col gap-6 w-[1280px] max-h-full">
                  {/* <div
                  className="relative ml-8 flex h-40 min-h-[40px] w-40 min-w-[40px] cursor-pointer
                    items-center justify-center whitespace-normal rounded-[50%] bg-display-0 p-0 font-medium no-underline outline-none
                    sm:w-[fit-content]  rotate-90"
                /> */}

                  <Partnerships {...partnershipsMock} />

                  <BestExperience
                    title={bestExperience.title}
                    stamps={bestExperience.stamps}
                  />

                  <SimpleCard
                    buttons={[{ label: "Teste" }]}
                    iconDescriptions={[
                      {
                        iconName: "pix",
                        description: "Vamos ver se funciona assim",
                        text: "",
                      },
                      {
                        iconName: "pix",
                        description: "Vamos ver se funciona assim",
                        text: "",
                      },
                      {
                        iconName: "pix",
                        description: "Vamos ver se funciona assim",
                        text: "",
                      },
                    ]}
                    referId="123"
                    reverse={false}
                    title="Testando"
                    image={{
                      path: "/site-stone/stamps/premio-ibest",
                      alternativeText: "Uma imagem",
                    }}
                  />

                  <DefaultHero
                    title="Plataforma de pagamento online completa"
                    buttons={[{ label: "Venda com o Pagar.me" }]}
                    description="Impulsione suas conversões com o Pagar.me: a plataforma de pagamento que reúne tudo o que você precisa para vender online com alta performance."
                    images={{
                      mobile: {
                        alternativeText: "levis",
                        path: "/stone-cms/prod/capital_de_giro_stone_banner_header_web_ce72e787fd",
                      },
                      tablet: {
                        alternativeText: "levis",
                        path: "/stone-cms/prod/capital_de_giro_stone_banner_header_web_ce72e787fd",
                      },
                      web: {
                        alternativeText: "levis",
                        path: "/stone-cms/prod/capital_de_giro_stone_banner_header_web_ce72e787fd",
                      },
                    }}
                    tag=""
                  />

                  <Features
                    backgroundColor="bg-display-100"
                    iconBorder
                    cards={[
                      {
                        title: "Venda online",
                        description:
                          "No cartão, Pix, boleto e carteiras digitais",
                        classNameDescription: "",
                        icon: "phoneMobile",
                      },
                      {
                        title: "Checkout seguro",
                        description: "Ofereça a melhor experiência de compra",
                        classNameDescription: "",
                        icon: "securityShield",
                      },
                      {
                        title: "Proteção antifraude",
                        description: "Mais segurança para suas vendas",
                        classNameDescription: "",
                        icon: "securityShield2X",
                      },
                      {
                        title: "Split de Pagamento",
                        description: "Automatize a divisão de recebíveis",
                        classNameDescription: "",
                        icon: "money",
                      },
                    ]}
                  />
                </div>
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {textLabel}
                    {item?.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
