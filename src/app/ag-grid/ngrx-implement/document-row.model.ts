export interface DocumentRow {
    documentType: string;        // Type of the document (e.g., PDF, Word, Excel)
    fileName: string;            // Name of the file
    fileExtension: string;       // File extension (e.g., pdf, docx, xlsx)
    size: number|string;                // Size of the file in MB
    createdBy: string;           // Name of the person who created the file
    createdDate: string;         // Date when the file was created (in ISO format)
    lastModifiedDate: string;    // Date when the file was last modified
    verified: boolean;           // Whether the file is verified or not (true/false)
  }