"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getItemLocation } from "@/data/curriculum";
import { ItemDetailActions } from "@/components/ItemDetailActions";
import { resolveItemFocus } from "@/lib/focusMode";
import { useProgress } from "@/components/ProgressProvider";

function focusLabel(tag: "blender" | "traditional" | "both") {
  if (tag === "blender") return "Blender";
  if (tag === "traditional") return "Traditional";
  return null;
}

export default function ItemDetailPage() {
  const params = useParams<{ id: string }>();
  const loc = getItemLocation(params.id);
  const { getStatus } = useProgress();

  if (!loc) {
    return (
      <div className="animate-rise">
        <p className="text-muted">
          Item not found.{" "}
          <Link href="/" className="text-accent underline">
            Home
          </Link>
        </p>
      </div>
    );
  }

  const { item, module, backHref, backLabel } = loc;
  const status = getStatus(item.id);
  const focus = focusLabel(resolveItemFocus(item, module));
  const primaryLinks = [
    ...(item.url
      ? [{ label: "Open resource", url: item.url }]
      : []),
    ...(item.links ?? []),
  ];

  return (
    <div className="animate-rise">
      <Link
        href={backHref}
        className="inline-flex min-h-11 items-center gap-1.5 -ml-1 rounded-md px-1 text-sm font-medium text-accent hover:underline"
      >
        <span aria-hidden>←</span>
        <span>Back to {backLabel}</span>
      </Link>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        <span>{item.kind}</span>
        {item.supporting && <span>· supporting</span>}
        {item.optional && <span>· optional</span>}
        {focus && <span>· {focus}</span>}
        {status === "done" && <span className="text-accent">· done</span>}
        {status === "dismissed" && <span>· dismissed</span>}
        {status === "in_progress" && (
          <span className="text-accent">· in progress</span>
        )}
        {status === "reference" && <span>· reference</span>}
      </div>

      <p className="mt-2 text-xs text-muted">
        {loc.kind === "roadmap" ? (
          <>
            <Link href={backHref} className="hover:text-accent">
              {loc.section.title}
            </Link>
            <span aria-hidden> · </span>
            {module.title}
          </>
        ) : loc.kind === "reference" ? (
          <>
            <Link href={backHref} className="hover:text-accent">
              Reference
            </Link>
            <span aria-hidden> · </span>
            {module.title}
          </>
        ) : (
          <>
            <Link href={backHref} className="hover:text-accent">
              Foundations
            </Link>
            <span aria-hidden> · </span>
            {module.title}
          </>
        )}
      </p>

      <h1
        className="mt-3 font-display text-2xl font-800 tracking-tight text-ink sm:text-3xl"
        style={{ fontWeight: 800 }}
      >
        {item.title}
      </h1>

      {item.description && (
        <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-soft">
          {item.description}
        </p>
      )}

      {item.detail && (
        <section className="mt-8">
          <h2
            className="font-display text-lg font-700 text-ink"
            style={{ fontWeight: 700 }}
          >
            How to approach it
          </h2>
          <div className="mt-2 max-w-prose space-y-3 text-sm leading-relaxed text-ink-soft sm:text-base">
            {item.detail.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      )}

      {item.steps && item.steps.length > 0 && (
        <section className="mt-8">
          <h2
            className="font-display text-lg font-700 text-ink"
            style={{ fontWeight: 700 }}
          >
            Steps
          </h2>
          <ol className="mt-3 max-w-prose list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink sm:text-base">
            {item.steps.map((step, i) => (
              <li key={i} className="pl-1 text-ink-soft marker:font-semibold marker:text-accent">
                <span className="text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {item.criteria && (
        <section className="mt-8 rounded-md border border-[var(--line)] bg-paper-deep/35 px-4 py-4">
          <h2
            className="font-display text-lg font-700 text-ink"
            style={{ fontWeight: 700 }}
          >
            Done when
          </h2>
          <div className="mt-2 max-w-prose space-y-2 text-sm leading-relaxed text-ink-soft">
            {item.criteria.split(/\n+/).map((line, i) => (
              <p key={i}>{line.replace(/^·\s*/, "· ")}</p>
            ))}
          </div>
        </section>
      )}

      {(primaryLinks.length > 0 || item.findHint) && (
        <section className="mt-8">
          <h2
            className="font-display text-lg font-700 text-ink"
            style={{ fontWeight: 700 }}
          >
            Links
          </h2>
          <ul className="mt-3 space-y-2 text-sm sm:text-base">
            {primaryLinks.map((link) => (
              <li key={link.url + link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent underline-offset-2 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {item.findHint && (
            <p className="mt-2 text-sm text-muted">
              Find: <span className="text-ink-soft">{item.findHint}</span>
            </p>
          )}
        </section>
      )}

      <section className="mt-10 border-t border-[var(--line)] pt-6">
        <ItemDetailActions item={item} />
      </section>

      <div className="mt-10 pb-4">
        <Link
          href={backHref}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          <span aria-hidden>←</span>
          Back to {backLabel}
        </Link>
      </div>
    </div>
  );
}
