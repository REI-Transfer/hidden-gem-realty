/**
 * lib/thank-you-videos.ts — Static manifest for the /thank-you video gallery.
 *
 * Source of truth: the "hidden-gem-realty-blob" Vercel Blob store, folder
 * `new-thank-you/`. Pathnames below are hardcoded on purpose — there is
 * intentionally NO list() call at runtime or build time. If videos are
 * added/removed/renamed in the blob, update this file by hand.
 *
 * `file` holds the RAW (un-encoded) blob pathname. The gallery component encodes
 * it per-segment when building the final URL, so it must stay raw here.
 *
 * Flat list (5 videos) — no categories, unlike jenkins-homebuyers. Set
 * `vertical: true` on 9:16 sources so the player uses a portrait frame.
 */

export interface VideoEntry {
  title: string
  /** Raw blob pathname (includes the "new-thank-you/" prefix). */
  file: string
  /** 9:16 source: the player switches to a narrow portrait frame. */
  vertical?: boolean
}

export const VIDEOS: VideoEntry[] = [
  { title: "What Happens Next", file: "new-thank-you/1-tema.mp4" },
  { title: "Who We Are", file: "new-thank-you/2-tema.mp4" },
  { title: "We Don't Buy Every House", file: "new-thank-you/3-tema.mp4" },
  { title: "Quick Prep", file: "new-thank-you/4-tema.mp4" },
  { title: "Is Your Cash Buyer Legit?", file: "new-thank-you/hidden_gem2 - comprimido.mp4", vertical: true },
]
