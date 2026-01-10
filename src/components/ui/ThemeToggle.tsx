import { Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDark(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        // Toggle the theme
        if (isDark) {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setIsDark(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setIsDark(true)
        }
        // Show the modal
        setShowModal(true)
    }

    return (
        <>
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-slate-800 border-2 border-neo-border dark:border-white rounded-full shadow-neo dark:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-y-[-2px] hover:shadow-none transition-all"
            >
                {isDark ? <Sun className="text-white" size={24} /> : <Moon className="text-neo-text" size={24} />}
            </button>

            {/* Under Construction Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="relative bg-white dark:bg-slate-800 border-4 border-neo-border dark:border-white rounded-neo p-8 shadow-neo dark:shadow-[8px_8px_0_0_#fff] max-w-md mx-4 text-center">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                        >
                            <X size={20} className="text-neo-text dark:text-white" />
                        </button>
                        <div className="text-6xl mb-4">🚧</div>
                        <h3 className="text-2xl font-black text-neo-text dark:text-white uppercase tracking-tight mb-2">
                            Under Construction
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">
                            Dark mode is still being polished. Enjoy the preview!
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
