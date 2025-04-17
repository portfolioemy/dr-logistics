"use client";
export interface Button {
  label: string;
  href: string;
  icon?: string;
  colorVariant?: "default" | "secondary";
  className?: string;
}

export interface HeroSectionType {
  image: string;
  title: string;
  subtitle: string;
  secTitle: string;
  content: string;
  buttons: Button[];
}

export interface SectionContent {
  title: string;
  content: string;
}

export interface Section {
  image?: string;
  reversed?: boolean;
  title?: string;
  content?: string;
  secContent?: string;
  imageSet?: string[];
  contentSet?: SectionContent[];
}

export interface CustomerReview {
  name: string;
  review: string;
  stars: string[];
}

export interface CustomersSection {
  title: string;
  subTitle: string;
  image: string;
  customers: CustomerReview[];
}

export interface Step {
  number: string;
  title: string;
  content: string;
  image: string;
}

export interface HowItWorks {
  title: string;
  steps: Step[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

export interface CTAButton {
  label: string;
  href: string;
  icon?: string;
  colorVariant?: "default" | "secondary";
  className?: string;
}

export interface FormSectionType {
  title: string;
  image: string;
}

export interface ComparisonItem {
  title: string;
  content: string[];
}

export interface ComparisonSectionType {
  title: string;
  secTitle: string;
  imageSet: string[];
  contentSet: ComparisonItem[];
}

export type CTASectionType = {
  ctaSection: {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    buttons: Array<{ label: string; href: string }>;
  };
  ctaSectionDealership: {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    buttons: Array<{ label: string; href: string }>;
  };
};

export interface CompletePageContent {
  hero: HeroSectionType;
  sections: Section[];
  customers: CustomersSection;
  howItWorks: HowItWorks;
  faqs: FAQSection;
  form: FormSectionType;
  comparison: ComparisonSectionType;
}
