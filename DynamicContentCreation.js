
/**
 * Dynamic Content Creation
 * Author: Thibault Montoya
 * Contact: thibault@edzo.ai
 *
 * This script creates and manages dynamic content in Google Docs or Sheets.
 */

function createDynamicContent() {
  var doc = DocumentApp.create('Dynamic Document');
  var body = doc.getBody();
  body.appendParagraph('This is some dynamic content.');
  doc.saveAndClose();
  Logger.log('Dynamic content created successfully.');
}
