// src/app/store/reducers/document.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { loadDocumentsSuccess } from '../ngrx-implement/document.actions';
import { DocumentRow } from '../ngrx-implement/document-row.model';

export interface DocumentState {
  documents: DocumentRow[];
}

export const initialState: DocumentState = {
  documents: [],
};

export const documentReducer = createReducer(
  initialState,
  on(loadDocumentsSuccess, (state, { documents }) => ({
    ...state,
    documents: [...documents],
  }))
);
