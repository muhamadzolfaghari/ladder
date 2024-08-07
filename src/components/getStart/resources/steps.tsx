interface Step {
  imageSrc: string;
  title: string;
  description: string;
  nextLink?: string;
}

export const STEPS: Step[] = [
  {
    imageSrc: "/Images/startstep1.svg",
    title: "What is Ladder?",
    description:
      "Ladder is your roadmap for learning anything and tracking your progress. Our AI crafts a learning path tailored to your conditions and preferences.",
  },
  {
    imageSrc: "/Images/startstep2.svg",
    title: "How It Works?",
    description:
      "Simply provide an accurate and comprehensive prompt for our AI model, Gemini. It will then create a customized Ladder just for you.",
  },
  {
    imageSrc: "/Images/startstep3.svg",
    title: "Let’s Kick Off",
    description:
      "Create your first Ladder and start your journey. Whether it's small daily tasks or major milestones, Ladder supports you every step of the way.",
    nextLink: "/prompt-1",
  },
];
