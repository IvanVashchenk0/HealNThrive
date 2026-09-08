/** Counts only eligible playback intervals, using a monotonic clock supplied by the caller. */
export class PlaybackClock {
  private elapsed = 0;
  private startedAt: number | null = null;
  private completed = false;
  private readonly durationMs: number;

  constructor(durationSeconds: number) {
    this.durationMs = durationSeconds * 1000;
  }

  update(counting: boolean, now: number): boolean {
    if (this.startedAt !== null) this.elapsed += Math.max(0, now - this.startedAt);
    this.startedAt = counting ? now : null;
    if (counting && !this.completed && this.elapsed >= this.durationMs) {
      this.completed = true;
      return true;
    }
    return false;
  }
}
