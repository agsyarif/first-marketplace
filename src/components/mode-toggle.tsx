import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const {theme, setTheme } = useTheme()

  return (
    <div>
      <Button size='icon' onClick={() =>setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
      </Button>
    </div>
  )
}
