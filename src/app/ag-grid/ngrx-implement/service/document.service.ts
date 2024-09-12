import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocumentRow } from '../document-row.model';  

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  getDocuments(): Observable<DocumentRow[]> {
    return of(this.generateData()); // Simulate API response
  }

  deleteDocument(id: number): Observable<void> {
    // Simulate API call delay
    return new Observable(observer => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 500);
    });
  }

  updateDocumentType(id: number, documentType: string): Observable<void> {
    // Simulate API call delay
    return new Observable(observer => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      }, 500);
    });
  }

  private generateData(): DocumentRow[] {
    const rowData: DocumentRow[] = [];
    for (let i = 0; i < 30; i++) {
      rowData.push({
        id: i + 1,
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

  private randomDate(): string {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  }
}