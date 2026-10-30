import buildingSvg from "../assets/icons/building.svg";
import buildingClickedSvg from "../assets/icons/building-clicked.svg";
import videoSvg from "../assets/icons/video.svg";
import videoClickedSvg from "../assets/icons/video-clicked.svg";
import aniversarioImage from "../assets/aniversario.png";
import infantilImage from "../assets/infantil.png";
import formaturaImage from "../assets/formatura.png";
import casamentoImage from "../assets/casamento.png";
import chaDeBebeImage from "../assets/cha-de-bebe.png";
import chaDePanelaImage from "../assets/cha-de-panela.png";
import carnavalImage from "../assets/carnaval.png";
import pascoaImage from "../assets/pascoa.png";
import festaJuninaImage from "../assets/festa-junina.png";
import halloweenImage from "../assets/halloween.png";
import natalImage from "../assets/natal.png";
import outroImage from "../assets/outro.png";

export const eventTypes = [
  {
    value: "presencial",
    label: "Presencial",
    icon: buildingSvg,
    selectedIcon: buildingClickedSvg,
  },
  {
    value: "online",
    label: "Online",
    icon: videoSvg,
    selectedIcon: videoClickedSvg,
  },
] as const;

export type EventType = (typeof eventTypes)[number]["value"];

export const defaultEventType = eventTypes[0].value;

export const inviteColors = [
  { name: "Azul", value: "var(--color-brand-light)" },
  { name: "Azul-marinho", value: "var(--color-navy)" },
  { name: "Roxo", value: "var(--color-purple)" },
  { name: "Fúcsia", value: "var(--color-fuchsia)" },
  { name: "Rosa", value: "var(--color-pink)" },
  { name: "Vermelho", value: "var(--color-danger)" },
  { name: "Laranja", value: "var(--color-orange)" },
  { name: "Amarelo", value: "var(--color-yellow)" },
  { name: "Verde-limão", value: "var(--color-lime)" },
  { name: "Verde", value: "var(--color-green)" },
  { name: "Ciano", value: "var(--color-cyan)" },

] as const;

export type InviteColor = (typeof inviteColors)[number]["value"];

export const defaultInviteColor = inviteColors[0].value;

export const eventThemes = [
  { name: "Aniversário", image: aniversarioImage },
  { name: "Infantil", image: infantilImage },
  { name: "Formatura", image: formaturaImage },
  { name: "Casamento", image: casamentoImage },
  { name: "Chá de bebê", image: chaDeBebeImage },
  { name: "Chá de panela", image: chaDePanelaImage },
  { name: "Carnaval", image: carnavalImage },
  { name: "Páscoa", image: pascoaImage },
  { name: "São João", image: festaJuninaImage },
  { name: "Halloween", image: halloweenImage },
  { name: "Natal", image: natalImage },
  { name: "Outro", image: outroImage },
] as const;

export type EventThemeName = (typeof eventThemes)[number]["name"];

export const defaultEventTheme = eventThemes[0].name;
