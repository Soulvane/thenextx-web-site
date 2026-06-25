'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      // Try to open the app after a short delay
      setTimeout(() => {
        window.location.href = 'yogylogy://login-callback';
      }, 1500);
    }
  }, [searchParams]);

  const openApp = () => {
    window.location.href = 'yogylogy://login-callback';
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">
        {status === 'loading' && (
          <div className="space-y-4">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 text-sm">인증 중...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">이메일 인증 완료!</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                계정이 활성화되었습니다.<br />
                앱으로 돌아가서 로그인해주세요.
              </p>
            </div>
            <button
              onClick={openApp}
              className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              Yogylogy 앱 열기
            </button>
            <p className="text-xs text-gray-400">
              앱이 설치되어 있지 않다면{' '}
              <a
                href="https://play.google.com/store/apps"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                다운로드
              </a>
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">인증 실패</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                링크가 만료되었거나 유효하지 않아요.<br />
                앱에서 다시 시도해주세요.
              </p>
            </div>
            <button
              onClick={openApp}
              className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
            >
              Yogylogy 앱 열기
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
      </main>
    }>
      <CallbackContent />
    </Suspense>
  );
}
