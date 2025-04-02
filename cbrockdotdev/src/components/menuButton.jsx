export default function MenuButton({
  className,
  title,
  disabled = false,
  children,
}) {
  return (
    <button
      className={`focus-visible:ring-ring relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[14px] px-3 py-[3px] font-display text-lg font-light whitespace-nowrap text-light-500 transition-all duration-200 hover:text-secondary-500 hover:shadow-[inset_0_0_18px_rgba(252,_163,_17,_0.25)] hover:ring-1 hover:ring-secondary-500 focus-visible:ring-1 focus-visible:outline-none active:shadow-none active:brightness-[0.8] active:drop-shadow-none disabled:pointer-events-none disabled:opacity-50 md:text-xl [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${className}`}
      title={title}
      type="button"
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
}
