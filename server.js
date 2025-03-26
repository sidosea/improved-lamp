const express = require('express');
const app = express();

const server = app.listen(8080, () => {
  console.log('서버 실행중 http://localhost:8080');
});

app.get('/', (req, res) => {
  res.send('테스트 서버');
}); 

process.on('SIGTERM', () => { //종료 코드
  server.close(() => {
    console.log('HTTP server closed')
  })
})
process.on('SIGINT', () => { //터미널에서 컨트롤 C 누르면 전달되는 메세지
  server.close(() => { //처리중인 요청은 알아서 마무리하고 종료
    console.log('HTTP server closed')
  })
}) 