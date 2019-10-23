//package com.snow.util;
//
//import java.io.FileInputStream;
//import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;
//
//
//import org.apache.poi.ss.usermodel.Row;
//import org.apache.poi.xssf.usermodel.XSSFSheet;
//import org.apache.poi.xssf.usermodel.XSSFWorkbook;
//
//public class GetdatafromExcel {
//
//	 private static String s = "Sheet1";
//	 private static String s1 = "C:/Users/chaurma/eclipse-workspace/SnowNowPageObjectFramework/TestData/Testdata.xlsx";
//	 private static Map<String, String> map = new HashMap<>();
//
//	 public String get(String testcasename,String columnname) throws IOException {
//	 FileInputStream fis;
//	 int k =0;
//	 try {
//	 fis = new FileInputStream(s1);
//	 @SuppressWarnings("resource")
//	XSSFWorkbook wb = new XSSFWorkbook(fis);
//	 XSSFSheet ws = wb.getSheet(s);
//	 int rows = ws.getPhysicalNumberOfRows();
//	 System.out.println("Rowwww : "+rows);
//	 for(int i=0;i<rows;i++){
//	 int cols = ws.getRow(i).getPhysicalNumberOfCells();
//	 System.out.println("Column : "+cols);
//	 for (int j = 0; j < cols; j++) { 
//		 System.out.println("Analysis : " +ws.getRow(i).getCell(j,Row.CREATE_NULL_AS_BLANK).toString());
//	 if(ws.getRow(i).getCell(j,Row.CREATE_NULL_AS_BLANK).toString().replace(".0", "").
//	 equalsIgnoreCase(columnname)){ 
////	 k=j;
//	
//	 }
//	 map.put(ws.getRow(i).getCell(0,Row.CREATE_NULL_AS_BLANK).toString().replace(".0", ""),
//			 ws.getRow(i).getCell(j,Row.CREATE_NULL_AS_BLANK).toString().replace(".0", ""));
//	 System.out.println("key  : " +ws.getRow(i).getCell(0,Row.CREATE_NULL_AS_BLANK).toString().replace(".0", ""));
//	 System.out.println("Value  : " + ws.getRow(i).getCell(j,Row.CREATE_NULL_AS_BLANK).toString().replace(".0", ""));
//	 }
//	 } 
//	 
//	 }catch (Exception e){e.printStackTrace(); } 
//	 return map.get(testcasename);
//	 } 
//	}
