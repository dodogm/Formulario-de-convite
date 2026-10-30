import { useState } from "react";

import paintbrushIcon from "../../assets/icons/paintbrush-vertical.svg";
import {
  defaultEventTheme,
  defaultInviteColor,
  eventThemes,
  inviteColors,
  type EventThemeName,
  type InviteColor,
} from "../../data/invite-options";

export function EventPersonalizationSection() {
  const [selectedColor, setSelectedColor] =
    useState<InviteColor>(defaultInviteColor);
  const [selectedTheme, setSelectedTheme] =
    useState<EventThemeName>(defaultEventTheme);
  const [isLightStyle, setIsLightStyle] = useState(false);
  const [coverFileName, setCoverFileName] = useState("");

  return (
    <section id="personalization" className="pl-32.5 pr-32.5 mt-10">
      <fieldset>
        <legend className="mb-5 flex items-center gap-3 font-heading text-heading-sm text-text-heading">
          <img src={paintbrushIcon} alt="" aria-hidden="true" />
          Personalização
        </legend>

        <div>
          <p className="mb-4 font-body text-body-sm text-text-body">
            Cor principal
          </p>
          <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2">
            {inviteColors.map((color) => {
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
          <p className="mb-4 font-body text-body-sm text-text-body">
            Tema do evento
          </p>
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

        <div className="mt-8 flex  gap-4 sm:grid-cols-2 ">
          <div className=" w-44">
            <p className="mb-4 font-body text-body-sm text-text-body ">Estilo</p>
            <div className="flex items-center gap-3 ">
              <button
                type="button"
                role="switch"
                aria-checked={isLightStyle}
                aria-label="Estilo claro"
                onClick={() => setIsLightStyle((current) => !current)}
                className={`relative h-9 w-18 rounded-full border border-input-stroke  transition-colors focus-visible:outline-2 focus-visible:outline-brand-light ${
                  isLightStyle ? "bg-brand-light" : "bg-input-base"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-1 top-1 h-7 w-7 rounded-full  bg-text-heading transition-transform ${
                    isLightStyle ? "translate-x-9" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="font-body text-body-sm text-text-body ">
                {isLightStyle ? "Claro" : "Escuro"}
              </span>
            </div>
          </div>

          <div className="">
            <p className="mb-4 font-body text-body-sm text-text-body">
              Foto de capa
            </p>
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
                    setCoverFileName(
                      event.currentTarget.files?.[0]?.name ?? "",
                    )
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
  );
}
