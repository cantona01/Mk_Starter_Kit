/**
 * 푸터 컴포넌트
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-slate-900">Travel Guide</h3>
            <p className="mt-2 text-sm text-slate-600">
              세계의 아름다운 여행지를 발견하세요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">탐험</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/destinations" className="text-slate-600 hover:text-blue-600">
                  여행지
                </a>
              </li>
              <li>
                <a href="/search" className="text-slate-600 hover:text-blue-600">
                  검색
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">계정</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/auth/login" className="text-slate-600 hover:text-blue-600">
                  로그인
                </a>
              </li>
              <li>
                <a href="/auth/signup" className="text-slate-600 hover:text-blue-600">
                  가입하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">정보</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-blue-600">
                  개인정보보호
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-blue-600">
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>&copy; 2024 Travel Guide. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  )
}
