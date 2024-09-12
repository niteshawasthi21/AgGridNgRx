import { DocumentRow } from './ngrx-implement/document-row.model';
import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { loadDocuments } from './ngrx-implement/document.actions';
import { Store } from '@ngrx/store';
import { selectAllDocuments } from './ngrx-implement/document.selectors';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {
  public rowData$!: Observable<DocumentRow[]>;


  columnDefs:ColDef[] = [
    { headerName: 'Document Type', field: 'documentType', cellEditor: 'agSelectCellEditor', editable: true },
    { headerName: 'File Name', field: 'fileName' },
    { headerName: 'File Extension', field: 'fileExtension' },
    { headerName: 'Size (MB)', field: 'size' },
    { headerName: 'Created By', field: 'createdBy' },
    { headerName: 'Created Date', field: 'createdDate' },
    { headerName: 'Last Modified Date', field: 'lastModifiedDate' },
    { headerName: 'Verified', field: 'verified', cellRenderer: (params:any) => (params.value ? 'Yes' : 'No') },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: this.actionCellRenderer,
      editable: false,
    },
  ];


  constructor(private store: Store) {}

  ngOnInit(): void {
    // Dispatch action to load documents
    this.store.dispatch(loadDocuments());

    // Select data from store
    this.rowData$ = this.store.select(selectAllDocuments);
  }

  actionCellRenderer(params:any) {
    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.addEventListener('click', () => {
      params.api.applyTransaction({ remove: [params.data] });
    });
    return button;
  }

}

 