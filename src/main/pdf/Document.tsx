// src/pdf_file/index.tsx
import { useEffect } from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { DefaultForm } from "@/types/templates/default-form";
import { styles } from "./style";

export function MyDocument({ resumeData }: { resumeData: DefaultForm }) {
  const personal = resumeData?.personal || {};
  const education = resumeData?.education || [];

  useEffect(() => {
    console.log("TANGINA MO KA RERENDER NA");
  }, [resumeData]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View style={styles?.headerContainer}>
            <Text style={styles.fullName}>{`${personal?.firstName || ""} ${
              personal?.lastName || ""
            }`}</Text>
            <Text style={styles.text}>{personal?.jobTitle}</Text>
          </View>
          <Text style={styles.text}>{personal?.phoneNumber}</Text>
          <Text style={styles.text}>{personal?.email}</Text>
          <Text style={styles.text}>
            {`${personal?.city || ""}, ${personal?.country || ""}`}
          </Text>
          {/* Education */}
          <View style={styles?.headerContainer}>
            <Text style={styles.header}>Education</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
