import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Channel } from "@/types/sports";

export function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <article className="card-interactive flex flex-col p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/15 text-sm font-black text-brand-red">
        {channel.name.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="font-bold text-white">{channel.name}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/45">
        {channel.description}
      </p>
      <p className="mt-3 text-2xs text-white/35">
        {channel.countries.slice(0, 3).join(" · ")}
      </p>
      <div className="mt-4 flex items-center gap-4 border-t border-white/[0.06] pt-4">
        <Link href={`/channel/${channel.slug}`} className="text-sm font-semibold text-brand-red">
          Detalles
        </Link>
        <a
          href={channel.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1 text-2xs text-white/35 hover:text-white"
        >
          Oficial <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
