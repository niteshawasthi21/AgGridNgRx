import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DocumentService } from './service/document.service';
import { loadDocuments, loadDocumentsSuccess, loadDocumentsFailure,deleteDocument,deleteDocumentFailure,deleteDocumentSuccess, updateDocumentType, updateDocumentTypeSuccess, updateDocumentTypeFailure } from  './document.actions'

@Injectable()
export class DocumentEffects {

constructor(private actions$: Actions, private documentService: DocumentService) {}

  loadDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDocuments),
      mergeMap(() =>
        this.documentService.getDocuments().pipe(
          map((documents) => loadDocumentsSuccess({ documents })),
          catchError((error) => of(loadDocumentsFailure({ error })))
        )
      )
    )
  );

  deleteDocument$ = createEffect(() => this.actions$.pipe(
    ofType(deleteDocument),
    mergeMap(action =>
      this.documentService.deleteDocument(action.id).pipe(
        map(() => deleteDocumentSuccess({ id: action.id })),
        catchError(error => of(deleteDocumentFailure({ error })))
      )
    )
  ));

  updateDocumentType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDocumentType),
      mergeMap(action => this.documentService.updateDocumentType(action.id, action.documentType)
        .pipe(
          map(() => updateDocumentTypeSuccess({ id: action.id, documentType: action.documentType })),
          catchError( error=>of(updateDocumentTypeFailure({error})))
        ))
    )
  );

  
}
