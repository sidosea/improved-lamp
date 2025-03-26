FROM node:20-slim 
#설치할 OS, docker 에서 서치해온것 쓰면 된다
WORKDIR /app 
#파일들을 설치할 디렉토리 설정
COPY . .  
#COPY 이걸 -> 이미지내부파일경로 로 이동, 마침표는 현재 경로를 의미
RUN ["npm", "install"] 
#실행할 커맨드 
EXPOSE 8080 
#어떤 포트 쓸건지 단순히 메모하는 용도
CMD ["node", "server.js"] 
#실행할 커맨드