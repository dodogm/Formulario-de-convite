import { useState } from "react";

import calendarSvg from "../assets/icons/calendar.svg"
import buildingSvg from "../assets/icons/building.svg"
import videoSvg from "../assets/icons/video.svg"
import aniversarioImage from "../assets/aniversario.png"
import infantilImage from "../assets/infantil.png"
import formaturaImage from "../assets/formatura.png"
import casamentoImage from "../assets/casamento.png"
import chaDeBebeImage from "../assets/cha-de-bebe.png"
import chaDePanelaImage from "../assets/cha-de-panela.png"
import carnavalImage from "../assets/carnaval.png"
import pascoaImage from "../assets/pascoa.png"
import festaJuninaImage from "../assets/festa-junina.png"
import halloweenImage from "../assets/halloween.png"
import natalImage from "../assets/natal.png"
import outroImage from "../assets/outro.png"

type EventType = "presencial" | "online";

const colors = [
  { name: "Azul", value: "#59b2ff" },
  { name: "Azul-marinho", value: "#6a59ff" },
  { name: "Roxo", value: "#b259ff" },
  { name: "Fúcsia", value: "#ff59f9" },
  { name: "Rosa", value: "#ff598b" },
  { name: "Vermelho", value: "#ff5959" },
  { name: "Laranja", value: "#ff8b59" },
  { name: "Amarelo", value: "#ffcd59" },
  { name: "Verde-limão", value: "#e1ff59" },
  { name: "Verde", value: "#59ff91" },
  { name: "Ciano", value: "#59fff9" },
];

const eventThemes = [
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
];

