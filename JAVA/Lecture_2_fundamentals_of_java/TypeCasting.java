package JAVA.Lecture_2_fundamentals_of_java;

public class TypeCasting {
    public static void main(String[] args) {
        double d=432.2341342d;
        // int i=d; // this is incorrect as it can not store a larger memory into smaller memory.
        short currentYear = 2026;
        byte age=25;

        // short birthYear=currentYear-age;//as any operation is treated as int and we cannot store int in short.
        short birthYear=(short)(currentYear-age);
        System.out.println(birthYear);
        
    }
}
