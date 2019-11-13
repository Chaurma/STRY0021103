//package Runnner;
//import java.io.File;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//
//import org.junit.AfterClass;
//import org.junit.runner.RunWith;
//
//import com.cucumber.listener.Reporter;
//import com.service.pageobjectmanager.FileReaderManager;
//
//import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
//
//
//@RunWith(Cucumber.class)
//@CucumberOptions(features = {
//	
//	
//		
//		//"src/main/java/com/snow/feature/ReusableSteps.feature",
//		"src/main/java/com/snow/feature/STR0021103_test4.feature"
//		
//		
//		
//		},
//plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target4/Extent Cucumber-reports/report.html"},
//
//glue = {"StepDefinition","ReusableStepDefinitionFile"}, 
//format = {
//		
//		"pretty", "html:target4/cucumber-reports/cucumber-pretty",
//		"json:target4/cucumber-reports/CucumberTestReport.json", "junit:target/cucumber-reports/cucumber.xml",
//		"rerun:target4/cucumber-reports/rerun.txt"
// },
// dryRun = false, monochrome = true, strict = true 
//
////,tags = {"@Third","~@Second","~@Third","~@Fourth","~@Fifth"}
////,tags = {"@First,@Second,@Fourth,@Fifth,@Sixth,@Seventh,@Eight"}
//)
//public class testrunner4It {
//
//}
