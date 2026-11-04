/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "정준영",
    nameEn: "GROOM",
    father: "정종철",
    mother: "문수정",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "권순화",
    nameEn: "BRIDE",
    father: "권기훈",
    mother: "이혜경",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-03-13",
    time: "15:30",
    venue: "이룸웨딩컨벤션",
    hall: "5층",
    address: "서울특별시 마포구 마포대로 78 경찰공제회 자람빌딩",
    tel: "02-714-2121",
    mapLinks: {
      kakao: "https://kko.to/SOuEKO6IGu",
      naver: "https://naver.me/5WOQPS6i"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n함께 축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "정준영", bank: "OO은행", number: "000-0000-000000" },
      { role: "아버지", name: "정종철", bank: "OO은행", number: "000-0000-000000" },
      { role: "어머니", name: "문수정", bank: "OO은행", number: "000-0000-000000" }
    ],
    bride: [
      { role: "신부", name: "권순화", bank: "OO은행", number: "000-000-000000" },
      { role: "아버지", name: "권기훈", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "이혜경", bank: "OO은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "결혼식에 초대합니다",
    description: ""
  }
};
