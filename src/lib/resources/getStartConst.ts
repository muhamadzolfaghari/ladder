export interface Step {
    imageSrc: string;
    title: string;
    description: string;
    nextLink: string;
  }
  const steps: Step[] = [
    {
      imageSrc: 'android/android-launchericon-192-192.png',
      title: 'What is Ladder?',
      description: 'Ladder is your roadmap for learning anything and tracking your progress. Our AI crafts a learning path tailored to your conditions and preferences.',
      nextLink: '/?step=2',
    },
    {
      imageSrc: 'android/android-launchericon-192-192.png',
      title: 'How It Works?',
      description: 'Simply provide an accurate and comprehensive prompt for our AI model, Gemini. It will then create a customized Ladder just for you.',
      nextLink: '/?step=3',

    },
    {
      imageSrc: 'android/android-launchericon-192-192.png',
      title: 'Let’s Kick Off',
      description: "Create your first Ladder and start your journey. Whether it's small daily tasks or major milestones, Ladder supports you every step of the way.",
      nextLink: '/',

    },
  ];
  export default steps;