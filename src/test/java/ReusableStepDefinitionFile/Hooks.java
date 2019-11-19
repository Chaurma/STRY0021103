package ReusableStepDefinitionFile;

import java.util.List;

import com.snow.customfunction.customefunction;
import com.snow.textcontext.TextContext;
import com.snow.util.ZipUtils;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	 private List <String> fileList;
	    private static final String OUTPUT_ZIP_FILE = System.getProperty("user.dir")+"//Folder.zip";
	    private static final String SOURCE_FOLDER = System.getProperty("user.dir")+"\\target\\CucumberReport"; // SourceFolder path
	TextContext textContext;
	public Hooks(TextContext context) {
		textContext = context;
	}
	@Before
	public void BeforeSteps() {
		/*What all you can perform here
			Starting a webdriver
			Setting up DB connections
			Setting up test data
			Setting up browser cookies
			Navigating to certain page
			or anything before the test
		*/
	}
	
	@After (order=1)
	public void AfterSteps() {
		System.out.println("QQQQQQQQ");
		textContext.getPageObjectManager().getWebDriverManager().quitDriver();
		textContext.getPageObjectManagerIETL().getWebDriverManager().quitDriver();
		customefunction.sleep(10000);
		ZipUtils sp=new ZipUtils();
	
		sp.zipfile();
		
}
	
	
		
		
		
	        
}
	

	
