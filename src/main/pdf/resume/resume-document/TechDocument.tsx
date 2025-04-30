import { Document, Page, Text, View } from "@react-pdf/renderer";
import {
  CertificateType,
  DefaultForm,
  EducationType,
  ExperienceType,
  SkillType,
} from "@/types/templates/form-types";
import { PersonalType } from "@/types/templates/form-types";
import { styles } from "../style";
import { options } from "@/utils/main-utils";

export function TechDocument({
  resumeData,
}: {
  resumeData: DefaultForm | null;
}) {
  const personal = resumeData?.personal || {};
  const education = resumeData?.education || [];
  const skill = resumeData?.skill || [];
  const project = resumeData?.project || [];
  const experience = resumeData?.experience || [];
  const certificate = resumeData?.certificate || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Personal personalData={personal} />
          <Experience experienceData={experience} />
          <Education educationData={education} />
          <Skill skillData={skill} />
          {/* Project */}
          <View>
            <View style={styles?.headerContainer}>
              <Text style={styles.header}>Projects</Text>
            </View>
            <View style={styles.section}>
              {project?.map((projectItem) => (
                <View style={styles.section}>
                  <Text style={styles.italicText}>
                    {projectItem?.projectName}
                  </Text>
                  <View style={styles.unorderedList}>
                    {projectItem?.projectDescription?.map((descriptionItem) => (
                      <Text style={styles.text} key={descriptionItem?.id}>
                        {`• ${descriptionItem?.description || ""}`}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
          <Certificate certificateData={certificate} />
        </View>
      </Page>
    </Document>
  );
}

export function Personal({ personalData }: { personalData: PersonalType }) {
  const { firstName, lastName, jobTitle, phoneNumber, email, city, country } =
    personalData;
  return (
    <View style={styles.section}>
      <View style={styles?.headerContainer}>
        <Text style={styles.fullName}>{`${firstName || ""} ${
          lastName || ""
        }`}</Text>
        <Text style={styles.text}>{jobTitle}</Text>
      </View>
      <Text style={styles.text}>{phoneNumber}</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{`${city || ""}, ${country || ""}`}</Text>
    </View>
  );
}

export function Experience({
  experienceData,
}: {
  experienceData: ExperienceType[];
}) {
  return (
    <View style={styles.section}>
      <View style={styles?.headerContainer}>
        <Text style={styles.header}>Experience</Text>
      </View>
      <View>
        {experienceData?.map((experienceItem) => (
          <View style={styles.section}>
            <View style={styles.flexContainer}>
              <Text style={styles.text}>{experienceItem?.position || ""}</Text>
              <Text style={styles.text}>{`${
                experienceItem?.startDate?.toLocaleDateString(
                  undefined,
                  options
                ) || ""
              } - ${
                experienceItem?.endDate?.toLocaleDateString(
                  undefined,
                  options
                ) || ""
              }`}</Text>
            </View>
            <Text style={styles.text}>{experienceItem?.company || ""}</Text>
            <View style={styles.unorderedList}>
              {experienceItem?.jobDescription?.map((description) => {
                if (!description?.description) return;
                return (
                  <Text key={description?.id} style={styles?.text}>{`• ${
                    description?.description || ""
                  }`}</Text>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export function Education({
  educationData,
}: {
  educationData: EducationType[];
}) {
  return (
    <View style={styles.section}>
      <View style={styles?.headerContainer}>
        <Text style={styles.header}>Education</Text>
      </View>
      {educationData?.map((educationItem) => (
        <View style={styles.section} key={educationItem.id}>
          <View style={styles.flexContainer}>
            <Text style={styles.text}>{`${
              educationItem?.degreeProgram || ""
            }: GPA ${educationItem?.GPA || ""}`}</Text>
            <Text style={styles.text}>{`${
              educationItem?.startDate?.toLocaleDateString(
                undefined,
                options
              ) || ""
            } - ${
              educationItem?.endDate?.toLocaleDateString(undefined, options) ||
              ""
            }`}</Text>
          </View>
          <Text style={styles.text}>{educationItem?.school || ""}</Text>
        </View>
      ))}
    </View>
  );
}

export function Skill({ skillData }: { skillData: SkillType[] }) {
  return (
    <View style={styles.section}>
      <View style={styles?.headerContainer}>
        <Text style={styles.header}>Technical Skill</Text>
      </View>
      <View style={styles.grid}>
        {skillData?.map((skillItem) => (
          <Text style={styles.flexItem} key={skillItem?.id}>{`• ${
            skillItem?.skillName || ""
          }`}</Text>
        ))}
      </View>
    </View>
  );
}

export function Certificate({
  certificateData,
}: {
  certificateData: CertificateType[];
}) {
  return (
    <View>
      <View style={styles?.headerContainer}>
        <Text style={styles.header}>Certificate</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.unorderedList}>
          {certificateData?.map((certificateItem) => (
            <Text style={styles.text}>{`• ${
              certificateItem.certificateName || ""
            }: ${certificateItem.certificateDescription || ""} - ${
              certificateItem.accreditationDate?.toLocaleDateString(
                undefined,
                options
              ) || ""
            }`}</Text>
          ))}
        </View>
      </View>
    </View>
  );
}
