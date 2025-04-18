import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Times-Roman",
  },
  section: {
    marginBottom: "10px",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
  italicText: {
    fontFamily: "Times-Italic",
    fontSize: 12,
  },
  header: {
    fontFamily: "Times-Bold",
    fontSize: 14,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
