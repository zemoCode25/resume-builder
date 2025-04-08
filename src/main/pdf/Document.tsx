// src/pdf_file/index.tsx
import { useEffect } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { DefaultForm } from "@/types/templates/default-form";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
});

export function MyDocument({ resumeData }: { resumeData: DefaultForm }) {
  const personal = resumeData?.personal || {};

  console.log("TAKSJDLKasd");
  console.log(resumeData);

  useEffect(() => {
    console.log("TANGINA MO KA RERENDER NA");
  }, [resumeData]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{personal?.city}</Text>
          <Text style={styles.text}>Full-stack Developer • Manila, PH</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Experiencesasasdasdd</Text>
          <Text style={styles.text}>
            • Developer at XYZ Company (2023–2024)
          </Text>
        </View>
      </Page>
    </Document>
  );
}
