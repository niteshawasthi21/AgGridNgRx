// src/app/store/actions/document.actions.ts

import { createAction, props } from '@ngrx/store';
import { DocumentRow } from '../ngrx-implement/document-row.model';

export const loadDocuments = createAction('[Document] Load Documents');
export const loadDocumentsSuccess = createAction(
  '[Document] Load Documents Success',
  props<{ documents: DocumentRow[] }>()
);
export const loadDocumentsFailure = createAction(
  '[Document] Load Documents Failure',
  props<{ error: any }>()
);

export const deleteDocument = createAction(
  '[Document] Delete Document',
  props<{ id: number }>()
);
export const deleteDocumentSuccess = createAction(
  '[Document] Delete Document Success',
  props<{ id: number }>()
);
export const deleteDocumentFailure = createAction(
  '[Document] Delete Document Failure',
  props<{ error: any }>()
);

export const updateDocumentType = createAction(
  '[Document] Update Document Type',
  props<{ id: number; documentType: string }>()
);
export const updateDocumentTypeSuccess = createAction(
  '[Document] Update Document Type Success',
  props<{ id: number; documentType: string }>()
);
export const updateDocumentTypeFailure = createAction('[Document] Update Document Type Failure',  props<{ error: any }>()
);
