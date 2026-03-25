import { cn } from '@/lib/utils'

export const FlowHoverButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode
    children?: React.ReactNode
    hoverText?: React.ReactNode
    href?: string
  }
> = ({ icon, children, hoverText, href, className, ...props }) => {
  const classes = cn(
    `group relative cursor-pointer z-0 flex items-center justify-center overflow-hidden rounded-full
    border border-border bg-card
    px-6 py-3.5 font-semibold text-foreground transition-all duration-500
    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
    before:rounded-[100%] before:bg-foreground before:transition-transform before:duration-1000 before:content-[""]
    hover:scale-105 hover:text-background hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95`,
    className
  )

  const content = (
    <>
      {/* Default state */}
      <span className="relative z-10 flex items-center gap-2 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
        {icon}
        {children}
      </span>
      {/* Hover state */}
      {hoverText && (
        <span className="absolute inset-0 z-10 flex items-center justify-center text-sm font-semibold opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          {hoverText}
        </span>
      )}
    </>
  )

  if (href) {
    return <a href={href} className={classes}>{content}</a>
  }

  return <button className={classes} {...props}>{content}</button>
}
