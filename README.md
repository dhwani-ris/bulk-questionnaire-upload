# Bulk Questionnaire Upload

## Project Overview

It is a robust data collection tool designed for NGOs, CSR projects, and philanthropic initiatives, enabling offline-first field data capture. The Bulk Upload Questionnaire feature significantly reduces the time and effort required to design large-scale questionnaires.

Instead of manually creating forms using a JSON-based interface, users can now upload Excel files in XLSForm format to automatically generate questionnaires. This feature streamlines form creation and enhances productivity for field workers and program managers.

## Features

### Bulk Upload Questionnaire
- **Excel File Upload**: Drag-and-drop or browse to upload .xls or .xlsx files
- **XLSForm Support**: Compatible with the widely-adopted XLSForm standard for survey creation
- **Interactive UI**: Modern, user-friendly interface with real-time feedback
- **Field Validation**: Ensures only valid Excel files are processed
- **Error Handling**: Clear error messages and suggestions for troubleshooting
- **Visual Feedback**: Loading indicators and success messages enhance user experience
- **Responsive Design**: Works seamlessly across desktop and tablet devices

### Coming Soon
- **Form Preview**: Instant preview of uploaded forms before saving
- **Template Downloads**: Get started with downloadable templates
- **Large Form Support**: Process questionnaires with 400+ questions
- **Offline Processing**: Work with forms even without internet connection

## Technology Stack

- **Frontend**: Angular (19+) with Angular Material UI components
- **Backend**: Python-powered processing engine (upcoming)
- **Database**: MongoDB for form storage
- **Architecture**: MEAN Stack (MongoDB, Express, Angular, Node.js)

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v8+)
- Angular CLI (v19+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhwaniris/mform.git
   cd mform
   ```

2. Install dependencies:
   ```bash
   cd mform-client
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Usage

1. Navigate to the Bulk Upload Questionnaire page
2. Drag and drop an Excel file or click "Browse Files" to select one
3. Wait for the file to be processed
4. Review the form and click "Process Form" to save

## Contribution Guidelines

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes, following our coding standards
4. Add appropriate unit tests for your changes
5. Ensure all tests pass:
   ```bash
   npm test
   ```
6. Submit a pull request with a clear description of your changes

### Coding Standards

- Follow Angular style guide for all TypeScript code
- Use TSDoc comments for all public methods and classes
- Maintain 100% test coverage for critical components
- Use proper error handling throughout the codebase
- Keep UI components responsive and accessible

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## About Dhwani RIS

Dhwani Rural Information Systems is an organization working to enable social impact through technology. Learn more at [https://dhwaniris.in](https://dhwaniris.in).
