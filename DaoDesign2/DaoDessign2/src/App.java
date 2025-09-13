
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class App {
    public static void main(String[] args) throws Exception {
        final String URL = "jdbc:mysql://localhost:3306/";
        final String DB = "studu?createDatabaseIfNotExist=true";
        final String USER_NAME = "root";
        final String USER_PASSWORD = "Raushan7033#";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(URL + DB, USER_NAME, USER_PASSWORD);
            System.out.println("database is connected" + conn.getClass());
            PreparedStatement ptst = conn.prepareStatement("select version()");
            ResultSet rs = ptst.executeQuery();
            rs.next();
            System.out.println("databse version is" + rs.getString(1));
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
