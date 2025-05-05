import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

/**
 * Form response interface
 */
export interface FormResponse {
  success: boolean;
  message?: string;
  formId?: string;
  errors?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FormUploadService {
  private apiUrl = '/api/forms'; // This will be updated when we set up the backend

  constructor(private http: HttpClient) { }

  /**
   * Parses an Excel file and converts it to a form structure
   * @param file The Excel file (.xls or .xlsx) to parse
   * @returns Observable with the parsing results
   */
  parseFormFile(file: File): Observable<FormResponse> {
    // In a real implementation, this would create a FormData object
    // and send it to the backend for processing
    const formData = new FormData();
    formData.append('file', file);
    
    // For now, simulate API call with a delay
    // TODO: Replace with actual HTTP request when backend is ready
    // return this.http.post<FormResponse>(`${this.apiUrl}/parse`, formData)
    //   .pipe(catchError(this.handleError));
    
    return of({ 
      success: true, 
      message: 'File processed successfully!' 
    }).pipe(
      delay(2000) // Simulate network delay
    );
  }

  /**
   * Saves the form after preview
   * @param formData The form data to save
   * @returns Observable with the save results
   */
  saveForm(formData: any): Observable<FormResponse> {
    // TODO: Replace with actual HTTP request when backend is ready
    // return this.http.post<FormResponse>(this.apiUrl, formData)
    //   .pipe(catchError(this.handleError));
    
    return of({ 
      success: true, 
      formId: 'form-' + Date.now() 
    }).pipe(
      delay(1000) // Simulate network delay
    );
  }

  /**
   * Downloads an existing form as Excel
   * @param formId The ID of the form to download
   * @returns Observable with the file blob
   */
  downloadFormAsExcel(formId: string): Observable<Blob> {
    // TODO: Replace with actual HTTP request when backend is ready
    // return this.http.get(`${this.apiUrl}/${formId}/excel`, { responseType: 'blob' })
    //   .pipe(catchError(this.handleError));
    
    return of(new Blob([''], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }))
      .pipe(delay(1000)); // Simulate network delay
  }
  
  /**
   * Handles HTTP errors
   * @param error The HTTP error response
   * @returns An observable error with a user-friendly message
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
