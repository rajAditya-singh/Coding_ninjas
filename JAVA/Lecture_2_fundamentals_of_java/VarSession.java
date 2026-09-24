package JAVA.Lecture_2_fundamentals_of_java;

public class VarSession {
    public static void main(String[] args) {
        System.out.println(1 + 2);
        int x = 60;
        System.out.println(x);

        // Declaring and initializing a variable
        int y = 10, a = 3, b = 7; // we can write multiple variable separating them with comma
        System.out.println(y + a + b);
        // Declaring a variable
        int z, c, d; // we can write multiple variable separating them with comma
        // initializing a variable
        z = 10;
        c = 9;
        d = 11;
        System.out.println(z + c + d);
        // reinitializing Variable
        x = 70;
        System.out.println(x);

        // Naming Rules for Variable
        // 1 - (Aa-Zz),(0-9), (_) and dollar($)
        // 2 - Java is a case sensitive language.
        // 3 - Variable name cannot start with a number, it can start with $ or _ or
        // alphabets.
        // 4 - No reserved Java keywords
    }
}