import { AlignmentType, Paragraph, TextRun } from "docx";

const paragraph = (
  text: string,
  options?: {
    bold?: boolean;
    italics?: boolean;
    size?: number;
    alignment?: AlignmentType;
    color?: string;
    pageBreakBefore?: boolean;
    bullet?: {
      level: number;
      numberFormat: "bullet" | "decimal";
    };
  }
) =>
  new Paragraph({
    alignment: options?.alignment ? options.alignment : AlignmentType.START,
    pageBreakBefore: options?.pageBreakBefore ? options.pageBreakBefore : false,
    children: [
      new TextRun({
        font: "Arial",
        text: text,
        bold: options?.bold ? options.bold : false,
        italics: options?.italics ? options.italics : false,
        size: options?.size ? options.size : 22,
        color: options?.color ? options.color : "#000000",
      }),
    ],
  });

export default paragraph;
