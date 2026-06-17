public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening PDF document (.pdf)...");
    }

    @Override
    public void save() {
        System.out.println("Saving PDF document (.pdf)... (Read-Only Mode usually, but changes saved)");
    }

    @Override
    public void close() {
        System.out.println("Closing PDF document (.pdf)...");
    }
}
