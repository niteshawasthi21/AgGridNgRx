import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DocumentService } from './service/document.service';
import { loadDocuments, loadDocumentsSuccess, loadDocumentsFailure } from  './document.actions'

@Injectable()
export class DocumentEffects {
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

  constructor(private actions$: Actions, private documentService: DocumentService) {}
}
