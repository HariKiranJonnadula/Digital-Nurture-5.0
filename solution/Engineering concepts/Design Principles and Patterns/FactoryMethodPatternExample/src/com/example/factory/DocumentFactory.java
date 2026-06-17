package com.example.factory;

public abstract class DocumentFactory {
    // Factory Method to be implemented by subclasses
    public abstract Document createDocument();

    // Helper method to create and process a document
    public Document processDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        doc.close();
        return doc;
    }
}
