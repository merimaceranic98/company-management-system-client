import {
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
  BorderStyle,
  ShadingType,
  TableOfContents,
  convertInchesToTwip,
} from "docx";

import paragraph from "./paragraph";

const textColor = "#6E7A89";

// This function creates table rows. Separated from the table itself for readability
const reportTableFields = {
  email: "Email",
  role: "Role",
  gender: "Gender",
  yearsOfEmployement: "Years of employement",
  firstName: "First name",
  lastName: "Last name",
};

type ReportTableModel = {
  name: string;
  host: string;
  riskLevel: string;
  confidence: string;
  issueBackground: string;
  remediationBackground: string;
  vulnerabilityClassifications: string;
  classification?: string;
};

const reportTableRows = (tableData: Partial<ReportTableModel>): TableRow[] => {
  const rows: TableRow[] = [];
  // For each key defined above (maybe move this to constants), check if it exists and put it in the table
  // This is to avoid having to put placeholder values in a table if the corresponding key is not present
  let index = 0;
  Object.keys(reportTableFields).forEach((field: any) => {
    if (tableData[field as keyof typeof tableData]) {
      let newRow;
      if (index === 0) {
        // Create new table row with specified width
        // If index is 0 (we just started creating the table), we add colored leftmost column,
        // which is just one cell that spans all the rows
        newRow = new TableRow({
          children: [
            new TableCell({
              width: {
                size: 150,
                type: WidthType.DXA,
              },
              // dynamically determine the number of rows for rowspan
              rowSpan: Object.keys(tableData).length,
              shading: {
                type: ShadingType.CLEAR,
              },
              children: [],
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                bottom: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
              },
            }),
            new TableCell({
              width: {
                size: 3505,
                type: WidthType.DXA,
              },
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1),
              },
              children: [
                paragraph(
                  reportTableFields[field as keyof typeof reportTableFields],
                  { color: textColor }
                ),
              ],
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                bottom: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 1,
                  color: "ffffff",
                },
              },
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1),
              },
              children: [
                paragraph(
                  tableData[field as keyof typeof tableData] as string,
                  { color: textColor }
                ),
              ],
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                bottom: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
              },
            }),
          ],
        });
      } else {
        // This is a 'regular' row without colored cell
        newRow = new TableRow({
          children: [
            new TableCell({
              width: {
                size: 3505,
                type: WidthType.DXA,
              },
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1),
              },
              shading: {
                fill: index % 2 === 0 ? "#ffffff" : "#f8f9fA",
                type: ShadingType.CLEAR,
              },
              children: [
                paragraph(
                  reportTableFields[field as keyof typeof reportTableFields],
                  { color: textColor }
                ),
              ],
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                bottom: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 20,
                  color: "#ffffff",
                },
              },
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1),
              },

              children: [
                paragraph(
                  tableData[field as keyof typeof tableData] as string,
                  { color: textColor }
                ),
              ],
              shading: {
                fill: index % 2 === 0 ? "#ffffff" : "#f8f9fA",
                type: ShadingType.CLEAR,
              },
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                bottom: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 0,
                },
              },
            }),
          ],
        });
      }
      rows.push(newRow);
      index++;
    }
  });
  return rows;
};

// Creates the table with rows added with the function above
const reportTable = (
  tableData: Partial<ReportTableModel>
): (Paragraph | Table | TableOfContents)[] => {
  const table = new Table({
    columnWidths: [200, 3505, 5505],
    borders: {
      top: {
        style: BorderStyle.NONE,
        size: 0,
      },
      bottom: {
        style: BorderStyle.NONE,
        size: 0,
      },
      left: {
        style: BorderStyle.NONE,
        size: 0,
      },
      right: {
        style: BorderStyle.NONE,
        size: 0,
      },
      insideHorizontal: {
        style: BorderStyle.NONE,
        size: 0,
      },
      insideVertical: {
        style: BorderStyle.NONE,
        size: 0,
      },
    },
    rows: [...reportTableRows(tableData)],
  });
  // This is how spacing must be done, by creating empty paragraphs
  return [paragraph(tableData.name as string, { bold: true }), table];
};

export default reportTable;
