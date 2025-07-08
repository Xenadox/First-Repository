document.addEventListener('DOMContentLoaded', () => {
    const csvFileInput = document.getElementById('csvFileInput');
    const rateCardTableBody = document.getElementById('rateCardTable').getElementsByTagName('tbody')[0];
    const errorMessageElement = document.getElementById('errorMessage');

    const EXPECTED_HEADERS = [
        "Lane", "base rate", "ow1", "ow1limit", "ow2", "ow2limit",
        "ow3", "ow3limit", "ow4", "ow4limit", "ow5", "ow5limit"
    ];

    csvFileInput.addEventListener('change', handleFileUpload);

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        // Reset previous state
        rateCardTableBody.innerHTML = '';
        errorMessageElement.textContent = '';

        if (file.type !== 'text/csv' && !file.name.toLowerCase().endsWith('.csv')) {
            errorMessageElement.textContent = 'Error: Please upload a valid .csv file.';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            parseCSV(text);
        };
        reader.onerror = function() {
            errorMessageElement.textContent = 'Error reading file.';
        };
        reader.readAsText(file);
    }

    function parseCSV(csvText) {
        const lines = csvText.split(/\r\n|\n/);
        if (lines.length === 0) {
            errorMessageElement.textContent = 'Error: CSV file is empty.';
            return;
        }

        const headers = lines[0].split(',').map(header => header.trim().toLowerCase());
        if (!validateHeaders(headers)) {
            errorMessageElement.textContent = `Error: Invalid CSV headers. Expected: ${EXPECTED_HEADERS.join(', ')}. Found: ${headers.join(', ')}`;
            return;
        }

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            if (line.trim() === '') continue; // Skip empty lines

            const data = line.split(',');
            if (data.length !== EXPECTED_HEADERS.length) {
                errorMessageElement.textContent = `Error: Row ${i + 1} has incorrect number of columns. Expected ${EXPECTED_HEADERS.length}, got ${data.length}.`;
                rateCardTableBody.innerHTML = ''; // Clear partially loaded data
                return;
            }
            displayRow(data);
        }
    }

    function validateHeaders(headers) {
        if (headers.length !== EXPECTED_HEADERS.length) {
            return false;
        }
        for (let i = 0; i < EXPECTED_HEADERS.length; i++) {
            if (headers[i] !== EXPECTED_HEADERS[i]) {
                return false;
            }
        }
        return true;
    }

    function displayRow(data) {
        const row = rateCardTableBody.insertRow();
        data.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData.trim();
        });
    }
});
