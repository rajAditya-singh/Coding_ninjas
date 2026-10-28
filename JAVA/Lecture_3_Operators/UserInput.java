package JAVA.Lecture_3_Operators;

import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        float totalMarks = sc.nextFloat();
        int marks = sc.nextInt();

        // calculate percentage
        double percentage = (marks / totalMarks) * 100;
        System.out.println(percentage);

        sc.close();
    }
}
