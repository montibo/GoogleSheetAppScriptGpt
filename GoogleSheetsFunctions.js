
/**
 * Google Sheets Manipulation Functions
 * Author: Thibault Montoya
 * Contact: thibault@edzo.ai
 * 
 * This script contains functions to manipulate Google Sheets data, including sorting and filtering.
 */

function sortData(sheet) {
  var range = sheet.getRange("A2:B10");
  range.sort({column: 1, ascending: true});
  Logger.log('Data sorted successfully.');
}

function filterData(sheet) {
  var range = sheet.getRange("A2:B10");
  var criteria = SpreadsheetApp.newFilterCriteria().whenNumberGreaterThan(100).build();
  range.createFilter().setColumnFilterCriteria(1, criteria);
  Logger.log('Filter applied successfully.');
}