export function Invite() {
  const [eventType, setEventType] = useState<EventType>("presencial");
  const [selectedColor, setSelectedColor] = useState("#59b2ff");
  const [selectedTheme, setSelectedTheme] = useState("Aniversário");
  const [isLightStyle, setIsLightStyle] = useState(false);
  const [coverFileName, setCoverFileName] = useState("");

  const inputClassName =
    "w-full rounded-lg border border-input-stroke bg-input-base px-4 py-3 font-body text-body-md text-text-heading placeholder:text-input-placeholder focus:border-brand-light focus:outline-none"

  const labelClassName =
    "mb-4 mt-3 block font-body text-body-sm text-text-body"

  return (
    <main className="w-205 rounded-xl bg-shape-body p-6 sm:p-8">
      <h1 className=" pl-32.5 pr-32.5 mt-15 font-heading 
      text-heading-md text-text-heading w-[560]">
      
        Crie seu convite
      </h1>

      <section id="about">
      <form className="pl-32.5 pr-32.5 mt-10">

        <fieldset className="mt-4">

          <legend className="mb-5 font-heading text-heading-sm text-text-heading flex gap-3">
            <img src={calendarSvg} alt="" />
            Sobre o evento
          </legend>

          <div>
            <label className={labelClassName} htmlFor="event-title">
              Título
            </label>
            <input
              className={inputClassName}
              id="event-title"
              name="title"
              placeholder="Nome do evento"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClassName} htmlFor="event-start">
                Início
              </label>
              <input
                className={inputClassName}
                id="event-start"
                name="start"
                type="datetime-local"
              />
            </div>

            <div>
              <label className={labelClassName} htmlFor="event-end">
                Fim
              </label>
              <input
                className={inputClassName}
                id="event-end"
                name="end"
                type="datetime-local"
              />
            </div>

            <div>
              <span className="mb-4  block font-body text-body-sm text-text-body">Tipo</span>
              <div className="relative flex rounded-lg border border-input-stroke bg-input-base p-1">
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-shape-button transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                    eventType === "online" ? "translate-x-full" : ""
                  }`}
                />
                {(["presencial", "online"] as const).map((type) => {
                  const selected = eventType === type;

                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setEventType(type)}
                      className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 font-body text-body-sm ${
                        selected
                          ? "text-text-heading"
                          : "text-text-body"
                      }`}
                    >
                      <img
                        src={type === "presencial" ? buildingSvg : videoSvg}
                        alt=""
                        aria-hidden="true"
                      />
                      {type === "presencial" ? "Presencial" : "Online"}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-4 block font-body text-body-sm text-text-body" htmlFor="event-location">
                Local
              </label>
              <input
                className={inputClassName}
                id="event-location"
                name="location"
                placeholder="Link ou endereço"
              />
            </div>
          </div>

          <div>
            <label className={labelClassName} htmlFor="event-description">
              Descrição
            </label>
            <textarea
              className={`${inputClassName} min-h-40 resize-y`}
              id="event-description"
              name="description"
              placeholder="Escreva sobre os detalhes do evento"
            />
          </div>
        </fieldset>
      </form>
      </section>

      
      <section id="personalization" className="pl-32.5 pr-32.5 mt-10">
        <fieldset>
          <legend className="mb-5 flex items-center gap-3 font-heading text-heading-sm text-text-heading">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-text-body"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            >
              <path d="M14 4v5m-4-5v5M6 4v5a6 6 0 0 0 5 5.91V21h2v-6.09A6 6 0 0 0 18 9V4h-2v5H8V4H6Z" />
            </svg>
            Personalização
          </legend>

          <div>
            <p className="mb-4 font-body text-body-sm text-text-body">Cor principal</p>
            <div className="flex  flex-nowrap gap-3 overflow-x-auto pb-2">
              {colors.map((color) => {
                const selected = selectedColor === color.value;

                return (
                  <button
                    key={color.value}
                    type="button"
                    aria-label={`Selecionar cor ${color.name}`}
                    aria-pressed={selected}
                    onClick={() => setSelectedColor(color.value)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      selected ? "border-2 border-brand-light" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 rounded-full"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 font-body text-body-sm text-text-body">Tema do evento</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {eventThemes.map((theme) => {
                const selected = selectedTheme === theme.name;

                return (
                  <button
                    key={theme.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedTheme(theme.name)}
                    className={`overflow-hidden rounded-lg border-2 bg-shape-button text-center font-body text-body-sm text-text-body transition-colors hover:bg-shape-hover focus-visible:outline-2 focus-visible:outline-brand-light ${
                      selected ? "border-brand-light" : "border-input-stroke"
                    }`}
                  >
                    <img
                      src={theme.image}
                      alt=""
                      aria-hidden="true"
                      className="h-18 w-full object-cover"
                    />
                    <span className="block px-1 py-2">{theme.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-4 font-body text-body-sm text-text-body">Estilo</p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  role="switch"
                  aria-checked={isLightStyle}
                  aria-label="Estilo claro"
                  onClick={() => setIsLightStyle((current) => !current)}
                  className={`relative h-9 w-[72px] rounded-full border border-input-stroke transition-colors focus-visible:outline-2 focus-visible:outline-brand-light ${
                    isLightStyle ? "bg-brand-light" : "bg-input-base"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-1 top-1 h-7 w-7 rounded-full bg-text-heading transition-transform ${
                      isLightStyle ? "translate-x-9" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="font-body text-body-sm text-text-body">
                  {isLightStyle ? "Claro" : "Escuro"}
                </span>
              </div>
            </div>

            <div>
              <p className="mb-4 font-body text-body-sm text-text-body">Foto de capa</p>
              <div className="flex flex-wrap items-center gap-3">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-shape-button px-4 py-3 font-body text-body-sm text-text-heading transition-colors hover:bg-shape-hover focus-within:outline-2 focus-within:outline-brand-light">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-brand-light"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 16V4m0 0L8 8m4-4 4 4M5 14v5h14v-5" />
                  </svg>
                  Selecionar
                  <input
                    className="sr-only"
                    type="file"
                    accept="image/*"
                    aria-label="Selecionar foto de capa"
                    onChange={(event) =>
                      setCoverFileName(event.currentTarget.files?.[0]?.name ?? "")
                    }
                  />
                </label>
                <span className="font-body text-body-sm text-input-placeholder">
                  {coverFileName || "Nenhum arquivo selecionado"}
                </span>
              </div>
            </div>
          </div>
        </fieldset>

      </section>

    </main>
  );
}