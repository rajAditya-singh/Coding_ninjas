package JAVA.Lecture_2_fundamentals_of_java;

class DataTypes {
    public static void main(String[] args) {
        //Integral Datatypes (1byte = 8 bits)
        byte a = 127; //-128 to 127/ take 1 byte 
        short b = 32767; //-32768 to 32767/ takes 2 bytes
        int c = 2147483647;//-2147483648 to 2147483647/ takes 4 bytes
        long d = 2134234324123123219l;// takes 8 bytes and we have to write l or L at last to make it understand that its long.
        
        //Floating Point(Decimals)
        //by default java treats every decimal value as a double, if we want to make it float then we need to add f at the last.
        float e = 762.2f;//takes 4 bytes
        double f = 872.324532424324;// takes 8 bytes
    }
}
