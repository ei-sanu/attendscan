// This file provides utility functions for interacting with Google Sheets via Apps Script

/**
 * Function to prepare and format data for sending to Google Sheets
 * @param registrationNumber - The participant's registration number
 * @returns Formatted data object
 */
export const prepareAttendanceData = (registrationNumber: string) => {
  return {
    registrationNumber,
    timestamp: new Date().toISOString(),
    status: 'Present'
  };
};

/**
 * Sample Google Apps Script code to be implemented in Google Sheets
 * This should be copied into the Script Editor in Google Sheets
 */
export const googleAppsScriptSample = `
function doGet(e) {
  return HtmlService.createHtmlOutput("The attendance tracking API is running.");
}

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Attendance") || ss.insertSheet("Attendance");
    
    // Ensure headers exist
    const headers = ["Registration Number", "Timestamp", "Status"];
    const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    
    if (firstRow.join("") === "") {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Check if this registration number already has an entry for today
    const registrationCol = headers.indexOf("Registration Number") + 1;
    const timestampCol = headers.indexOf("Timestamp") + 1;
    const statusCol = headers.indexOf("Status") + 1;
    
    const registrations = sheet.getRange(2, registrationCol, sheet.getLastRow(), 1).getValues();
    const timestamps = sheet.getRange(2, timestampCol, sheet.getLastRow(), 1).getValues();
    
    const today = new Date().toDateString();
    let rowToUpdate = -1;
    
    for (let i = 0; i < registrations.length; i++) {
      if (registrations[i][0] === data.registrationNumber) {
        const entryDate = new Date(timestamps[i][0]).toDateString();
        if (entryDate === today) {
          rowToUpdate = i + 2; // +2 because we start at row 2 and arrays are 0-indexed
          break;
        }
      }
    }
    
    if (rowToUpdate > 0) {
      // Update existing record
      sheet.getRange(rowToUpdate, timestampCol).setValue(data.timestamp);
      sheet.getRange(rowToUpdate, statusCol).setValue(data.status);
    } else {
      // Add new record
      const newRow = Array(headers.length).fill("");
      newRow[registrationCol - 1] = data.registrationNumber;
      newRow[timestampCol - 1] = data.timestamp;
      newRow[statusCol - 1] = data.status;
      
      sheet.appendRow(newRow);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Attendance recorded successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Make this public so it can be accessed from the web application
function setup() {
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty("allowAnonymous", "true");
}
`;

/**
 * Instructions for setting up Google Apps Script for attendance tracking
 */
export const googleSheetsSetupInstructions = [
  "1. Create a new Google Sheet to store attendance data",
  "2. From the menu, select Extensions > Apps Script",
  "3. Copy the sample code from googleAppsScriptSample into the Script Editor",
  "4. Save the project with a meaningful name (e.g., 'Attendance Tracker')",
  "5. Run the setup() function once to configure script properties",
  "6. Deploy the web app by clicking Deploy > New deployment",
  "7. Set access to 'Anyone' and click Deploy",
  "8. Copy the web app URL that's generated",
  "9. Update the GOOGLE_APPS_SCRIPT_URL constant in the VolunteerPage component"
];

export default {
  prepareAttendanceData,
  googleAppsScriptSample,
  googleSheetsSetupInstructions
};