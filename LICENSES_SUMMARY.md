# License Summary

## 상업적 사용 가능 여부: ✅ **예**

이 프로젝트는 **상업적 목적으로 사용 가능**합니다. 모든 의존성이 MIT, Apache-2.0, BSD 등 Permissive 라이선스를 사용하고 있으며, 상업적 사용을 제한하는 GPL/AGPL 라이선스는 없습니다.

---

## 라이선스 분포

| 라이선스 | 패키지 수 | 주요 패키지 |
|---------|---------|---------|
| **MIT** | 410 | React, Next.js, MUI, Emotion, TypeScript, ESLint, Prettier, 기타 대부분 |
| **ISC** | 32 | glob, yarn, npm utilities |
| **Apache-2.0** | 12 | TypeScript, ESLint 관련 |
| **BSD-3-Clause** | 16 | Istanbul, source-map 관련 |
| **BSD-2-Clause** | 11 | ESLint, ESTree utilities |
| **BlueOak-1.0.0** | 4 | minipass 및 관련 패키지 |
| **기타** | 15 | CC0-1.0, CC-BY-4.0, WTFPL, 0BSD 등 |

---

## 상업적 사용 조건

### 1. 원본 라이선스 유지 (필수)
```
LICENSE.md 파일을 프로젝트에 포함하고 유지
```

### 2. 저작권 고지 (필수)
- Devias의 저작권 및 MIT 라이선스 조건을 공개
- 수정사항이 있으면 명시

### 3. 의존성 라이선스 공개 (권장)
- 이 `LICENSES_SUMMARY.md` 파일을 포함
- `check-licenses.js` 스크립트로 검증 가능

### 4. 배포 시 고려사항
- 상용화 시 `LICENSE.md` 및 `LICENSES_SUMMARY.md` 포함
- 각 라이선스별 요구사항 충족:
  - **MIT**: 저작권 고지 포함
  - **Apache-2.0**: 수정사항 명시
  - **BSD**: 저작권 고지 포함

---

## 라이선스 검증 방법

라이선스를 다시 검증하려면:

```bash
npm run analyze:licenses
```

또는 직접 스크립트 실행:

```bash
node check-licenses.js
```

---

## 주의사항

1. ✅ **상업적 사용 가능**: GPL/AGPL/SSPL 없음
2. ✅ **수정 및 배포 가능**: MIT/Apache-2.0/BSD 권장
3. ⚠️ **의존성 업데이트 시 재검증 권장**: 새 패키지 추가 시 라이선스 확인
4. ⚠️ **법적 검토 권장**: 상용화 전 법무팀과 상담

---

**생성일**: 2026-05-11  
**프로젝트**: material-kit-react v4.1.0  
**라이선스 분석 완료**: ✅ 상업적 사용 안전
