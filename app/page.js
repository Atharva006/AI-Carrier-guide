import Image from "next/image";
import Link from "next/link";
import { Mail, Eye, ArrowRight, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 dark:text-white">
      {/* Navbar */}
      <header className="w-full border-b border-gray-200 dark:border-border-dark bg-white/50 dark:bg-bg-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 text-brand-primary">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight">AI Career Coach</h2>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-slate-500 hover:text-brand-primary dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            Need help?
          </Link>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full h-full">
        
        {/* Left Side: Hero */}
        <div className="relative w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center items-start overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-lg">
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>New Features Live</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">
                Career Potential
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Your AI-Powered Career Strategist. Accelerate your career growth
              with personalized, data-driven insights tailored just for you.
            </p>
            
            <div className="flex gap-4 items-center text-sm font-medium text-slate-500 dark:text-slate-400">
              <div className="flex -space-x-3">
                {/* Placeholders for avatars - using simple divs for demo, replace with <Image> if you have assets */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-bg-dark bg-gray-300 overflow-hidden relative">
                     {/* Use Next/Image here for real avatars */}
                     <div className="w-full h-full bg-slate-200 dark:bg-slate-700" /> 
                  </div>
                ))}
              </div>
              <span>Trusted by 10,000+ professionals</span>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-[440px] bg-white dark:bg-card-dark rounded-xl shadow-xl border border-gray-200 dark:border-border-dark p-8 relative overflow-hidden">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-blue-400"></div>
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Please enter your details to sign in.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button className="flex items-center justify-center gap-3 w-full h-12 bg-gray-50 dark:bg-[#232633] hover:bg-gray-100 dark:hover:bg-[#2e3242] border border-gray-200 dark:border-border-dark rounded-lg text-sm font-bold transition-all text-slate-700 dark:text-white cursor-pointer">
                {/* Google Icon Placeholder */}
                <div className="w-5 h-5 rounded-full bg-slate-400 flex items-center justify-center text-[10px] text-white">G</div>
                Sign in with Google
              </button>
              <button className="flex items-center justify-center gap-3 w-full h-12 bg-gray-50 dark:bg-[#232633] hover:bg-gray-100 dark:hover:bg-[#2e3242] border border-gray-200 dark:border-border-dark rounded-lg text-sm font-bold transition-all text-slate-700 dark:text-white cursor-pointer">
                 {/* LinkedIn Icon Placeholder */}
                 <div className="w-5 h-5 rounded-md bg-blue-700 text-white flex items-center justify-center text-[10px]">in</div>
                Sign in with LinkedIn
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-gray-200 dark:border-border-dark"></div>
              <span className="flex-shrink-0 mx-4 text-xs font-medium text-slate-400 uppercase tracking-wide">
                Or continue with
              </span>
              <div className="flex-grow border-t border-gray-200 dark:border-border-dark"></div>
            </div>

            {/* Email Form */}
            <form className="flex flex-col gap-5">
              {/* Email Field */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email Address
                </span>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-input-dark border border-gray-200 dark:border-border-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-base outline-none text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Mail size={20} />
                  </div>
                </div>
              </label>

              {/* Password Field */}
              <label className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Password
                  </span>
                  <Link
                    href="#"
                    className="text-xs font-semibold text-brand-primary hover:text-blue-400"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-input-dark border border-gray-200 dark:border-border-dark focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-base outline-none text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-brand-primary transition-colors">
                    <Eye size={20} />
                  </div>
                </div>
              </label>

              {/* Submit Button */}
              <button
                type="button"
                className="mt-2 w-full h-12 bg-brand-primary hover:bg-blue-600 active:scale-[0.98] text-white font-bold rounded-lg shadow-lg shadow-brand-primary/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Sign In</span>
                <ArrowRight size={18} strokeWidth={3} />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="#"
                  className="font-bold text-brand-primary hover:text-blue-400 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-border-dark py-6 mt-auto">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2024 AI Career Coach. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-brand-primary transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}