import { LoginForm } from '@/components/auth/LoginForm'

/**
 * 로그인 페이지
 */
export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12 px-4">
      <LoginForm />
    </div>
  )
}
