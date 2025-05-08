import { SimpleCard as SimpleCardOdin } from "@stone-payments/odin-legacy-stone/preact";
import { icons } from "@stone-payments/odin-icons";
import { ButtonProps } from "site/components/ui/Button.tsx";

export type IconsNames = keyof typeof icons;

export interface IconProps {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   * @title Icon
   * @format icon-select
   * @options site/loaders/icons.ts
   */
  iconsNames: string;
}

export interface ImageProps {
  alternativeText: string;
  width?: number;
  height?: number;
  path: string;
}

export interface IconDescription {
  iconName: IconsNames;
  description: string;
  text: string;
  classNameDescription?: string;
  classNameText?: string;
}

export interface Props {
  referId: string;
  tag?: string;
  title: string;
  description?: string;
  reverse: boolean;
  iconDescriptions: IconDescription[];
  image?: ImageProps;
  imageQuality?: number;
  buttons: ButtonProps[];
  variant?: "grid" | "flex" | "mobile-image-inverted";
  backgroundColor?: {
    id: number;
    color: string;
  };
  videoUrl?: string;
  gif?: string;
  icon: IconProps;
}

export default function SimpleCard({
  description = "Testando o componente Simple Card",
  backgroundColor,
  gif,
  imageQuality = 80,
  variant,
  videoUrl,
  buttons = [{ label: "Teste" }],
  iconDescriptions = [
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
  ],
  referId = "123",
  tag,
  reverse = false,
  title = "Testando Simple card",

  image = {
    path: "/site-stone/stamps/premio-ibest",
    alternativeText: "Uma imagem",
  },
}: Props) {
  return (
    <SimpleCardOdin
      referId={referId}
      buttons={buttons}
      iconDescriptions={iconDescriptions}
      reverse={reverse}
      title={title}
      image={image}
      backgroundColor={backgroundColor}
      description={description}
      gif={gif}
      imageQuality={imageQuality}
      tag={tag}
      variant={variant}
      videoUrl={videoUrl}
    />
  );
}
