import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../cover-letter/style";
import { CVDataType } from "@/types/component-types/cv/cv-form";

export function CVDocument({ CVData }: { CVData: CVDataType | null }) {
  const { personal, employer, company, letterBody } = CVData || {};

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles?.section}>
          <Text style={styles?.text}>{`${employer?.firstName || ""} ${
            employer?.lastName || ""
          }`}</Text>
          <Text style={styles?.text}>{employer?.title || ""}</Text>
          <Text style={styles?.text}>{company?.companyName}</Text>
          <Text style={styles?.text}>{company?.streetAddress || ""}</Text>
          <Text style={styles?.text}>{`${company?.city || ""}, ${
            company?.zipCode || ""
          }`}</Text>
        </View>
        <View style={styles?.section}>
          <Text style={styles?.text}>{`${employer?.firstName || ""} ${
            employer?.lastName || ""
          },`}</Text>
        </View>
        <View style={styles?.section}>
          <View style={styles?.section}>
            <Text style={styles?.text}>{letterBody?.openingBody || ""}</Text>
          </View>
          <View style={styles?.section}>
            <Text style={styles?.text}>{letterBody?.middleBody || ""}</Text>
          </View>
          <View style={styles?.section}>
            <Text style={styles?.text}>{letterBody?.closingBody || ""}</Text>
          </View>
        </View>
        <View style={styles?.section}>
          <Text style={styles?.text}>Sincerely,</Text>
        </View>
        <View style={styles?.section}>
          <Text style={styles?.text}>{`${personal?.firstName || ""} ${
            personal?.lastName || ""
          }`}</Text>
        </View>
      </Page>
    </Document>
  );
}
