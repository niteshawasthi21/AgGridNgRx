import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentState } from '../ngrx-implement/document.reducer';

export const selectDocumentState = createFeatureSelector<DocumentState>('documents');

export const selectAllDocuments = createSelector(
  selectDocumentState,
  (state: DocumentState) => state.documents
);
