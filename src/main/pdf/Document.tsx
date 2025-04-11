import { Document, Page, Text, View } from "@react-pdf/renderer";
import { DefaultForm } from "@/types/templates/default-form";
import { styles } from "./style";

export function PDFDocument({
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

  const { firstName, lastName, jobTitle, email, phoneNumber, country } =
    personal;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles.section}>
            <View style={styles?.headerContainer}>
              <Text style={styles.fullName}>{`${firstName || ""} ${
                lastName || ""
              }`}</Text>
              <Text style={styles.text}>{jobTitle}</Text>
            </View>
            <Text style={styles.text}>{phoneNumber}</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>
              {`${personal?.city || ""}, ${country || ""}`}
            </Text>
          </View>
          {/* Experience */}
          <View style={styles.section}>
            <View style={styles?.headerContainer}>
              <Text style={styles.header}>Experience</Text>
            </View>
            <View>
              {experience?.map((experienceItem) => (
                <View style={styles.section}>
                  <View style={styles.flexContainer}>
                    <Text style={styles.text}>
                      {experienceItem?.position || ""}
                    </Text>
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
                  <Text style={styles.text}>
                    {experienceItem?.company || ""}
                  </Text>
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
          {/* Education */}
          <View style={styles.section}>
            <View style={styles?.headerContainer}>
              <Text style={styles.header}>Education</Text>
            </View>
            {education?.map((educationItem) => (
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
                    educationItem?.endDate?.toLocaleDateString(
                      undefined,
                      options
                    ) || ""
                  }`}</Text>
                </View>
                <Text style={styles.text}>{educationItem?.school || ""}</Text>
              </View>
            ))}
          </View>
          \{/* Skill */}
          <View style={styles.section}>
            <View style={styles?.headerContainer}>
              <Text style={styles.header}>Technical Skill</Text>
            </View>
            <View style={styles.grid}>
              {skill?.map((skillItem) => (
                <Text style={styles.flexItem} key={skillItem?.id}>{`• ${
                  skillItem?.skillName || ""
                }`}</Text>
              ))}
            </View>
          </View>
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
          {/* Certificate */}
          <View>
            <View style={styles?.headerContainer}>
              <Text style={styles.header}>Certificate</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.unorderedList}>
                {certificate?.map((certificateItem) => (
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
        </View>
      </Page>
    </Document>
  );
}
