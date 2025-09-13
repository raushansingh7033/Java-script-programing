import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class App {
    public static void main(String[] args) throws Exception {
        // JDBC : java database connectivity
        // Java JDBC API <-> DRIVER <-> MySQL

        final String URL = "jdbc:mysql://localhost:3306/";
        final String DB_NAME = "stuerp?createDatabaseIfNotExist=true";
        final String USERNAME = "root";
        final String PASSWORD = "Raushan7033#";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Driver loaded!");
            Connection con = DriverManager.getConnection(URL + DB_NAME, USERNAME, PASSWORD);
            System.out.println("connected to mysql succesfully!");
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("select version();");
            rs.next();
            System.out.println("We are using MySQL version :" + rs.getString(1));
            rs.close();
            st.close();
            con.close();
        } catch (ClassNotFoundException e) {
            System.out.println("kindly load the driver!" + e.getMessage());
        }
    }
}
