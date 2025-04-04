export function Resume3() {
  return (
    <div>
      <div className="p-10 bg-white rounded-md shadow-sm font-serif flex flex-col gap-1 max-h-180 overflow-y-auto sticky top-10">
        <PersonalPreview />
        <EducationPreview />
        <SkillPreview />
        <ExperiencePreview />
        <ProjectPreview />
      </div>
    </div>
  );
}

export function PersonalPreview() {
  return (
    <div className="font-serif">
      <h1 className="text-3xl font-semibold border-b border-b-gray-900 pb-1">
        Ralph Bryan Carlos
      </h1>
      <p>09763896258</p>
      <p>ralphbryancarlos27@gmail.com</p>
      <p>Muntinlupa City, Philippines</p>
    </div>
  );
}

export function EducationPreview() {
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Education
      </h2>
      <div className="flex justify-between">
        <p className="italic">Information Technology Bitch ass: GPA: 1.20</p>
        <p>May 2025</p>
      </div>
      <p>Pamantasan ng Lungsod ng Muntinlupa</p>
    </div>
  );
}

const skills = [
  "PHP",
  "JavaScript",
  "MySQL",
  "Python",
  "Java",
  "React.JS",
  "TypeScript",
  "Next.JS",
  "PostgresSQL",
];

export function SkillPreview() {
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Technical Skills
      </h2>
      <ol className="grid grid-cols-2 list-disc ml-4">
        {skills.map((skill) => (
          <li>
            <p>{skill}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ExperiencePreview() {
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Technical Skills
      </h2>
      <ExperienceItem />
    </div>
  );
}

export function ExperienceItem() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="w-full flex justify-between">
          <p className="italic">Software Developer</p>
          <p>Jan 2023 - current</p>
        </div>
        <p className="italic">Meta Facebook</p>
        <ol>
          <li>
            Contributed to the development and optimization of scalable software
            solutions, improving user engagement and performance across the
            platform.
          </li>
          <li>
            Collaborated with cross-functional teams to design and implement new
            features, ensuring alignment with the organization's mission to
            create impactful products.
          </li>
        </ol>
      </div>
      <div>
        <div className="w-full flex justify-between">
          <p className="italic">Software Developer</p>
          <p>Feb 2025 - current</p>
        </div>
        <p className="italic">Meta Facebook</p>
        <ol>
          <li>
            Worked on developing cutting-edge AI models, contributing to
            advancements in natural language processing and machine learning.
          </li>
          <li>
            Partnered with data scientists and engineers to enhance AI
            capabilities, ensuring ethical and responsible deployment in
            real-world applications.
          </li>
        </ol>
      </div>
    </div>
  );
}
export function ProjectPreview() {
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Projects
      </h2>
      <ProjectItem />
    </div>
  );
}

export function ProjectItem() {
  return (
    <div>
      <p className="italic">PaLiga: Basketball Scorekeeping System</p>
      <p>
        Partnered with data scientists and engineers to enhance AI capabilities,
        ensuring ethical and responsible deployment in real-world applications.
      </p>
    </div>
  );
}
