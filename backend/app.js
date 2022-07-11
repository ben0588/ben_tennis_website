// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// 允許跨域使用本服務
var cors = require("cors");
app.use(cors());

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( express.json() );
app.use( express.urlencoded({extended: false}) );

// 一切就緒，開始接受用戶端連線
// app.listen(process.env.PORT);
app.listen(8000);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("鍵盤「Ctrl + C」可結束伺服器程式.");

// 建立MYSQL連線
var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "spost"
});

// 連接成功則顯示err
conn.connect(function (err) {
    console.log(err);
})

// 先取得資料測試
// (req = request(要求),res = response(回復))
// app.get('/123',function(req,res){
//     // 需在對應網址localhost:8000/123才能看到
//     var list=[
//         {name:"測試1",title:"假資料1"},
//         {name:"測試2",title:"假資料2"},
//         {name:"測試3",title:"假資料3"},
//     ]
//     // 先測試是否連接正常
//     // res.send('OK');
//     // 將資料轉成JSON出去
//     res.send(JSON.stringify(list));
//           // 測試成功後改以下
// })

// 正式取資料庫內容
// (req = request(要求),res = response(回復))
app.get('/accessories',function(req,res){
    // 需在對應網址localhost:8000/home/test1才能看到
    conn.query("SELECT * FROM coach",
    [],
    // sqlResult = 呼叫SQL的result(結果)
    function(err,sqlResult){
        // 設定header標頭
        res.set({
            // 送出的資料型態是JSON讓別人呼叫時查看到
            "content-type":"application/json"
        })
        // 連接有問題時log出來直接跳出結束:
            if(err){
                console.log(JSON.stringify(sqlResult));
                return;
            }
        // 連線成功時繼續執行:
            // 使用postman查看Content-Type:application/json (物件格式)
            // res.send(sqlResult);

            // 使用postman查看Content-Type:text/html; charset=utf-8 (純文字)
            res.send(JSON.stringify(sqlResult))
    })

})

// 依照id值顯示內容,在Route也要設定新的put={/accessories/:id},component={新的一頁} 
// (req = request(要求),res = response(回復))
app.get("/accessories/:id", function (req, res) {
    conn.query("SELECT * FROM coach WHERE cid = ?", 
        // req.params.id = 發送請求時傳送的參數id值
        [req.params.id],
        function (err, sqlResult) {
            // console.log(sqlResult);
            // 取得資料以文字型態顯示,因為抓取出來是個陣列,單一抓值要[0]才能抓成功
            res.send( JSON.stringify(sqlResult[0]) );
        }
    )
})

// 新增內容
// (req = request(要求),res = response(回復))


