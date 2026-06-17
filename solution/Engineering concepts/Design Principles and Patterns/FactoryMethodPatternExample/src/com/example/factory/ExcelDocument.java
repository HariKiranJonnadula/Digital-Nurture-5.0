package com.example.factory;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Excel spreadsheet (.xlsx)...");
    }

    @Override
    public void save() {
        System.out.println("Saving Excel spreadsheet (.xlsx)...");
    }

    @Override
    public void close() {
        System.out.println("Closing Excel spreadsheet (.xlsx)...");
    }
}
