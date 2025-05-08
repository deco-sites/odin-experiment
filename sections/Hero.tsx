import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ScrollingBar, Hero } from '@stone-payments/odin-legacy-stone/preact'

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
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div class="lg:container lg:mx-auto mx-4">
      <ScrollingBar phraseRepeats={50}  className="bg-stone-200">
      <div className="flex gap-8 justify-center items-center">
      <h6 className="font-display text-xl leading-5 text-display-900">
        Débito a partir de 0,79% l Crédito a partir de 2,99%
      </h6>
    </div>
    <div className="flex content-center items-center py-6 px-16 my-8 mr-8 ml-24 bg-stone-900 rounded-2xl">
      <p className="font-display text-xl font-bold text-white">
        🔥 Oferta exclusiva!
      </p>
    </div>
      </ScrollingBar>
  <div>
  <Hero
  background=""
       heading= {
       {
        title: "Título Principal do Hero",
       }
      }
      description= {
       { text: "Descrição persuasiva destacando os principais benefícios e propostas de valor.",}
      }
      buttons= {
        [
          {
            label: "Call to Action",
            variant: "primary",
            onClick: () => console.log("CTA clicked"),
          },
        ]
      }
      images= {
        {
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
        }
      }
      />
  </div>
    </div>
  );
}
