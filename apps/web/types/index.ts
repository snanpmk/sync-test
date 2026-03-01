export interface Stat {
  label: string;
  value: string;
  trend: string;
}

export interface Step {
  title: string;
  text: string;
  icon?: any;
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EnterpriseFeature {
  title: string;
  text: string;
  icon?: any;
}

export interface EnterpriseEmployee {
  name: string;
  role: string;
  status: string;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ValueItem {
  title: string;
  text: string;
  icon: any;
}
