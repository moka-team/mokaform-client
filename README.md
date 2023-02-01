# 🗂 MOKAFORM

**MOKAFORM**은 자유롭게 설문을 제작ㆍ공유ㆍ참여 할 수 있는 웹 어플리케이션입니다. <br/><br/>

# **What's Included?**

## Features
• ⚡ [React](https://ko.reactjs.org/) for Static Site Generator

• 💖 Code Formatter with [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)

## Version
```json
"react": "^18.2.0",
"react-cookie": "^4.1.1",
"react-dom": "^18.2.0",
"react-router-dom": "^6.4.1",
"recoil": "^0.7.5",
"recoil-persist": "^4.2.0",
"@mui/material": "^5.10.6",
```
## Structure


```bash
.
├── README.md                                             
├── public                          
│   ├── img
├── src
│   ├── api                                  
│   ├── authentication                      
│   ├── components                    
│   ├── pages                       
│   ├── App.css                      
│   └── App.js                       
│   └── atoms.js       
│   ├── index.js                    
│   └── routes.js                       
│   └── setupProxy.js  
├── JenkinsFile
├── deployment.yaml            
├── service.yaml               
```

<br/>

# Getting Started

### Clone the repo
```bash
git clone https://github.com/moka-team/mokaform-client.git
```

### Install

Install all dependencies

```bash
cd mokaform-client
npm install # 필요한 패키지 설치
```

### Running

```bash
npm start 
```

✅  Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

## Commands
- `npm start` : 애플리케이션 `http://127.0.0.1:3000/` 에서 실행

<br/>

# Convention
## commit message rule
|Tag|Contents|remarks|
|---|---|---|
|`feat`|새로운 기능 추가||
|`fix`|버그 수정||
|`hotfix`|치명적인 버그 수정|PR merge 규칙 무시 가능|
|`docs`|문서 및 주석 수정||
|`refactor`|프로덕션 코드 리팩토링||
|`chore`|설정 파일 수정|프로덕션 코드에 변경이 없는 경우|
|`test`|테스트 코드 추가, 테스트 리팩토링|프로덕션 코드에 변경이 없는 경우|
|`style`|오타 수정, 코드 포맷팅|프로덕션 코드에 변경이 없는 경우|
|`design`|css 등 사용자 ui 변경||
- `[tag]: [contents] ([Jira ticket number])`
- 예시: `feat: 로그인 페이지 추가 (MOKA-xxxx)`

### branch rule
- `[tag]/[jira ticker number]`
- 예시: `feat/MOKA-22`
