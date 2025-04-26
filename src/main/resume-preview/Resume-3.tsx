import { useContext } from "react";
import { ResumeDataContext } from "@/contexts/ResumeDataContext";
import {
  CertificateType,
  EducationType,
  ExperienceType,
  Personal,
  ProjectType,
  SkillType,
} from "@/types/templates/form-types";

export function Resume3() {
  const { resumeData } = useContext(ResumeDataContext);
  return (
    <div className="md:p-10 p-5 bg-white rounded-md shadow-sm font-serif flex flex-col gap-1 max-h-180 overflow-y-auto">
      <PersonalPreview personalData={resumeData?.personal || {}} />
      <EducationPreview educationList={resumeData?.education || []} />
      <SkillPreview skillData={resumeData?.skill || []} />
      <ExperiencePreview experienceList={resumeData?.experience || []} />
      <ProjectPreview projectList={resumeData?.project || []} />
      <CertificatePreview certificateList={resumeData?.certificate || []} />
    </div>
  );
}

export function CertificatePreview({
  certificateList,
}: {
  certificateList: CertificateType[];
}) {
  if (certificateList?.length || 0 === 0) {
    return;
  }

  for (const certificateItem of certificateList) {
    const { id: _unused, ...certificateData } = certificateItem;

    const isValueFound = Object.values(certificateData).some(
      (certificateItemData) => certificateItemData
    );

    if (!isValueFound) {
      return;
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Certificate
      </h2>
      <ol className="list-disc pl-8">
        {certificateList.map((certificateItem) => (
          <CertificateItem
            certificateItem={certificateItem}
            key={certificateItem?.id}
          />
        ))}
      </ol>
    </div>
  );
}

export function CertificateItem({
  certificateItem,
}: {
  certificateItem: CertificateType;
}) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const { certificateName, certificateDescription, accreditationDate } =
    certificateItem;
  return (
    <li>
      <p>{`${certificateName || ""}: ${certificateDescription || ""} - ${
        accreditationDate?.toLocaleDateString(undefined, options) || ""
      }`}</p>
    </li>
  );
}

export function ProjectPreview({
  projectList,
}: {
  projectList: ProjectType[];
}) {
  // Check whether there is a value present in the state
  for (const projectItem of projectList) {
    // Excluded id because it is a default data
    // Excluded projectDescription from projectData as it has a value by default
    const { id: _id, projectDescription, ...projectData } = projectItem;
    let isDescriptionFound: boolean = false;

    const isValueFound = Object.values(projectData).some(
      (projectItemData) => projectItemData
    );

    for (const projectDescriptionItem of projectDescription || []) {
      const { description } = projectDescriptionItem;
      if (description) {
        isDescriptionFound = true;
      }
    }

    if (!isValueFound && !isDescriptionFound) {
      return;
    }
  }

  if (projectList.length === 0) {
    return;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Projects
      </h2>
      {projectList.map((projectItem) => (
        <ProjectItem projectItem={projectItem} key={projectItem?.id} />
      ))}
    </div>
  );
}

export function ProjectItem({ projectItem }: { projectItem: ProjectType }) {
  return (
    <div>
      <p className="italic">{projectItem?.projectName || ""}</p>
      <ol className="list-disc pl-8">
        {projectItem?.projectDescription?.map((description) => (
          <li>{description?.description || ""}</li>
        ))}
      </ol>
    </div>
  );
}

export function ExperiencePreview({
  experienceList,
}: {
  experienceList: ExperienceType[];
}) {
  // Check whether there is a value present in the state
  for (const experiencetItem of experienceList) {
    // Excluded id because it is a default data
    // Excluded projectDescription from projectData as it has a value by default
    const { id: _id, jobDescription, ...experienceData } = experiencetItem;
    let isDescriptionFound: boolean = false;

    const isValueFound = Object.values(experienceData).some(
      (experienceItemData) => experienceItemData
    );

    for (const experienceDescriptionItem of jobDescription || []) {
      const { description } = experienceDescriptionItem;
      if (description) {
        isDescriptionFound = true;
      }
    }

    if (!isValueFound && !isDescriptionFound) {
      return;
    }
  }

  if (experienceList.length === 0) {
    return;
  }
  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Experience
      </h2>
      {experienceList.map((experienceItem) => (
        <ExperienceItem experienceData={experienceItem} />
      ))}
    </div>
  );
}

export function ExperienceItem({
  experienceData,
}: {
  experienceData: ExperienceType;
}) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const dateString = `${
    experienceData?.startDate?.toLocaleDateString(undefined, options) || ""
  } - ${experienceData?.endDate?.toLocaleDateString(undefined, options) || ""}`;

  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="w-full flex justify-between">
          <p className="italic">{experienceData?.position}</p>
          <p>{`${
            experienceData?.startDate || experienceData?.endDate
              ? dateString
              : ""
          }`}</p>
        </div>
        <p className="italic">{experienceData?.company}</p>
        <ol className="list-disc pl-8">
          {experienceData?.jobDescription?.map((jobDescription) => (
            <li key={jobDescription?.id}>
              <p>{jobDescription?.description}</p>
            </li>
          ))}
        </ol>
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
  educationList,
}: {
  educationList: EducationType[];
}) {
  if (educationList.length === 0) {
    return;
  }

  for (const educationItem of educationList) {
    const { id: _unused, ...educationData } = educationItem;

    const isValueFound = Object.values(educationData).some(
      (educationItemData) => educationItemData
    );

    if (!isValueFound) {
      return;
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Education
      </h2>
      {educationList.map((item, key) => (
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

export function SkillPreview({ skillData }: { skillData: SkillType[] }) {
  console.log(skillData);

  if (skillData.length === 0) return;

  return (
    <div>
      <h2 className="text-lg font-semibold border-b border-b-gray-900 pb-0.5">
        Technical Skills
      </h2>
      <ol className="grid grid-cols-2 list-disc ml-4">
        {skillData.map((skill) => (
          <li key={skill.id}>
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
