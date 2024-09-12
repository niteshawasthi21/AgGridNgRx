import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocumentRow } from '../document-row.model';  

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  getDocuments(): Observable<DocumentRow[]> {
    // Simulate an API call with static data
    const documents: DocumentRow[] =  this.generateData()
    return of(documents);
  }




  generateData() {
    let rowData:DocumentRow[]=[];
    for (let i = 0; i < 30; i++) {
      rowData.push({
        documentType: ['PDF', 'Word', 'Excel', 'Image', 'Text'][Math.floor(Math.random() * 5)],
        fileName: `Document${i + 1}`,
        fileExtension: ['pdf', 'docx', 'xlsx', 'jpg', 'txt'][Math.floor(Math.random() * 5)],
        size: (Math.random() * 100).toFixed(2),
        createdBy: ['John', 'Jane', 'Smith', 'Doe'][Math.floor(Math.random() * 4)],
        createdDate: this.randomDate(),
        lastModifiedDate: this.randomDate(),
        verified: Math.random() > 0.5,
      });
    }
    return rowData;
  }

   randomDate() {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }
}