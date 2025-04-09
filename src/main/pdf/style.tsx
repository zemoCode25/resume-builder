import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Times-Roman",
  },
  section: {
    marginBottom: "3px",
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
    fontSize: 12,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "4px",
  },
  flexItem: {
    width: "40%",
    marginBottom: "2px",
    fontSize: "12px",
  },
  unorderedList: {
    paddingLeft: "4px",
  },
});
