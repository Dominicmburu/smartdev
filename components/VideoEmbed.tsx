// Responsive 16:9 YouTube embed, styled to match Figure's frame + caption so a
// video slots into a lesson the same way a diagram does.
export function VideoEmbed({
  videoId,
  title,
  caption,
}: {
  videoId: string;
  title: string;
  caption?: string;
}) {
  return (
    <figure className="my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
      <div className="relative w-full overflow-hidden rounded-md" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
