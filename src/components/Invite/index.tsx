import { AboutEventSection } from "./AboutEventSection";
import { ContactSection } from "./ContactSection";
import { EventPersonalizationSection } from "./EventPersonalizationSection";

export function Invite() {
  return (
    <main className="w-205 rounded-xl bg-shape-body p-6  sm:p-8">
      <h1 className="mt-15 w-[560] pl-32.5 pr-32.5 font-heading text-heading-md text-text-heading">
        Crie seu convite
      </h1>
      <AboutEventSection />
      <EventPersonalizationSection />
      <ContactSection />
    </main>
  );
}
