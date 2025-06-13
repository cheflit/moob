import { cn } from "@/lib/utils"

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "square" | "video" | "portrait" | "landscape"
  className?: string
}

export function PlaceholderImage({
  aspectRatio = "square",
  className,
  ...props
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-zinc-800",
        {
          "aspect-square": aspectRatio === "square",
          "aspect-video": aspectRatio === "video",
          "aspect-[3/4]": aspectRatio === "portrait",
          "aspect-[4/3]": aspectRatio === "landscape",
        },
        className
      )}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full items-center justify-center bg-zinc-900">
          <svg
            className="h-10 w-10 text-zinc-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
} 