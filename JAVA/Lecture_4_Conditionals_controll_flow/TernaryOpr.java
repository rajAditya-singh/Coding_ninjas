package JAVA.Lecture_4_Conditionals_controll_flow;

import java.util.Scanner;

public class TernaryOpr {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            int greatest = a>b ? (a>c ? a:c ) : (b>c ? b:c ) ;
            System.out.println(greatest);

            sc.close();
        }
}
