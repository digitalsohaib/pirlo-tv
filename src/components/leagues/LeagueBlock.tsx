import Link from "next/link";
import type { League, StandingRow } from "@/types/sports";
import { Card } from "@/components/ui/card";
import { getStandingsForLeague } from "@/lib/data/leagues";
import { getMatchesByLeague } from "@/lib/data/matches";

export function LeagueBlock({ league }: { league: League }) {
  const standings = getStandingsForLeague(league.slug).slice(0, 5);
  const fixtures = getMatchesByLeague(league.slug).slice(0, 3);

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">{league.name}</h2>
        <Link
          href={`/league/${league.slug}`}
          className="text-sm text-brand-red hover:underline"
        >
          Ver liga →
        </Link>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase text-white/50">
          Clasificación
        </h3>
        <StandingsMini rows={standings} />
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase text-white/50">
          Próximos partidos
        </h3>
        <ul className="space-y-2 text-sm">
          {fixtures.map((m) => (
            <li key={m.id}>
              <Link
                href={`/match/${m.slug}`}
                className="flex justify-between text-white/80 hover:text-brand-red"
              >
                <span>
                  {m.homeTeam.shortName} vs {m.awayTeam.shortName}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function StandingsMini({ rows }: { rows: StandingRow[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-xs text-white/40">
          <th className="pb-2">#</th>
          <th className="pb-2">Equipo</th>
          <th className="pb-2 text-right">Pts</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.team.id} className="border-t border-white/5">
            <td className="py-1.5 text-white/50">{r.position}</td>
            <td className="py-1.5">
              <Link href={`/team/${r.team.slug}`} className="hover:text-brand-red">
                {r.team.name}
              </Link>
            </td>
            <td className="py-1.5 text-right font-semibold">{r.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
