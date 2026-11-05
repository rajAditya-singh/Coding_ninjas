package JAVA.Lecture_4_Conditionals_controll_flow;

import java.util.*;

public class ScolerShip_eligibility {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Your Marks");
        double marks = sc.nextDouble();
        // System.out.println("Enter Your Marks");
        // double gpa = sc.nextDouble();
        // float star = sc.nextFloat();
        if(marks>=65){
            System.out.println("Enter Your GPA");
            double gpa = sc.nextDouble();
            System.out.println("Enter Your Marks");
            float star = sc.nextFloat();
            if(gpa>=3.5 || star>=3){
                System.out.println("Eligible For Scolership");
            }else{
                System.out.println("Not Eligible For Scolership");
            }
        }
        else{
                System.out.println("Sorry! Not Eligible For Scolership");
        }
        sc.close();
    }
}
