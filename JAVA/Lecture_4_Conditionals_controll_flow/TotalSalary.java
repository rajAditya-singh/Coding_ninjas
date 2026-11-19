package JAVA.Lecture_4_Conditionals_controll_flow;
import java.util.*;
public class TotalSalary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double basic_sal = sc.nextDouble();
        char grade = sc.next().charAt(0);

        double HRA = (20.0/100.0)*basic_sal;
        double DA = (50.0/100.0)*basic_sal;
        double PF = (11.0/100.0)*basic_sal;
        int allowance;
        if(grade=='A'){
            allowance=1700;
        }else if(grade=='B'){
            allowance=1500;
        }else{
            allowance=1300;
        }

        int TotalSalary=(int)(basic_sal+HRA+DA+allowance-PF); 
        // System.out.println(Math.round(TotalSalary));
        System.out.println(TotalSalary);

        sc.close();
    }
}
