import { CtaSection } from './ui/CtaSection';

interface ContactSectionProps {
  preselectedPlan?: string;
}

export function ContactSection({ preselectedPlan }: ContactSectionProps) {
  const headline = preselectedPlan
    ? `Discuss ${preselectedPlan} directly with our UK team.`
    : undefined;

  return <CtaSection id="contact" headline={headline} />;
}
