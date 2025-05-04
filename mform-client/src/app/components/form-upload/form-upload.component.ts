import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormUploadService, FormResponse } from '../../services/form-upload.service';

/**
 * Component for handling Excel file uploads to create forms
 * Supports drag and drop and file browsing
 */
@Component({
  selector: 'app-form-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  templateUrl: './form-upload.component.html',
  styleUrl: './form-upload.component.scss'
})
export class FormUploadComponent {
  /** Tracks if a file is being dragged over the drop zone */
  isDragging = false;
  
  /** Tracks if a file has been uploaded */
  fileUploaded = false;
  
  /** The name of the uploaded file */
  fileName = '';
  
  /** Tracks loading state during file processing */
  isLoading = false;
  
  /** Stores any error messages */
  errorMessage = '';
  
  constructor(
    private snackBar: MatSnackBar,
    private formUploadService: FormUploadService
  ) {}
  
  /**
   * Handles dragover event for the drop zone
   * @param event The drag event
   */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }
  
  /**
   * Handles dragleave event for the drop zone
   * @param event The drag event
   */
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }
  
  /**
   * Handles drop event for the drop zone
   * @param event The drag event containing the dropped file
   */
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    
    if (event.dataTransfer?.files) {
      this.handleFileInput(event.dataTransfer.files);
    }
  }
  
  /**
   * Handles file selection from the file input
   * @param event The change event from the file input
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFileInput(input.files);
    }
  }
  
  /**
   * Processes the selected files and validates them
   * @param files The FileList containing the selected files
   */
  handleFileInput(files: FileList): void {
    const file = files[0];
    const fileType = file.name.split('.').pop()?.toLowerCase();
    
    if (fileType !== 'xlsx' && fileType !== 'xls') {
      this.showErrorMessage('Please upload only Excel files (.xls or .xlsx)');
      return;
    }
    
    this.fileUploaded = true;
    this.fileName = file.name;
    this.isLoading = true;
    this.errorMessage = '';
    
    this.formUploadService.parseFormFile(file).subscribe({
      next: (response: FormResponse) => {
        this.isLoading = false;
        if (response.success) {
          this.showSuccessMessage(response.message || 'File successfully processed!');
        } else {
          this.showErrorMessage(response.message || 'Error processing file');
          this.clearFile();
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.showErrorMessage('Error processing file. Please try again.');
        this.clearFile();
        console.error('Error uploading file:', error);
      }
    });
  }
  
  /**
   * Processes the form after successful file upload
   */
  processForm(): void {
    // This would be triggered when the user clicks "Process Form" after upload
    this.snackBar.open('Form is being processed...', 'Close', {
      duration: 2000,
    });
    // Further processing would happen here
  }
  
  /**
   * Clears the uploaded file state
   */
  clearFile(): void {
    this.fileUploaded = false;
    this.fileName = '';
    this.errorMessage = '';
  }
  
  /**
   * Shows a success message in a snackbar
   * @param message The success message to display
   */
  private showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
  
  /**
   * Shows an error message in a snackbar
   * @param message The error message to display
   */
  private showErrorMessage(message: string): void {
    this.errorMessage = message;
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }
}
