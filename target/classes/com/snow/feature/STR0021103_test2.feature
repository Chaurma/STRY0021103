#Author: Rahul Chhabria
#Short description: RITM02279450 - Add Caused by Change, Unauthorized
#Sprint: 2019-11 November Monthly Sprint
#Release: ServiceNow Monthly Enhancements Release

Feature: RITM02279450 - Add Caused by Change, Unauthorized

@Third
Scenario Outline: Verify SIR is getting submitted successfully while we have checked unautorized check box 
#STRY0021103_TC03_SIRSubmit
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
And check the unauthorize check box
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
|Security Incident|Manish Chaurasia|STRY0021103_TC03_AC|SC|7|

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
|Security Incident|Manish Chaurasia|STRY0021103_TC05_AC|SC|8|

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
|Security Incident|Manish Chaurasia|STRY0021103_TC06_AC|SC|9|

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
|Security Incident|Manish Chaurasia|STRY0021103_TC07_AC|SC|10|