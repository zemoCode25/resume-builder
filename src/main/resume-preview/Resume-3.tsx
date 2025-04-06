import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import { EducationType, Personal } from "@/types/templates/default-form";

export function Resume3() {
  const { resumeData } = useContext(ResumeDataContext);
  return (
    <div>
      <div className="p-10 bg-white rounded-md shadow-sm font-serif flex flex-col gap-1 max-h-180 overflow-y-auto sticky top-10">
        <PersonalPreview personalData={resumeData?.personal || {}} />
        <EducationPreview educationData={resumeData?.education || []} />
        <SkillPreview />
        <ExperiencePreview />
        <ProjectPreview />
      </div>
    </div>
  );
}

export function PersonalPreview({ personalData }: { personalData: Personal }) {
  const isValueFound = Object.values(personalData).some(
    (personalItem) => personalItem
  );

  if (!isValueFound) {
    return;
  }

  return (
    <div className="font-serif">
      <div className="border-b border-b-gray-900">
        <h1 className="text-3xl font-semibold">
          {`${personalData?.firstName || ""} ${personalData?.lastName || ""}`}
        </h1>
        <p>{personalData?.jobTitle || ""}</p>
      </div>
      <p>{personalData?.phoneNumber || ""}</p>
      <p>{personalData?.email || ""}</p>
      <p>{`${personalData?.city || ""} ${personalData?.country || ""}`}</p>
    </div>
  );
}

export function EducationPreview({
  educationData,
}: {
  educationData: EducationType[];
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Education
      </h2>
      {educationData.map((item, key) => (
        <EducationItem educationItemData={item} key={key} />
      ))}
    </div>
  );
}

export function EducationItem({
  educationItemData,
}: {
  educationItemData: EducationType;
}) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  const { id, ...educationWithoutID } = educationItemData;

  const isValueFound = Object.values(educationWithoutID).some(
    (educationValue) => educationValue
  );

  if (!isValueFound) return;
  return (
    <div>
      <div className="flex justify-between">
        <p className="italic">
          {educationItemData?.degreeProgram || ""}
          {": "}
          {educationItemData?.degreeProgram || educationItemData?.GPA
            ? "GPA "
            : ""}{" "}
          {educationItemData?.GPA || ""}
        </p>
        <p>{`${
          educationItemData?.startDate?.toLocaleDateString(
            undefined,
            options
          ) || ""
        } - ${
          educationItemData?.endDate?.toLocaleDateString(undefined, options) ||
          ""
        }`}</p>
      </div>
      <p>{educationItemData?.school || ""}</p>
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
