const path = require('path');

// /posts 요청이 들어왔을 때 호출
function getPost(req, res) {
    // res.send('<div><h1>Post Title</h1><p>This is post...</p></div>')
    
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'dog.jpg')); 
    // __dirname : 현재위치를 기준으로 현재 작업하고 있는 위치의 폴더 경로가 저장됨
    // 경로는 따로따로 지정하면 join이 알아서 연결해줌

    res.render('posts', {templateName : "post"})
}

module.exports = {getPost}