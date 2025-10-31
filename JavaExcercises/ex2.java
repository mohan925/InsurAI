public class ex2 {
    public static void main(String[] args) {
        int a = 10, b = 3;
        
        System.out.println("Arithmetic Operators:");
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
        
        System.out.println("\nRelational Operators:");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));

        boolean x = true, y = false;
        System.out.println("\nLogical Operators:");
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));

        int c = a;
        System.out.println("\nAssignment Operators:");
        c += b;
        System.out.println("c += b: " + c);
        c -= b;
        System.out.println("c -= b: " + c);
        c *= b;
        System.out.println("c *= b: " + c);
        c /= b;
        System.out.println("c /= b: " + c);
        c %= b;
        System.out.println("c %= b: " + c);

        int d = 5;
        System.out.println("\nIncrement and Decrement Operators:");
        System.out.println("d++: " + (d++));
        System.out.println("After d++: " + d);
        System.out.println("++d: " + (++d));
        System.out.println("d--: " + (d--));
        System.out.println("After d--: " + d);
        System.out.println("--d: " + (--d));

        int e = 6, f = 4;
        System.out.println("\nBitwise Operators:");
        System.out.println("e & f: " + (e & f));
        System.out.println("e | f: " + (e | f));
        System.out.println("e ^ f: " + (e ^ f));
        System.out.println("~e: " + (~e));
        System.out.println("e << 1: " + (e << 1));
        System.out.println("e >> 1: " + (e >> 1));
    }
}