export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n(?=## )/);

  return (
    <div className="seo-content">
      {blocks.map((block, i) => {
        const lines = block.trim().split("\n");
        const first = lines[0] ?? "";
        if (first.startsWith("## ")) {
          return (
            <section key={i}>
              <h2>{first.replace(/^## /, "")}</h2>
              {lines.slice(1).map((line, j) =>
                line.trim() ? <p key={j}>{line.trim()}</p> : null
              )}
            </section>
          );
        }
        if (first.startsWith("### ")) {
          return (
            <section key={i}>
              <h3>{first.replace(/^### /, "")}</h3>
              {lines.slice(1).map((line, j) =>
                line.trim() ? <p key={j}>{line.trim()}</p> : null
              )}
            </section>
          );
        }
        return lines.map((line, j) =>
          line.trim() ? <p key={`${i}-${j}`}>{line.trim()}</p> : null
        );
      })}
    </div>
  );
}
