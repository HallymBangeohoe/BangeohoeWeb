# 방어회 웹사이트

한림대학교 정보보안 동아리 **방어회**의 공식 홍보 웹사이트 소스입니다.

이 압축본은 2026년 10월 4일 기준 소스에서 새로 설치한 뒤 배포용 빌드가 정상 완료되는 것을 확인했습니다.

## 주요 구성

- 동아리 소개 및 핵심 활동
- 정보보안 커리큘럼
- 조직도
- 활동 기록 및 예정 활동
- 가입 안내와 FAQ
- 동아리 사진 슬라이드
- PC·모바일 반응형 화면

## 실행 환경

- Node.js 22.13 이상
- pnpm 11.25 이상

## 로컬에서 실행하기

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

실행 후 브라우저에서 `http://localhost:3000`을 열면 됩니다.

## 배포용 빌드 확인

```bash
pnpm build
pnpm start
```

## 주요 폴더

- `app/`: 페이지, 스타일, 사진 슬라이드
- `public/`: 방어회 로고, 한림대학교 로고, 동아리 사진
- `worker/`: Cloudflare Worker 실행 진입점
- `.openai/hosting.json`: 기존 Sites 배포 설정
- `package.json`, `pnpm-lock.yaml`: 실행에 필요한 패키지와 고정 버전

## GitHub에 처음 올리기

GitHub에서 빈 저장소를 만든 다음, 압축을 푼 폴더에서 아래 명령을 실행합니다.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/사용자명/저장소명.git
git push -u origin main
```

GitHub에 소스를 올리는 것만으로 웹사이트가 새 주소에 자동 배포되지는 않습니다. 공개 웹사이트로 운영하려면 GitHub 저장소를 별도의 호스팅 서비스와 연결해야 합니다. 현재 ChatGPT Sites 주소는 이 소스 저장소와 별개로 계속 유지됩니다.

## 수정할 때

- 화면 내용: `app/page.tsx`
- 전체 디자인: `app/globals.css`
- 모바일·PC 반응형 디자인: `app/responsive.css`
- 사진: `public/club-photos/`
- 로고 및 이미지: `public/`

민감한 정보나 개인 연락처는 소스에 직접 넣지 말고, 필요하면 호스팅 서비스의 환경변수를 사용하세요.
