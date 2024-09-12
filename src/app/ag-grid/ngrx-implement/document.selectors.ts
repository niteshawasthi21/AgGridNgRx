import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentState } from '../ngrx-implement/document.reducer';

export const selectDocumentState = (state: any) => state.documents;

export const selectDocuments = createSelector(
  selectDocumentState,
  (state: DocumentState) => state.documents
);
