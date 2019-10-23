#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Title of your feature
  I want to use this template for my feature file

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
|Security Incident|Manish Chaurasia|STRY0021103_TC09_AC|SC|4|

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
|Security Incident|Manish Chaurasia|STRY0021103_TC10_AC|SC|3|