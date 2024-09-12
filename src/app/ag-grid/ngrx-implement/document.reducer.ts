// src/app/store/reducers/document.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { deleteDocumentSuccess, loadDocumentsSuccess, updateDocumentTypeSuccess } from '../ngrx-implement/document.actions';
import { DocumentRow } from '../ngrx-implement/document-row.model';
export interface DocumentState {
  documents: DocumentRow[];
  error: any;
}

export const initialState: DocumentState = {
  documents: [],
  error: null
};

export const documentReducer = createReducer(
  initialState,
  on(loadDocumentsSuccess, (state, { documents }) => ({
    ...state,
    documents
  })),

  on(deleteDocumentSuccess, (state, { id }) => ({
    ...state,
    documents: state.documents.filter(doc => doc.id !== id)
  })),
  
  on(updateDocumentTypeSuccess, (state, { id, documentType }) => ({
    ...state,
    documents: state.documents.map(doc =>
      doc.id === id ? { ...doc, documentType } : doc
    )
  }))
);