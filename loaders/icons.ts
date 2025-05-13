import { allowCorsFor, FnContext } from "deco/mod.ts";
import { AvailableIcons } from "../static/icons.ts";
import { icons as i } from "@stone-payments/odin-icons";
import { renderToString } from "preact-render-to-string";

/* const getSvgStringsPreact = (iconsObject: typeof i) => {
  const svgStringsObject: { [key: string]: string } = {};

  for (const key in iconsObject) {
    if (iconsObject.hasOwnProperty(key)) {
      const element = iconsObject[key as keyof typeof i]({}); // Renderiza o elemento passando um objeto vazio de props
      svgStringsObject[key] = renderToString(element);
    }
  }
  return svgStringsObject;
};

const svgIconsPreact = getSvgStringsPreact(i);

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA ", svgIconsPreact);
const a = {
  Rate: `<svg id="Rate" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5ZM3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 16C16.6716 16 16 16.6716 16 17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16ZM14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5Z"></path></svg>`,
  DolarOff: `<svg id="DolarOff" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="fill-current"><g clip-path="url(#clip0_47_1153)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V4C11 3.44772 11.4477 3 12 3Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1.29292 1.29289C1.68345 0.902369 2.31661 0.902369 2.70714 1.29289L22.7071 21.2929C23.0977 21.6834 23.0977 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29292 2.70711C0.902398 2.31658 0.902398 1.68342 1.29292 1.29289Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95236 7.04991C8.57131 6.38675 9.42614 6 10.3333 6H15.3333C15.8856 6 16.3333 6.44772 16.3333 7C16.3333 7.55228 15.8856 8 15.3333 8H10.3333C10.0028 8 9.67069 8.14003 9.41447 8.41455C9.15608 8.6914 9 9.08077 9 9.5C9 9.91923 9.15608 10.3086 9.41447 10.5854C9.67069 10.86 10.0028 11 10.3333 11H13.6667C14.5739 11 15.4287 11.3868 16.0476 12.0499C16.6644 12.7107 17 13.5932 17 14.5C17 15.4068 16.6644 16.2893 16.0476 16.9501C15.4287 17.6132 14.5739 18 13.6667 18H8C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H13.6667C13.9972 16 14.3293 15.86 14.5855 15.5854C14.8439 15.3086 15 14.9192 15 14.5C15 14.0808 14.8439 13.6914 14.5855 13.4146C14.3293 13.14 13.9972 13 13.6667 13H10.3333C9.42614 13 8.57131 12.6132 7.95236 11.9501C7.33559 11.2893 7 10.4068 7 9.5C7 8.59315 7.33559 7.71075 7.95236 7.04991Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C10.1586 2 8.43623 2.49679 6.95637 3.36302C6.47973 3.64202 5.86718 3.4818 5.58818 3.00517C5.30918 2.52853 5.4694 1.91597 5.94603 1.63698C7.72404 0.59623 9.79391 0 12 0C18.6274 0 24 5.37258 24 12C24 14.1841 23.4156 16.2347 22.394 18.0007C22.1175 18.4788 21.5057 18.6421 21.0277 18.3656C20.5496 18.0891 20.3862 17.4773 20.6628 16.9993C21.5131 15.5294 22 13.8231 22 12C22 6.47715 17.5228 2 12 2ZM2.97233 5.63439C3.45039 5.91094 3.61375 6.52267 3.33721 7.00073C2.48695 8.47057 2 10.1769 2 12C2 17.5228 6.47715 22 12 22C13.8231 22 15.5294 21.5131 16.9993 20.6628C17.4773 20.3862 18.0891 20.5496 18.3656 21.0277C18.6421 21.5057 18.4788 22.1175 18.0007 22.394C16.2347 23.4156 14.1841 24 12 24C5.37258 24 0 18.6274 0 12C0 9.81594 0.584388 7.76533 1.606 5.99927C1.88254 5.52121 2.49427 5.35785 2.97233 5.63439Z" /></g></svg>`,
  Sliders: `<svg id="Sliders" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4.55228 13 5 13.4477 5 14V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V14C3 13.4477 3.44772 13 4 13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C4.55228 2 5 2.44772 5 3V10C5 10.5523 4.55228 11 4 11C3.44772 11 3 10.5523 3 10V3C3 2.44772 3.44772 2 4 2Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11C12.5523 11 13 11.4477 13 12V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V12C11 11.4477 11.4477 11 12 11Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V3C11 2.44772 11.4477 2 12 2Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 15C20.5523 15 21 15.4477 21 16V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V16C19 15.4477 19.4477 15 20 15Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C20.5523 2 21 2.44772 21 3V12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12V3C19 2.44772 19.4477 2 20 2Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 14C0 13.4477 0.447715 13 1 13H7C7.55228 13 8 13.4477 8 14C8 14.5523 7.55228 15 7 15H1C0.447715 15 0 14.5523 0 14Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 7.44772 8.44772 7 9 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9C8.44772 9 8 8.55228 8 8Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 15.4477 16.4477 15 17 15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17H17C16.4477 17 16 16.5523 16 16Z" ></path></svg>`,
  Awards: `<svg id="Awards" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="fill-current"><g clip-path="url(#clip0_4974_59296)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2ZM4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8Z" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6585 12.8897C16.206 12.817 16.7087 13.202 16.7813 13.7495L17.9913 22.8695C18.0418 23.2501 17.8699 23.626 17.549 23.8368C17.2281 24.0476 16.8148 24.056 16.4855 23.8585L12 21.1672L7.51452 23.8585C7.18525 24.056 6.77193 24.0476 6.45099 23.8368C6.13004 23.6259 5.95817 23.25 6.00873 22.8693L7.21873 13.7593C7.29145 13.2118 7.79421 12.827 8.34169 12.8997C8.88917 12.9724 9.27403 13.4752 9.20132 14.0226L8.26447 21.0761L11.4855 19.1435C11.8022 18.9535 12.1978 18.9535 12.5145 19.1435L15.7359 21.0763L14.7987 14.0125C14.7261 13.465 15.111 12.9623 15.6585 12.8897Z" ></path></g><defs><clipPath id="clip0_4974_59296"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>`,
}; */

const icons = Object.keys(AvailableIcons).map((iconName) => ({
  component: AvailableIcons[iconName as keyof typeof AvailableIcons],
  label: iconName,
}));

// Loader para mapear todos os ícones disponíveis que serão usados nos widgets IconSelect.
export default function IconsLoader(
  _props: unknown,
  req: Request,
  ctx: FnContext
) {
  // Permitir Cors
  Object.entries(allowCorsFor(req)).map(([name, value]) => {
    ctx.response.headers.set(name, value);
  });

  // Mapeamento de ícones para { value, label, icon }
  const iconsMap = icons.map((icon) => ({
    icon: icon.component,
    label: icon.label,
    value: icon.label,
  }));

  return iconsMap;
}
