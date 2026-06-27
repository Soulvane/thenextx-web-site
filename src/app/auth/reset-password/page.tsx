'use client';

import { useEffect, useState } from 'react';

const SUPABASE_URL = 'https://tyeulpyzsabnioxrzuep.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Wc7zSLUvzv9CR--WgI_5FA_vJaTiivW';

type Status = 'loading' | 'form' | 'submitting' | 'success' | 'error';

export default function ResetPasswordPage() {
  const [status, setStatus] = useState<Status>('loading');
  const [accessToken, setAccessToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
    const type = params.get('type');

    if (token && type === 'recovery') {
      setAccessToken(token);
      setStatus('form');
    } else {
      setStatus('error');
      setErrorMsg('유효하지 않은 링크입니다.');
    }
  }, []);

  const handleSubmit = async () => {
    if (password.length < 6) {
      setErrorMsg('비밀번호는 6자 이상이어야 합니다.');
      return;
    }
    if (password !== confirm) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
      return;
    }

    setErrorMsg('');
    setStatus('submitting');

    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: 'PUT',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json();
        setErrorMsg(data.message || '오류가 발생했습니다. 다시 시도해주세요.');
        setStatus('form');
      }
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다.');
      setStatus('form');
    }
  };

  const openApp = () => {
    window.location.href = 'yogylogy://login-callback';
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">

        {status === 'loading' && (
          <div className="space-y-4">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 text-sm">확인 중...</p>
          </div>
        )}

        {(status === 'form' || status === 'submitting') && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">새 비밀번호 설정</h1>
              <p className="text-gray-500 text-sm">6자 이상의 새 비밀번호를 입력해주세요.</p>
            </div>

            <div className="space-y-3 text-left">
              <input
                type="password"
                placeholder="새 비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                disabled={status === 'submitting'}
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                disabled={status === 'submitting'}
              />
            </div>

            {errorMsg && (
              <p className="text-red-500 text-sm">{errorMsg}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'submitting'}
              className="w-full bg-black text-white py-3 px-6 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? '처리 중...' : '비밀번호 변경'}
            </button>
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
              <h1 className="text-2xl font-bold text-gray-900">비밀번호 변경 완료!</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                새 비밀번호로 앱에서 로그인해주세요.
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

        {status === 'error' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">링크 오류</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                {errorMsg || '링크가 만료되었거나 유효하지 않아요.'}<br />
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
