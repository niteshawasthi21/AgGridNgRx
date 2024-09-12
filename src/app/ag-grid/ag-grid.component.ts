import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { deleteDocument, loadDocuments, updateDocumentType } from './ngrx-implement/document.actions';
import { select, Store } from '@ngrx/store';
import { selectDocuments } from './ngrx-implement/document.selectors';
import { DocumentRow } from './ngrx-implement/document-row.model';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {
  columnDefs: ColDef[] = [
    { headerName: 'User ID', field: 'id' },
    {
      headerName: 'Document Type',
      field: 'documentType',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['PDF', 'Word', 'Excel', 'Image', 'Text'],
      },
      editable: true,
      onCellValueChanged: (params: any) => {
        console.log(params)
        // const data = { ...params.data };
        // data.documentType = params.newValue;
        // params.api.applyTransaction({ update: params });
      }
    },
    { headerName: 'File Name', field: 'fileName' },
    { headerName: 'File Extension', field: 'fileExtension' },
    { headerName: 'Size (MB)', field: 'size' },
    { headerName: 'Created By', field: 'createdBy' },
    { headerName: 'Created Date', field: 'createdDate' },
    { headerName: 'Last Modified Date', field: 'lastModifiedDate' },
    { headerName: 'Verified', field: 'verified', cellRenderer: (params: any) => params.value ? 'Yes' : 'No' },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: this.actionCellRenderer.bind(this),
      editable: false,
    },
  ];

  rowData$: Observable<DocumentRow[]>;

  constructor(private store: Store) {
    this.rowData$ = this.store.pipe(select(selectDocuments));
  }

  ngOnInit() {
    this.store.dispatch(loadDocuments());
  }

  actionCellRenderer(params: any) {
    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.style.background="skyblue"
    button.addEventListener('click', () => this.onDelete(params));
    return button;
  }

  onDelete(rowData:any) {
    console.log(rowData)
    rowData.api.applyTransaction({ remove: [rowData.data] });
  }

  onUpdateDocumentType(params: any) {
console.log(params)
    // const { data, newValue } = params;
    // this.store.dispatch(updateDocumentType({ id: data.id, documentType: newValue }));
  }
}


 