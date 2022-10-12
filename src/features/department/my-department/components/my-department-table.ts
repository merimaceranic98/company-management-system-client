import {
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
  BorderStyle,
  TableOfContents,
  convertInchesToTwip,
} from "docx";

import paragraph from "./paragraph";

const textColor = "#6E7A89";

const usersTableFields = {
  email: "Email",
  role: "Role",
  gender: "Gender",
  yearsOfEmployement: "Years of employement",
  firstName: "First name",
  lastName: "Last name",
};

type UsersDepartmentModel = {
  email: string;
  role: string;
  gender: string;
  yearsOfEmployement: number;
  firstName: string;
  lastName: string;
};

const reportTableRows = (
  tableData: Partial<UsersDepartmentModel>
): TableRow[] => {
  const rows: TableRow[] = [];
  Object.keys(usersTableFields).forEach((field: any) => {
    if (tableData[field as keyof typeof tableData]) {
      let newRow;
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
            children: [
              paragraph(
                usersTableFields[field as keyof typeof usersTableFields],
                { color: textColor }
              ),
            ],
            borders: {
              top: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
                size: 0,
              },
              bottom: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
                size: 0,
              },
              left: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
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
              paragraph(tableData[field as keyof typeof tableData] as string, {
                color: textColor,
              }),
            ],
            borders: {
              top: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
                size: 0,
              },
              bottom: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
                size: 0,
              },
              left: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
                size: 20,
              },
              right: {
                style: BorderStyle.SINGLE,
                color: "#CBD5E0",
                size: 20,
              },
            },
          }),
        ],
      });
      rows.push(newRow);
    }
  });
  return rows;
};

const reportTable = (
  tableData: Partial<UsersDepartmentModel>
): (Paragraph | Table | TableOfContents)[] => {
  const table = new Table({
    columnWidths: [200, 3505, 5505],
    borders: {
      top: {
        style: BorderStyle.SINGLE,
        color: "#CBD5E0",
        size: 0,
      },
      bottom: {
        style: BorderStyle.SINGLE,
        color: "#CBD5E0",
        size: 0,
      },
      left: {
        style: BorderStyle.SINGLE,
        color: "#CBD5E0",
        size: 0,
      },
      right: {
        style: BorderStyle.SINGLE,
        color: "#CBD5E0",
        size: 0,
      },
      insideHorizontal: {
        style: BorderStyle.SINGLE,
        color: "#CBD5E0",
        size: 0,
      },
      insideVertical: {
        style: BorderStyle.SINGLE,
        color: "#CBD5E0",
        size: 0,
      },
    },
    rows: [...reportTableRows(tableData)],
  });
  return [
    paragraph(`${tableData.firstName} ${tableData.lastName}` as string, {
      bold: true,
    }),
    table,
  ];
};

export default reportTable;
