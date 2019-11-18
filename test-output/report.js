$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/snow/feature/STRY0021103.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Rahul Chhabria"
    },
    {
      "line": 2,
      "value": "#Short description: RITM02279450 - Add Caused by Change, Unauthorized"
    },
    {
      "line": 3,
      "value": "#Sprint: 2019-11 November Monthly Sprint"
    },
    {
      "line": 4,
      "value": "#Release: ServiceNow Monthly Enhancements Release"
    }
  ],
  "line": 6,
  "name": "RITM02279450 - Add Caused by Change, Unauthorized",
  "description": "",
  "id": "ritm02279450---add-caused-by-change,-unauthorized",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Verify whether Checkbox, \"Unauthorized\" in the \"Related Records\" tab underneath \"Caused by Change\" on the SIR form",
  "description": "",
  "id": "ritm02279450---add-caused-by-change,-unauthorized;verify-whether-checkbox,-\"unauthorized\"-in-the-\"related-records\"-tab-underneath-\"caused-by-change\"-on-the-sir-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#STRY0021103_TC02_Checkbox"
    }
  ],
  "line": 39,
  "name": "user launch the ITIL view",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "type \"\u003cNameInNaviagtor\u003e\" in filter navigator",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Cliks on the \"Visible to Me\" option",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Clicks on the New button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Take Screenshot \"\u003cScreenhsotFoldername\u003e\" from first driver",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Fill the requested by as \"\u003cRequestedBy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Take Screenshot \"\u003cScreenhsotFoldername\u003e\" from first driver",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Fille the short description as \"\u003cShortDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Scroll to the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Take Screenshot \"\u003cScreenhsotFoldername\u003e\" from first driver",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Store SIR number in sheet in row \"\u003crow_Index\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "SIR should be submitted sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Take Screenshot \"\u003cScreenhsotFoldername\u003e\" from first driver",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "search created SIR",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "scroll to the update button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Verify field  Checkbox, \"Unauthorized\" in the \"Related Records\" tab underneath \"Caused by Change\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Take Screenshot \"\u003cScreenhsotFoldername\u003e\" from first driver",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "ritm02279450---add-caused-by-change,-unauthorized;verify-whether-checkbox,-\"unauthorized\"-in-the-\"related-records\"-tab-underneath-\"caused-by-change\"-on-the-sir-form;",
  "rows": [
    {
      "cells": [
        "NameInNaviagtor",
        "RequestedBy",
        "ScreenhsotFoldername",
        "ShortDescription",
        "row_Index"
      ],
      "line": 61,
      "id": "ritm02279450---add-caused-by-change,-unauthorized;verify-whether-checkbox,-\"unauthorized\"-in-the-\"related-records\"-tab-underneath-\"caused-by-change\"-on-the-sir-form;;1"
    },
    {
      "cells": [
        "Security Incident",
        "Manish Chaurasia",
        "STRY0021103_TC02_AC",
        "SC",
        "2"
      ],
      "line": 62,
      "id": "ritm02279450---add-caused-by-change,-unauthorized;verify-whether-checkbox,-\"unauthorized\"-in-the-\"related-records\"-tab-underneath-\"caused-by-change\"-on-the-sir-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1867500,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verify whether Checkbox, \"Unauthorized\" in the \"Related Records\" tab underneath \"Caused by Change\" on the SIR form",
  "description": "",
  "id": "ritm02279450---add-caused-by-change,-unauthorized;verify-whether-checkbox,-\"unauthorized\"-in-the-\"related-records\"-tab-underneath-\"caused-by-change\"-on-the-sir-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "#STRY0021103_TC02_Checkbox"
    }
  ],
  "line": 39,
  "name": "user launch the ITIL view",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "type \"Security Incident\" in filter navigator",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Cliks on the \"Visible to Me\" option",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Clicks on the New button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Take Screenshot \"STRY0021103_TC02_AC\" from first driver",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Fill the requested by as \"Manish Chaurasia\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Take Screenshot \"STRY0021103_TC02_AC\" from first driver",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Fille the short description as \"SC\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Scroll to the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Take Screenshot \"STRY0021103_TC02_AC\" from first driver",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Store SIR number in sheet in row \"2\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "SIR should be submitted sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Take Screenshot \"STRY0021103_TC02_AC\" from first driver",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "search created SIR",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "scroll to the update button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Verify field  Checkbox, \"Unauthorized\" in the \"Related Records\" tab underneath \"Caused by Change\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Take Screenshot \"STRY0021103_TC02_AC\" from first driver",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableMLFIncBrigdeWithEX.user_launch_the_ITIL_view()"
});
formatter.result({
  "duration": 7496620500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Security Incident",
      "offset": 6
    }
  ],
  "location": "TC01_STRY0021103.type_in_filter_navigator(String)"
});
formatter.result({
  "duration": 21320527600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Visible to Me",
      "offset": 14
    }
  ],
  "location": "TC01_STRY0021103.cliks_on_the_option(String)"
});
formatter.result({
  "duration": 10866473200,
  "status": "passed"
});
formatter.match({
  "location": "TC01_STRY0021103.clicks_on_the_New_button()"
});
formatter.result({
  "duration": 6023602200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.97)\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VBX00245\u0027, ip: \u002710.232.175.150\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562718 (9a2698cba08cf5..., userDataDir: C:\\Users\\chaurma\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 78.0.3904.97, webStorageEnabled: true}\nSession ID: ef573016d2c8a807315f9740e5efbc42\n*** Element info: {Using\u003dcss selector, value\u003dframe[name\u003d\u0027gsft_main\u0027],iframe[name\u003d\u0027gsft_main\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:878)\r\n\tat com.snow.customfunction.customefunction.SwitchToFrmaeByNameOrID(customefunction.java:172)\r\n\tat StepDefinition.TC01_STRY0021103.clicks_on_the_New_button(TC01_STRY0021103.java:101)\r\n\tat ✽.And Clicks on the New button(src/main/java/com/snow/feature/STRY0021103.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "STRY0021103_TC02_AC",
      "offset": 17
    }
  ],
  "location": "ReusableStepDefFile.take_Screenshot_from_first_driver(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manish Chaurasia",
      "offset": 26
    }
  ],
  "location": "TC01_STRY0021103.fill_the_requested_by_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STRY0021103_TC02_AC",
      "offset": 17
    }
  ],
  "location": "ReusableStepDefFile.take_Screenshot_from_first_driver(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SC",
      "offset": 32
    }
  ],
  "location": "TC01_STRY0021103.fille_the_short_description_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TC01_STRY0021103.scroll_to_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STRY0021103_TC02_AC",
      "offset": 17
    }
  ],
  "location": "ReusableStepDefFile.take_Screenshot_from_first_driver(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TC01_STRY0021103.clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "TC01_STRY0021103.store_SIR_number_in_sheet_in_row(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TC01_STRY0021103.sir_should_be_submitted_sucessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STRY0021103_TC02_AC",
      "offset": 17
    }
  ],
  "location": "ReusableStepDefFile.take_Screenshot_from_first_driver(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TC01_STRY0021103.search_created_SIR()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TC01_STRY0021103.scroll_to_the_update_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Unauthorized",
      "offset": 25
    },
    {
      "val": "Related Records",
      "offset": 47
    },
    {
      "val": "Caused by Change",
      "offset": 80
    }
  ],
  "location": "TC01_STRY0021103.verify_field_Checkbox_in_the_tab_underneath(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "STRY0021103_TC02_AC",
      "offset": 17
    }
  ],
  "location": "ReusableStepDefFile.take_Screenshot_from_first_driver(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReusableStepDefFile.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1436400,
  "status": "passed"
});
});