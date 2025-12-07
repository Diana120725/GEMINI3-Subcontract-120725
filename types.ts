export type Language = 'en' | 'tc';

export interface FlowerTheme {
  id: string;
  name: string;
  colors: {
    primary: string;    // Main background/header color
    secondary: string;  // Lighter accent
    accent: string;     // Button/Highlight color
    text: string;       // Text color for contrast
    gradient: string;   // Gradient class for hero backgrounds
  };
  icon: string;
}

export interface ContentStrings {
  title: string;
  subtitle: string;
  heroText: string;
  sections: {
    overview: string;
    workflow: string;
    process: string;
    support: string;
    faq: string;
  };
  overview: {
    scope: string;
    docs: string;
    approval: string;
    effectiveDate: string;
    docList: string[];
    approvalList: string[];
  };
  workflow: {
    applicant: string;
    system: string;
    review: string;
    result: string;
    notice: string;
    itCenter: string;
  };
  process: {
    anytime: string;
    steps: { title: string; desc: string }[];
  };
  support: {
    consulting: string;
    helpDesk: string;
    training: string;
    contactInfo: string;
  };
  faqTitle: string;
}

export interface Question {
  q: string;
  a: string;
}