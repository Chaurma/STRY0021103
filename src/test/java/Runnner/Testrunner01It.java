package Runnner;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.listener.Reporter;
import com.service.pageobjectmanager.FileReaderManager;
import com.snow.util.TestUtil;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = {
	
	
		
		//"src/main/java/com/snow/feature/ReusableSteps.feature",
		"src/main/java/com/snow/feature/STRY0021103.feature"
		
		
		
		},
plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/CucumberReport/Extent/ExtentReport.html"},

glue = {"StepDefinition","ReusableStepDefinitionFile"}, 
format = {
		
		//"pretty", "html:target/CucumberReport/index.html", 
		"json:target/CucumberReport"
				+ "/CumcumberJson.json",
		"junit:target/CucumberReport/CucumberJunit.xml","rerun:target/CucumberReport/rerun.txt" },
 dryRun = false, monochrome = true, strict = true 

,tags = {"@Second,@Report","~@Fifth"}
//,tags = {"@First,@Second,@Fourth,@Fifth,@Sixth,@Seventh,@Eight"}
)

public class Testrunner01It {
	
	
	public static WebDriver driver;
	 @SuppressWarnings("static-access")
	public static void writeExtentReport() {
	 Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
	 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
     Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
     Reporter.setSystemInfo("Selenium", "3.7.0");
     Reporter.setSystemInfo("Maven", "3.5.2");
     Reporter.setSystemInfo("Java Version", "1.8.0_151");
     
		 
	 }
//	 @BeforeClass
//	 public static void intialize()
//	 {
//		 System.setProperty("webdriver.chrome.driver",FileReaderManager.getInstance().getConfigReader().getDriverPath());
//			System.out.println("Initial2 : "+driver);
//			
//			driver=new ChromeDriver();
//			System.out.println("Initial3 : "+driver);
//			
//		
//		
//		System.out.println("Initial3.1 : "+driver);
//		driver.manage().window().maximize();
//		System.out.println("Initial4 : "+driver);
//		driver.manage().deleteAllCookies();
//		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
//		driver.manage().timeouts().implicitlyWait(TestUtil.implicit_wait, TimeUnit.SECONDS);
//		System.out.println("Initial5 : "+driver);
//		driver.get("https://facebook.com");
//		driver.quit();
//
//		
//		
//		System.out.println("Initial6 : "+driver);
//		
//		
//	 }
}



