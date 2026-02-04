export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Carter",
    role: "VP of Engineering",
    company: "HealthTech Solutions",
    quote:
      "Daniel is one of those rare engineers who understands both the code and the business. His architectural decisions in .NET reduced our processing time by 40%.",
    initials: "JC",
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    role: "Product Owner",
    company: "Fintech Global",
    quote:
      "Impeccable attention to detail. Daniel managed the entire ALM lifecycle for our core product, ensuring zero-downtime releases for months.",
    initials: "SR",
  },
];
