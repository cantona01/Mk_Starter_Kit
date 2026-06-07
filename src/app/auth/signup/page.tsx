import { SignupForm } from '@/components/auth/SignupForm'

/**
 * 회원가입 페이지
 */
export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12 px-4">
      <SignupForm />
    </div>
  )
}
