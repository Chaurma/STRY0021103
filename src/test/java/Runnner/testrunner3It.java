package Runnner;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;
import com.service.pageobjectmanager.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = {
	
	
		
		//"src/main/java/com/snow/feature/ReusableSteps.feature",
		"src/main/java/com/snow/feature/STR0021103_test2.feature"
		
		
		
		},
plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target3/Extent Cucumber-reports/report.html"},

glue = {"StepDefinition","ReusableStepDefinitionFile"}, 
format = {
		
		"pretty", "html:target3/cucumber-reports/cucumber-pretty",
		"json:target3/cucumber-reports/CucumberTestReport.json", "junit:target/cucumber-reports/cucumber.xml",
		"rerun:target3/cucumber-reports/rerun.txt"
 },
 dryRun = false, monochrome = true, strict = true 

//,tags = {"@Third","~@Second","~@Third","~@Fourth","~@Fifth"}
//,tags = {"@First,@Second,@Fourth,@Fifth,@Sixth,@Seventh,@Eight"}
)
public class testrunner3It {
	 @SuppressWarnings("static-access")
		@AfterClass
		 public static void writeExtentReport() {
		 Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
		 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	    Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	    Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
	    Reporter.setSystemInfo("Selenium", "3.7.0");
	    Reporter.setSystemInfo("Maven", "3.5.2");
	    Reporter.setSystemInfo("Java Version", "1.8.0_151");
	    
			 
		 }
}
