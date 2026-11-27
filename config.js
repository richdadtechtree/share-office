/* ══════════════════════════════════════════════════════════════
   합동 비서실 · config.js
   ──────────────────────────────────────────────────────────────
   이 파일 하나만 고치면 배포가 끝납니다.

   1) databaseURL
      Firebase 콘솔 → 빌드 → Realtime Database → 데이터 탭 위의 주소.
      예) https://my-office-default-rtdb.firebaseio.com
      비워 두면 “로컬 데모 모드”로 바로 동작합니다.
      (페이지의 [에이전트 초대 → 실시간 DB 연결]에서 붙여넣어도 되고,
       그때는 이 브라우저의 localStorage에만 저장됩니다.)

   2) demoMode
      "auto" : databaseURL이 있으면 실시간, 없으면 데모 (기본)
      "on"   : 항상 데모 (발표·시연용)
      "off"  : 반드시 실시간 (연결 실패 시 데모로 떨어짐)

   3) pollMs
      실시간 스트림(SSE)이 막힌 환경에서 다시 읽는 주기(ms).

   ⚠️ 이 파일과 페이지에는 개인정보를 넣지 마세요. GitHub Pages는 공개됩니다.
   ══════════════════════════════════════════════════════════════ */
window.OFFICE_CONFIG = {
  databaseURL: '',

  /* 전체 Firebase 설정 JSON을 그대로 붙여도 됩니다.
     getDatabase() 설정 객체를 복사해 넣으면 databaseURL만 읽어 씁니다. */
  firebase: {
    // apiKey: "",
    // authDomain: "",
    databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: "",
    // appId: ""
  },

  demoMode: 'auto',
  pollMs: 20000
};
