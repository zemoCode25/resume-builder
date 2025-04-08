import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Times-Roman",
  },
  section: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
  },
  header: {
    fontFamily: "Times-Bold",
    fontSize: 12,
  },
  headerContainer: {
    paddingBottom: "2px",
    borderBottom: "1px solid black",
  },
  fullName: {
    fontFamily: "Times-Bold",
    fontSize: "16px",
    fontWeight: "bold",
  },
});
