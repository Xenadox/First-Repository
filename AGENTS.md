## Courier Rate Card Uploader Agent Instructions

This document provides instructions for AI agents working on the Courier Rate Card Uploader project.

### Project Overview

The project is a simple client-side application (HTML, CSS, JavaScript) that allows users to upload a CSV file representing a courier's rate card. The application parses the CSV, validates its headers, and displays the data in an HTML table.

### File Structure

- `index.html`: The main HTML file containing the page structure.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file containing the application logic.

### CSV Format Requirements

The uploaded CSV file **must** adhere to the following specifications:

1.  **Encoding**: UTF-8
2.  **Delimiter**: Comma (`,`)
3.  **Header Row**: The first row of the CSV must contain headers.
4.  **Required Headers**: The headers must exactly match the following (case-insensitive, but stored and checked as lowercase):
    *   `Lane`
    *   `base rate`
    *   `ow1`
    *   `ow1limit`
    *   `ow2`
    *   `ow2limit`
    *   `ow3`
    *   `ow3limit`
    *   `ow4`
    *   `ow4limit`
    *   `ow5`
    *   `ow5limit`

### Development Guidelines

-   **Modularity**: Keep JavaScript functions focused on specific tasks (e.g., file reading, CSV parsing, DOM manipulation).
-   **Error Handling**: Provide clear and user-friendly error messages for invalid file types, incorrect CSV formats, or header mismatches.
-   **User Experience**: Ensure the interface is intuitive and provides feedback to the user during file processing.
-   **Code Comments**: Add comments to `script.js` to explain complex logic.

### Future Enhancements (Considerations for Agents)

-   **Data Validation**: Implement more robust data validation for each field (e.g., ensuring 'base rate' and 'owXlimit' are numeric).
-   **Data Submission**: Add functionality to submit the parsed data to a backend server.
-   **Styling Improvements**: Enhance the visual appearance of the application.
-   **Unit Tests**: If the JavaScript logic becomes more complex, consider adding unit tests.

### Testing Checklist for Agents

Before submitting any changes, ensure the following:

1.  **Valid CSV Upload**:
    *   Upload a CSV file with the correct headers and valid data.
    *   Verify that the data is displayed correctly in the table.
2.  **Invalid File Type**:
    *   Attempt to upload a non-CSV file (e.g., `.txt`, `.jpg`).
    *   Verify that an appropriate error message is displayed.
3.  **Incorrect Headers**:
    *   Upload a CSV file with missing or misspelled headers.
    *   Verify that an error message regarding invalid headers is displayed and no data is shown.
4.  **Incorrect Number of Columns**:
    *   Upload a CSV file where a data row has fewer or more columns than the header row.
    *   Verify that an error message is shown and the table is cleared or not partially populated.
5.  **Empty CSV File**:
    *   Upload an empty CSV file.
    *   Verify that an appropriate error message is displayed.
6.  **CSV with only Headers**:
    *   Upload a CSV file containing only the header row.
    *   Verify that no data rows are displayed and no errors occur.
7.  **CSV with Empty Lines**:
    *   Upload a CSV file that includes empty lines between data rows.
    *   Verify that empty lines are skipped and valid data is displayed.

By following these guidelines and testing procedures, agents can contribute effectively to the project.
