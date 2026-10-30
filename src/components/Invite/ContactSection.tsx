import { useState, type FormEvent } from "react";

import checkedIcon from "../../assets/checked.svg";
import uncheckedIcon from "../../assets/unchecked.svg";
import contactIcon from "../../assets/icons/contact.svg";
import ticketIcon from "../../assets/icons/ticket.svg";
import circle from "../../assets/icons/circle-alert.svg";

const inputClassName =
  "w-full rounded-lg border border-input-stroke bg-input-base px-4 py-3 font-body text-body-md text-text-heading placeholder:text-input-placeholder focus:border-brand-light focus:outline-none";

const checkboxIconClassName =
  "mt-0.5 h-5 w-5 shrink-0 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand-light";

export function ContactSection() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [smsUpdates, setSmsUpdates] = useState(false);

  const nameHasError = nameTouched && name.trim() === "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNameTouched(true);
  }

  return (
    <section id="contact" className="mt-10 pl-32.5 pr-32.5 pb-20">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="mb-5 flex items-center gap-3 font-heading text-heading-sm text-text-heading">
            <img src={contactIcon} alt="" aria-hidden="true" />
            Dados para contato
          </legend>

          <div>
            <label
              className="mb-3 block font-body text-body-sm text-text-body"
              htmlFor="contact-name"
            >
              Nome
            </label>
            <input
              className={`${inputClassName} ${
                nameHasError ? "border-danger focus:border-danger" : ""
              }`}
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Nome completo"
              value={name}
              aria-invalid={nameHasError}
              aria-describedby={nameHasError ? "contact-name-error" : undefined}
              onChange={(event) => setName(event.currentTarget.value)}
              onBlur={() => setNameTouched(true)}
            />
            {nameHasError && (
              
              <p
              
                className="mt-2 flex items-center gap-3 font-body text-body-sm text-danger"
                id="contact-name-error"
                role="alert"
              >
                <img src={circle} alt="" />
                
                Campo obrigatório
              </p>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                className="mb-3 block font-body text-body-sm text-text-body"
                htmlFor="contact-email"
              >
                E-mail
              </label>

              <input
                required
                className={inputClassName}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="exemplo@email.com"
              />
            </div>

            <div>
              <label
                className="mb-3 block font-body text-body-sm text-text-body"
                htmlFor="contact-phone"
              >
                Telefone
              </label>

              <input
                className={inputClassName}
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(99) 99999-9999"
              />
            </div>
          </div>

          <div className="mt-10 border-t border-input-stroke pt-10">
            <div className="space-y-3">
              <div className="flex items-start gap-4 font-body text-body-sm text-text-body">
                <input
                  className="peer sr-only"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  aria-label="Li e concordo com os Termos e Condições e com a Política de Privacidade"
                  checked={termsAccepted}
                  onChange={(event) =>
                    setTermsAccepted(event.currentTarget.checked)
                  }
                />
                <label className="cursor-pointer" htmlFor="terms">
                  <img
                    aria-hidden="true"
                    className={checkboxIconClassName}
                    src={termsAccepted ? checkedIcon : uncheckedIcon}
                    alt=""
                  />
                </label>
                <span>
                  Li e concordo com os{" "}
                  <a
                    className="font-semibold text-brand-light underline"
                    href="/"
                  >
                    Termos e Condições
                  </a>{" "}
                  e com a{" "}
                  <a
                    className="font-semibold text-brand-light underline"
                    href="/"
                  >
                    Política de Privacidade
                  </a>
                </span>
              </div>

              <label className="flex items-start gap-4 font-body text-body-sm text-text-body">
                <input
                  className="peer sr-only"
                  type="checkbox"
                  name="emailUpdates"
                  checked={emailUpdates}
                  onChange={(event) =>
                    setEmailUpdates(event.currentTarget.checked)
                  }
                />
                <img
                  aria-hidden="true"
                  className={checkboxIconClassName}
                  src={emailUpdates ? checkedIcon : uncheckedIcon}
                  alt=""
                />
                <span>Aceito receber atualizações e promoções por e-mail</span>
              </label>

              <label className="flex items-start gap-4 font-body text-body-sm text-text-body">
                <input
                  className="peer sr-only"
                  type="checkbox"
                  name="smsUpdates"
                  checked={smsUpdates}
                  onChange={(event) =>
                    setSmsUpdates(event.currentTarget.checked)
                  }
                />
                <img
                  aria-hidden="true"
                  className={checkboxIconClassName}
                  src={smsUpdates ? checkedIcon : uncheckedIcon}
                  alt=""
                />
                <span>Aceito receber atualizações e promoções por SMS</span>
              </label>
            </div>
          </div>

          <div className="mt-16 flex justify-end">
            <button
              className="inline-flex items-center gap-4 rounded-lg bg-brand-mid px-6 py-4 font-body text-body-md font-semibold text-text-heading transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
              type="submit"
            >
              <img src={ticketIcon} alt="" aria-hidden="true" />
              Gerar convite
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
