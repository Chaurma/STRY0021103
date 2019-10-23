#Author: Rahul Chhabria
#Short description: RITM02279450 - Add Caused by Change, Unauthorized
#Sprint: 2019-11 November Monthly Sprint
#Release: ServiceNow Monthly Enhancements Release

Feature: RITM02279450 - Add Caused by Change, Unauthorized
@First
Scenario Outline: Verify whether field "Caused by Change" in the "Related Records" tab underneath "Change Request" on SIR form
#STRY0021103_TC01_CausedbyChange
Given user launch the ITIL view
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And type "<NameInNaviagtor>" in filter navigator
And Cliks on the "Visible to Me" option
And Clicks on the New button
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And Fill the requested by as "<RequestedBy>"
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And Fille the short description as "<ShortDescription>"
And Scroll to the submit button
And Take Screenshot "<ScreenhsotFoldername>" from first driver
When clicks on the submit button
And Store SIR number in sheet in row "<row_Index>"
Then SIR should be submitted sucessfully
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And search created SIR
When scroll to the update button
Then Verify whether field "Caused by Change" in the "Related Records" tab underneath "Change Request"
And Take Screenshot "<ScreenhsotFoldername>" from first driver
Then close the browser

Examples:

|NameInNaviagtor|RequestedBy|ScreenhsotFoldername|ShortDescription|row_Index|
|Security Incident|Manish Chaurasia|STRY0021103_TC01_AC|SC|1|

@Second
Scenario Outline: Verify whether Checkbox, "Unauthorized" in the "Related Records" tab underneath "Caused by Change" on the SIR form
#STRY0021103_TC02_Checkbox
Given user launch the ITIL view
And type "<NameInNaviagtor>" in filter navigator
And Cliks on the "Visible to Me" option
And Clicks on the New button
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And Fill the requested by as "<RequestedBy>"
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And Fille the short description as "<ShortDescription>"
And Scroll to the submit button
And Take Screenshot "<ScreenhsotFoldername>" from first driver
When clicks on the submit button
And Store SIR number in sheet in row "<row_Index>"
Then SIR should be submitted sucessfully
And Take Screenshot "<ScreenhsotFoldername>" from first driver
And search created SIR
When scroll to the update button
Then Verify field  Checkbox, "Unauthorized" in the "Related Records" tab underneath "Caused by Change"
And Take Screenshot "<ScreenhsotFoldername>" from first driver
Then close the browser

Examples:

|NameInNaviagtor|RequestedBy|ScreenhsotFoldername|ShortDescription|row_Index|
|Security Incident|Manish Chaurasia|STRY0021103_TC04_AC|SC|2|
