package ReusableStepDefinitionFile;

import com.snow.base.TestBase;
import com.snow.textcontext.TextContext;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
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
	
	@After
	public void AfterSteps() {
		System.out.println("QQQQQQQQ");
	//	textContext.getPageObjectManager().getWebDriverManager().quitDriver();
		//textContext.getPageObjectManagerIETL().getWebDriverManager().quitDriver();
		

}
}
