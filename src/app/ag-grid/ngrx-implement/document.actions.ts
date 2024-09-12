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
