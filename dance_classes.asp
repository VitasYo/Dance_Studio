<% 
' Определение пути к базе данных
Dim conn, dbPath, connStr
dbPath = Server.MapPath("dance_classes.mdb") ' Укажите путь к вашему .mdb файлу

' Строка подключения
connStr = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & dbPath

' Создание объекта подключения и его открытие
Set conn = Server.CreateObject("ADODB.Connection")
conn.Open connStr
%>
