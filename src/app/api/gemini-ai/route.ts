import {NextRequest, NextResponse} from "next/server";

import {GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


export async function POST(request: NextRequest) {
  NextResponse.json({res: await run()})
  // const url =
  //   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCWxoLsLt5_xn7d4QtCcIZmSshzdTiNVNc";
  //
  // try {
  //   const { prompt } = await request.json();
  //
  //   if (!prompt) {
  //     return NextResponse.json(
  //       { error: "Prompt is required" },
  //       { status: 400 }
  //     );
  //   }
  //
  //   const data = {
  //     contents: [
  //       {
  //         parts: [{ text: "" }, { text: prompt }],
  //       },
  //     ],
  //   };
  //
  //   const response = await axios.post(url, data, {
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   return NextResponse.json(response.data, { status: 200 });
  // } catch (error) {
  //   console.error("Error:", error);
  //   return NextResponse.json(
  //     {
  //       error:
  //         (error as { response: { data: string } })?.response?.data ||
  //         "An error occurred",
  //     },
  //     { status: 500 }
  //   );
  // }
}


async function run() {
  const parts = [
    {text: "you are a mentor who is supposed to give a learning paths. your paths should be concise and realistic, well structured with phase parts, each phase containing a daily/weekly routine of small tasks."},
    {text: "input: 1. Field of Study: Key topics: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Git, deployment processes. Foundational knowledge: Basic computer science principles, understanding of HTTP and RESTful APIs.  2. Goal: To become proficient in full-stack web development. Achieve competency in building and deploying fully functional web applications. Obtain a certification in web development within 12 months.  3. Current Level: Basic understanding of HTML, CSS, and JavaScript. No prior experience with backend development or databases.  4. Time Commitment: 2 hours daily on weekdays. 4 hours on weekends.  5. Preferred Learning Style: Combination of reading, watching videos, and hands-on practice. Prefer structured online courses with projects and quizzes.  6. Learning Pace: Moderate pace, aiming to complete beginner to advanced material within 12 months. Specific goal to complete beginner level in 3 months, intermediate in 6 months, and advanced in 12 months.  7. Resources Available: Budget of $500 for courses, books, and tools. Access to a personal laptop with internet connectivity. Support System: Mentor available for weekly check-ins and guidance. Access to online forums and a local study group for web developers.  8. Preferred Tools and Platforms: Learning platforms: Codecademy, Coursera, Udemy. Tools: VS Code, GitHub, Postman.  9. Language:  English 1. Field of Study:\nLearning UIUX\n\n2. Goal:\nTo become proficient in UIUX design and can handle advance projects\n\n3. Current Level:\nBasic understanding of graphic design\n\n4. Time Commitment:\n3 days a week, 1hr each day\n\n5. Preferred Learning Style:\nCombination watching videos, and hands-on practice.\nPrefer structured online courses with projects\n\n6. Learning Pace:\nfast and forward, in 3 month\n\n7. Resources Available:\n 0 Budget, just an internet access\n\n8. Preferred Tools and Platforms:\ndoesn't matter\n\n9. Language: \nEnglish"},
    {text: "output: Learning Path for Full-Stack Web Development Overview Duration: 12 months Time Commitment: 2 hours daily on weekdays, 4 hours on weekends Goal: Proficiency in full-stack web development, ability to build and deploy fully functional web applications, and obtaining a certification within 12 months Phase 1: Beginner (Months 1-3) Key Topics: HTML, CSS, JavaScript Basics, Git  Weekly Routine:  Weekdays: 2 hours/day  Monday to Friday: Hour 1: Online Course/Reading Hour 2: Hands-on Practice/Quizzes Weekends: 4 hours/day  Saturday: Hour 1-2: Review and Practice Hour 3-4: Small Project/Assignment Sunday: Hour 1-2: Course/Reading Hour 3-4: Hands-on Practice Resources:  HTML & CSS: Codecademy, “HTML and CSS: Design and Build Websites” by Jon Duckett JavaScript: Codecademy, “Eloquent JavaScript” by Marijn Haverbeke Git: Codecademy, GitHub Learning Lab Goals for Phase 1:  Master basic HTML, CSS, and JavaScript Understand version control with Git Complete small web projects Phase 2: Intermediate (Months 4-6) Key Topics: Advanced JavaScript, React, Node.js Basics, Express Basics  Weekly Routine:  Weekdays: 2 hours/day  Monday to Friday: Hour 1: Online Course/Reading Hour 2: Hands-on Practice/Quizzes Weekends: 4 hours/day  Saturday: Hour 1-2: Review and Practice Hour 3-4: Small Project/Assignment Sunday: Hour 1-2: Course/Reading Hour 3-4: Hands-on Practice Resources:  Advanced JavaScript: Udemy - “The Complete JavaScript Course” by Jonas Schmedtmann React: Codecademy, Coursera - “Front-End Web Development with React” by The Hong Kong University of Science and Technology Node.js & Express: Udemy - “The Complete Node.js Developer Course” by Andrew Mead Goals for Phase 2:  Develop proficiency in advanced JavaScript Build single-page applications using React Create simple backend servers using Node.js and Express Complete intermediate web projects Phase 3: Advanced (Months 7-12) Key Topics: MongoDB, SQL, Deployment Processes, Full-Stack Projects  Weekly Routine:  Weekdays: 2 hours/day  Monday to Friday: Hour 1: Online Course/Reading Hour 2: Hands-on Practice/Quizzes Weekends: 4 hours/day  Saturday: Hour 1-2: Review and Practice Hour 3-4: Small Project/Assignment Sunday: Hour 1-2: Course/Reading Hour 3-4: Hands-on Practice Resources:  MongoDB: Udemy - “MongoDB - The Complete Developer’s Guide” by Maximilian Schwarzmüller SQL: Coursera - “SQL for Data Science” by University of California, Davis Deployment: FreeCodeCamp, DigitalOcean tutorials Goals for Phase 3:  Understand and use MongoDB and SQL for database management Learn deployment processes and deploy full-stack applications Complete advanced full-stack projects Prepare for certification exams in web development Certification Preparation (Months 11-12) Weekly Routine:  Weekdays: 2 hours/day  Monday to Friday: Hour 1: Review course materials Hour 2: Practice exams and quizzes Weekends: 4 hours/day  Saturday: Hour 1-2: Review Hour 3-4: Practice projects Sunday: Hour 1-2: Review Hour 3-4: Practice exams Resources:  Certification Exam Prep: Specific platform prep courses (e.g., Codecademy, Coursera, or Udemy) Mock Exams: Available on respective learning platforms "},
  ];

  const result = await model.generateContent({
    contents: [{role: "user", parts}],
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
  });
  // console.log(result.response.text());

  return result.response.text();
}

run();