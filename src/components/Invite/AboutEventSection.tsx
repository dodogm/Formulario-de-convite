import { useState } from "react";

import calendarSvg from "../../assets/icons/calendar.svg";
import {
  defaultEventType,
  eventTypes,
  type EventType,
} from "../../data/invite-options";

const inputClassName =
  "w-full rounded-lg border border-input-stroke bg-input-base px-4 py-3 font-body text-body-md text-text-heading placeholder:text-input-placeholder focus:border-brand-light focus:outline-none";

const labelClassName =
  "mb-4 mt-3 block font-body text-body-sm text-text-body";

export function AboutEventSection() {
  const [eventType, setEventType] = useState<EventType>(defaultEventType);

  return (
    <section id="about">
      <form className="pl-32.5 pr-32.5 mt-10">
        <fieldset className="mt-4">
          <legend className="mb-5 flex gap-3 font-heading text-heading-sm text-text-heading">
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
              <span className="mb-4 block font-body text-body-sm text-text-body">
                Tipo
              </span>
              <div className="relative flex rounded-lg border border-input-stroke bg-input-base p-1">
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-shape-button transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                    eventType === "online" ? "translate-x-full" : ""
                  }`}
                />
                {eventTypes.map((type) => {
                  const selected = eventType === type.value;

                  return (
                    <button
                      key={type.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setEventType(type.value)}
                      className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 font-body text-body-sm ${
                        selected ? "text-text-heading" : "text-text-body"
                      }`}
                    >
                      <img
                        src={selected ? type.selectedIcon : type.icon}
                        alt=""
                        aria-hidden="true"
                      />
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label
                className="mb-4 block font-body text-body-sm text-text-body"
                htmlFor="event-location"
              >
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
  );
}
