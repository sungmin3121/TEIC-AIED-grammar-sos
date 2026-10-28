// ══════════════════════════════════════════════════════════════
//  문법 세트: 의문사 + to부정사 (교생실습 6차시 원본 내용)
//
//  게임의 섬·미션 진행 방식은 index.html에 그대로 두고,
//  "무엇을 연습하는지"에 해당하는 영어 문장·정답·힌트만 이 파일에 모았다.
//  다른 문법으로 바꾸려면 이 파일과 같은 구조의 새 파일을 만들면 된다.
//  (함수 없이 문자열·숫자·배열만 쓰므로 JSON으로도 그대로 저장 가능)
//
//  섬 순서(팀 번호 순): 0 화산, 1 북극, 2 정글, 3 사막, 4 바다, 5 공룡
// ══════════════════════════════════════════════════════════════
window.GRAMMAR_SETS = window.GRAMMAR_SETS || {};
window.GRAMMAR_SETS['wh-to'] = {
  id: 'wh-to',
  title: '의문사 + to부정사',
  titleEn: 'Wh-word + to-infinitive',
  tagline: '의문사 + to부정사로 살아남아라',

  // ── MISSION 1 · 위치 파악: 빈칸에 들어갈 카드 고르기 ──
  m1: {
    typeLabel: '의문사 카드 선택',
    stepLabel: '올바른 의문사를 선택하세요',
    promptBefore: '"I don\'t know ',
    promptAfter: ' to go. Help me!"',
    promptKr: '어디로 가야 할지 모르겠어요! 도와주세요!',
    options: [
      { word: 'what', kr: '무엇을' },
      { word: 'where', kr: '어디서/어디로' },
      { word: 'how', kr: '어떻게' },
      { word: 'who', kr: '누구를' },
    ],
    answer: 'where',
    correctFeedback: '<strong>WHERE to go</strong> — "어디로 가야 할지" 맞아요!',
    wrongHint: '"어디로 가야 할지"에 맞는 의문사를 다시 골라보세요!',
  },

  // ── MISSION 2 · 거주지 짓기: 문장 조각 배열 ──
  m2: {
    typeLabel: '문장 조각 배열',
    promptKr: '어떻게 쉼터를 지어야 할지 물어보세요! (how to build)',
    answer: ['tell', 'us', 'how', 'to', 'build', 'a shelter'],
    wrongHint: '"tell us ___ to ___ a shelter" 형태예요.',
  },

  // ── MISSION 3 · 식량 구하기: 왼쪽 카드와 오른쪽 카드 짝짓기 ──
  m3: {
    typeLabel: '의문사-동사 매칭',
    stepLabel: '의문사와 동사를 올바르게 매칭하세요 (3개 모두)',
    promptBefore: '"We have no idea ',
    promptAfter: '. Help me!"',
    promptKr: '의문사를 선택하고 맞는 동사와 연결하세요!',
    leftLabel: '의문사',
    leftSuffix: ' ~할지',
    left: [
      { word: 'what', kr: '무엇을', color: '#f97316' },
      { word: 'where', kr: '어디서', color: '#38bdf8' },
      { word: 'how', kr: '어떻게', color: '#22c55e' },
    ],
    rightLabel: '동사구',
    right: [
      { text: 'to find food', correct: 'where' },
      { text: 'to cook it', correct: 'how' },
      { text: 'to eat', correct: 'what' },
    ],
    doneFeedback: '모두 완성! 이제 무엇을 먹을지 선택하세요!',
    aiLine: 'Here are your options. Choose what to eat, where to find it, and how to cook it!',
    // 식량 카드의 세 줄 설명 머리말 (식량 정보 what / where / how 순서)
    foodLabels: [
      { word: 'WHAT', rest: ' to eat: ', color: '#f97316' },
      { word: 'WHERE', rest: ' to find: ', color: '#38bdf8' },
      { word: 'HOW', rest: ' to cook: ', color: '#22c55e' },
    ],
  },

  // ── MISSION 4 · 동료 만나기: 문장 OX 판단 ──
  m4: {
    typeLabel: 'OX 판단',
    instructionKr: '각 문장이 올바른 의문사+to부정사인지 판단하세요.',
    passCount: 4,
    items: [
      { sentence: '"I know <strong>what to do</strong> next!"', correct: true, reason: '올바른 의문사+to부정사 ✅' },
      { sentence: '"I know <strong>why to go</strong> there!"', correct: false, reason: 'why는 to부정사와 함께 쓸 수 없어요 ❌' },
      { sentence: '"Tell me <strong>how to find</strong> water!"', correct: true, reason: '올바른 의문사+to부정사 ✅' },
      { sentence: '"I\'ll show you <strong>what should we eat</strong>!"', correct: false, reason: '의문사+to부정사 형태가 아니에요 ❌' },
      { sentence: '"I have no idea <strong>who to trust</strong>!"', correct: true, reason: '올바른 의문사+to부정사 ✅' },
      { sentence: '"Let me decide <strong>where should we go</strong>!"', correct: false, reason: '의문사+to부정사 형태가 아니에요 ❌' },
    ],
  },

  // ── 달 기지 이벤트: 떨어지는 표현 타자 게임 ──
  moon: {
    introEn: 'A meteor shower is incoming! Type the correct phrases to destroy them.<br>\n      <strong>Typing WHY will damage your HP! Watch out!</strong>',
    introKr: '운석이 쏟아진다! 올바른 의문사+to부정사 구문을 입력해서 운석을 격파하라.<br>\n        <strong style="color:var(--danger);">WHY가 포함된 구문을 입력하면 HP가 깎인다!</strong>',
    placeholder: '의문사+to부정사 입력 후 Enter...',
    examples: '예: what to do / where to go / how to survive / who to trust (띄어쓰기 포함해서 입력)',
    // trap: true인 표현은 틀린 표현 (입력하면 HP 감소, 바닥에 떨어져도 괜찮음)
    trapPrefixes: ['why'],
    trapMessage: '⚠️ WHY 입력! HP -1',
    phrases: [
      { text: 'what to do', trap: false },
      { text: 'where to go', trap: false },
      { text: 'how to survive', trap: false },
      { text: 'who to trust', trap: false },
      { text: 'when to leave', trap: false },
      { text: 'what to eat', trap: false },
      { text: 'where to find', trap: false },
      { text: 'how to build', trap: false },
      { text: 'who to contact', trap: false },
      { text: 'when to signal', trap: false },
      { text: 'what to bring', trap: false },
      { text: 'where to hide', trap: false },
      { text: 'how to escape', trap: false },
      { text: 'who to meet', trap: false },
      { text: 'when to run', trap: false },
      { text: 'why to go', trap: true },
      { text: 'why to stay', trap: true },
      { text: 'why to leave', trap: true },
      { text: 'why to hide', trap: true },
    ],
  },

  // ── MISSION 5 · 위기 대응: 7초 암기 후 릴레이 발화 (섬별 문장) ──
  m5: {
    typeLabel: '7초 암기 후 릴레이 발화',
    keyPrefix: 'make sure to + ',
    memoExampleA: 'The lava is flowing! Make sure to decide',
    memoExampleB: 'where to run before it is too late!',
    successText: '<strong>make sure to</strong>를 활용해서 위기를 극복했어요! 대단해요! 💪',
    islands: [
      { sentence: 'The lava is flowing toward us! Make sure to decide where to run before it is too late!', kr: '용암이 흘러온다! 너무 늦기 전에 어디로 달아날지 꼭 결정해야 한다!', key: 'where to run' },
      { sentence: 'A huge polar bear is right behind us! Make sure to find where to hide before it catches us!', kr: '거대한 북극곰이 바로 뒤에 있다! 잡히기 전에 어디에 숨을지 꼭 찾아야 한다!', key: 'where to hide' },
      { sentence: 'A jaguar is stalking us through the jungle! Make sure to figure out how to escape right now!', kr: '재규어가 정글 속에서 우리를 노리고 있다! 지금 당장 어떻게 탈출할지 꼭 알아야 한다!', key: 'how to escape' },
      { sentence: 'A massive sandstorm is heading our way! Make sure to decide where to take shelter before it hits!', kr: '거대한 모래폭풍이 다가오고 있다! 모래폭풍이 치기 전에 어디로 대피할지 꼭 결정해야 한다!', key: 'where to take shelter' },
      { sentence: 'A great white shark is circling around us! Make sure to know what to do before it attacks!', kr: '흰 상어가 우리 주위를 맴돌고 있다! 공격하기 전에 무엇을 해야 할지 꼭 알아야 한다!', key: 'what to do' },
      { sentence: 'The Tyrannosaurus is charging toward us! Make sure to decide where to run before it is too late!', kr: '티라노사우루스가 우리를 향해 돌진하고 있다! 너무 늦기 전에 어디로 달아날지 꼭 결정해야 한다!', key: 'where to run' },
    ],
  },

  // ── MISSION 6 · 신호 보내기: 짝꿍 모둠 협동 (A팀 질문, B팀 답변 2문장) ──
  // pairs 순서: 화산+북극, 정글+사막, 바다+공룡
  m6: {
    typeLabel: '두 모둠 협동',
    teamBHint: '💡 <strong>it is important to</strong> 문장과 <strong>make sure to</strong> 문장을 모두 완성해야 해요!',
    teamBLabel1: '문장 1 — it is important to...',
    teamBLabel2: '문장 2 — make sure to...',
    pairs: [
      {
        item: '화산 유리 거울 🪞', itemEn: 'a volcanic glass mirror',
        teamA_given: 'We have a volcanic glass mirror.',
        teamA_pieces: ['Do', 'you', 'know', 'how to use', 'it', '?'],
        teamA_correct: ['Do', 'you', 'know', 'how to use', 'it', '?'],
        teamA_full: 'We have a volcanic glass mirror. Do you know how to use it?',
        teamB_pieces1: ['It', 'is', 'important', 'to stand', 'in', 'an', 'open', 'area', '.'],
        teamB_correct1: ['It', 'is', 'important', 'to stand', 'in', 'an', 'open', 'area', '.'],
        teamB_pieces2: ['Make', 'sure', 'to decide', 'where', 'to aim', 'it', '!'],
        teamB_correct2: ['Make', 'sure', 'to decide', 'where', 'to aim', 'it', '!'],
        teamB_full: 'It is important to stand in an open area. Make sure to decide where to aim it!',
      },
      {
        item: '야자나무 횃불 🔦', itemEn: 'a palm tree torch',
        teamA_given: 'We have a palm tree torch.',
        teamA_pieces: ['Do', 'you', 'know', 'where to place', 'it', '?'],
        teamA_correct: ['Do', 'you', 'know', 'where to place', 'it', '?'],
        teamA_full: 'We have a palm tree torch. Do you know where to place it?',
        teamB_pieces1: ['It', 'is', 'important', 'to find', 'the', 'tallest', 'rock', '.'],
        teamB_correct1: ['It', 'is', 'important', 'to find', 'the', 'tallest', 'rock', '.'],
        teamB_pieces2: ['Make', 'sure', 'to decide', 'when', 'to light', 'it', '!'],
        teamB_correct2: ['Make', 'sure', 'to decide', 'when', 'to light', 'it', '!'],
        teamB_full: 'It is important to find the tallest rock. Make sure to decide when to light it!',
      },
      {
        item: '조개껍데기 나팔 🐚', itemEn: 'a shell horn',
        teamA_given: 'We have a shell horn.',
        teamA_pieces: ['Do', 'you', 'know', 'how to use', 'it', '?'],
        teamA_correct: ['Do', 'you', 'know', 'how to use', 'it', '?'],
        teamA_full: 'We have a shell horn. Do you know how to use it?',
        teamB_pieces1: ['It', 'is', 'important', 'to take', 'a', 'deep', 'breath', 'before', 'you', 'blow', '.'],
        teamB_correct1: ['It', 'is', 'important', 'to take', 'a', 'deep', 'breath', 'before', 'you', 'blow', '.'],
        teamB_pieces2: ['Make', 'sure', 'to decide', 'how long', 'to blow', 'it', '!'],
        teamB_correct2: ['Make', 'sure', 'to decide', 'how long', 'to blow', 'it', '!'],
        teamB_full: 'It is important to take a deep breath before you blow. Make sure to decide how long to blow it!',
      },
    ],
  },

  // ── MISSION 7 · 최종 탈출: 자유 작문 + 자동 체크 ──
  m7: {
    typeLabel: '자유 작문 + 발화',
    // 섬별 필수 안내 내용
    islands: [
      { island: 'volcano', key: 'where to land', keyKr: '착륙 장소', warning: '용암 때문에', hint: 'where to land safely away from lava' },
      { island: 'arctic', key: 'who/what to avoid', keyKr: '피해야 할 것', warning: '북극곰 때문에', hint: 'what to avoid (polar bears!)' },
      { island: 'jungle', key: 'how to reach', keyKr: '접근 방법', warning: '나무가 빽빽해서', hint: 'how to reach us through the trees' },
      { island: 'desert', key: 'which way to come', keyKr: '올 방향', warning: '모래폭풍 때문에', hint: 'which way to come to avoid the storm' },
      { island: 'ocean', key: 'how to land', keyKr: '착륙 방법', warning: '파도가 높아서', hint: 'how to land safely on the water' },
      { island: 'dino', key: 'who/what to avoid', keyKr: '피해야 할 것', warning: '공룡 때문에', hint: 'what to avoid (T-Rex and meteors!)' },
    ],
    // 목표 문법: 아래 표현이 몇 번 쓰였는지 센다 (대소문자 무시)
    target: {
      label: '의문사+to부정사',
      hint: 'what/where/how/who/when to-v',
      minCount: 3,
      patterns: ['what to', 'where to', 'how to', 'who to', 'when to', 'which way to', 'how long to'],
    },
    // 보너스 표현 (하나라도 포함되면 +1)
    bonus: [
      { cardHtml: '<strong>it is important to</strong> 포함 +1', checkLabel: 'it is important to 포함', scoreLabel: 'it is important to +1', patterns: ['it is important to'] },
      { cardHtml: '<strong>make sure to</strong> 또는 <strong>we made sure to</strong> 포함 +1', checkLabel: 'make sure to / made sure to 포함', scoreLabel: 'make sure to +1', patterns: ['make sure to', 'made sure to'] },
    ],
    gradingNote: '💡 <strong>채점 기준:</strong> 의문사+to부정사 문법 오류 여부만 채점해요.<br>\n          모르는 단어는 한글로 쓰거나 사전을 찾아봐도 돼요!',
    // 안내문 템플릿 ({island} 자리에 섬 이름이 들어감)
    templateHtml: '"Dear rescue team,<br>\n          We are stranded on {island}.<br>\n          <span style="color:var(--accent2);">It is important to</span> _______________.<br>\n          Please <span style="color:var(--accent2);">make sure to</span> _______________.<br>\n          We <span style="color:var(--accent2);">made sure to</span> _______________, but we need help.<br>\n          We don\'t know _______________, so please guide us.<br>\n          <span style="color:var(--accent);">(의문사+to부정사)</span> was the most important thing for our survival.<br>\n          We will signal you by _______________.<br>\n          Thank you, Survivors"',
  },
};
