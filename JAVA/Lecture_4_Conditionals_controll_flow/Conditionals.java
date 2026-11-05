package JAVA.Lecture_4_Conditionals_controll_flow;

import java.util.Scanner;

public class Conditionals {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        if (num % 2 == 0) {
            // System.out.println("Num Is Even");
        }else{
            // System.out.println("Num Is Odd5");
        }

        // System.out.println("OutSide If");

        if(num>0){
        System.out.println("Positive");
        }
        else if(num<0){
        System.out.println("Negative");
        }else{
        System.out.println("Num is zero");
        }

        sc.close();
    }
}
