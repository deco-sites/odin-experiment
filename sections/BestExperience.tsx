import { BestExperience as BestExperienceOdin } from "@stone-payments/odin-legacy-stone/preact";

export interface Stamps {
  id: number;
  image: {
    path: string;
    alternativeText: string;
  };
}

export interface Props {
  title: string;
  titleColor?: string;
  stamps: Stamps[];
  className: string;
}

export default function Partnerships({
  title = " Eleita pelos clientes como a melhor experiência do mercado",
  titleColor,
  stamps = [
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
  className = "flex justify-center items-center py-40 lg:py-80 px-24 2xl:px-0 w-full",
}: Props) {
  return (
    <BestExperienceOdin
      stamps={stamps}
      title={title}
      className={className}
      titleColor={titleColor}
    />
  );
}
