package com.snow.textcontext;

import com.service.pageobjectmanager.PageObjectManager;
import com.service.pageobjectmanager.PageObjectManagerIETL;
import com.snow.base.TestBase;

public class TextContext {
	
	private PageObjectManager pageObjectManager;
	
	private PageObjectManagerIETL PageObjectManagerIETL;
	private ScenarioContext scenarioContext;
	
	public TextContext(){
		
		pageObjectManager = new PageObjectManager(TestBase.getWebDriver());
		PageObjectManagerIETL=new PageObjectManagerIETL(TestBase.getWebDriver());
		scenarioContext = new ScenarioContext();
	}
	
	
	
	public PageObjectManager getPageObjectManager() {
		return pageObjectManager;
	}
	public PageObjectManagerIETL getPageObjectManagerIETL() {
		return PageObjectManagerIETL;
	}
	public ScenarioContext getScenarioContext() {
		return scenarioContext;
	}
}
