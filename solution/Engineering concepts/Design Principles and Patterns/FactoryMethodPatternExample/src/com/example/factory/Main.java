package com.example.factory;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Testing Factory Method Pattern ===");

        // Declare a factory reference
        DocumentFactory factory;

        // 1. Create and process a Word Document
        System.out.println("\n--- Word Document Scenario ---");
        factory = new WordDocumentFactory();
        Document doc1 = factory.createDocument();
        doc1.open();
        doc1.save();
        doc1.close();

        // 2. Create and process a PDF Document (Using helper processDocument method)
        System.out.println("\n--- PDF Document Scenario (Using processDocument) ---");
        factory = new PdfDocumentFactory();
        factory.processDocument();

        // 3. Create and process an Excel Document
        System.out.println("\n--- Excel Document Scenario ---");
        factory = new ExcelDocumentFactory();
        Document doc3 = factory.createDocument();
        doc3.open();
        doc3.save();
        doc3.close();

        System.out.println("\n=== Factory Method Pattern Test Completed ===");
    }
}
