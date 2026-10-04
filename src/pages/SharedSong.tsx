import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Music2, Pause, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import appstorelogo from "@/assets/images/app-store.png";
import playstorelogo from "@/assets/images/play-store.png";
import { apiUrl, appSongLink, appStore, playStore } from "@/constants/url";

interface SharedSongData {
  shareId: string;
  title: string;
  audioUrl: string;
  coverUrl: string | null;
  genre: string | null;
  lyrics: string | null;
  duration: number | null;
}

type State = { status: "loading" } | { status: "missing" } | { status: "ready"; song: SharedSongData };

const formatTime = (seconds: number) => {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

/**
 * The page a shared song's link opens for someone who does not have the app:
 * they can hear the song, and the way to the app is right under it. With the
 * app installed, the same link opens the app instead (iOS universal link).
 */
const SharedSong = () => {
  const { shareId = "" } = useParams();
  const [state, setState] = useState<State>({ status: "loading" });
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    fetch(`${apiUrl}/musics/shared/${encodeURIComponent(shareId)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((body) => {
        if (cancelled) return;
        setState(body?.data?.audioUrl ? { status: "ready", song: body.data } : { status: "missing" });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "missing" });
      });
    return () => {
      cancelled = true;
    };
  }, [shareId]);

  useEffect(() => {
    if (state.status === "ready") document.title = `${state.song.title} | Flow AI`;
  }, [state]);

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audio.current;
    if (!el || !duration) return;
    const box = e.currentTarget.getBoundingClientRect();
    el.currentTime = Math.max(0, Math.min(1, (e.clientX - box.left) / box.width)) * duration;
  };

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-28 pb-16 flex justify-center">
        <div className="w-full max-w-md">
          {state.status === "loading" && (
            <div className="bg-white border border-line rounded-3xl p-8 shadow-lg animate-pulse">
              <div className="aspect-square rounded-2xl bg-wash" />
              <div className="h-6 bg-wash rounded mt-6 w-2/3" />
              <div className="h-4 bg-wash rounded mt-3 w-1/3" />
            </div>
          )}

          {state.status === "missing" && (
            <div className="bg-white border border-line rounded-3xl p-8 shadow-lg text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-wash flex items-center justify-center">
                <Music2 className="text-primary" size={28} />
              </div>
              <h1 className="text-2xl font-bold mt-6">This song is not available</h1>
              <p className="text-ink-body mt-3">
                The link may be wrong, or the person who made the song has stopped sharing it.
              </p>
            </div>
          )}

          {state.status === "ready" && (
            <div className="bg-white border border-line rounded-3xl p-6 md:p-8 shadow-lg">
              {state.song.coverUrl ? (
                <img
                  src={state.song.coverUrl}
                  alt={`Cover art for ${state.song.title}`}
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full aspect-square rounded-2xl bg-wash flex items-center justify-center">
                  <Music2 className="text-primary" size={56} />
                </div>
              )}

              <p className="text-sm font-semibold text-primary mt-6">Made with Flow AI</p>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight mt-1 break-words">{state.song.title}</h1>
              {state.song.genre && <p className="text-ink-muted mt-1">{state.song.genre}</p>}

              <audio
                ref={audio}
                src={state.song.audioUrl}
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onTimeUpdate={(e) => setPosition(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              />

              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={toggle}
                  aria-label={playing ? "Pause" : "Play"}
                  className="shrink-0 w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center shadow-lg hover:opacity-95 transition-opacity"
                >
                  {playing ? (
                    <Pause size={24} fill="currentColor" />
                  ) : (
                    <Play size={24} fill="currentColor" className="ml-1" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div
                    onClick={seek}
                    role="slider"
                    aria-label="Seek"
                    aria-valuemin={0}
                    aria-valuemax={Math.round(duration)}
                    aria-valuenow={Math.round(position)}
                    tabIndex={0}
                    className="h-2 rounded-full bg-wash cursor-pointer overflow-hidden"
                  >
                    <div
                      className="h-full bg-brand rounded-full"
                      style={{ width: duration ? `${(position / duration) * 100}%` : "0%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-ink-muted mt-2 tabular-nums">
                    <span>{formatTime(position)}</span>
                    <span>{formatTime(duration || state.song.duration || 0)}</span>
                  </div>
                </div>
              </div>

              {state.song.lyrics && (
                <details className="mt-6 border-t border-line pt-4">
                  <summary className="cursor-pointer font-semibold text-ink">Lyrics</summary>
                  <p className="whitespace-pre-line text-ink-body mt-3 text-sm leading-relaxed">
                    {state.song.lyrics}
                  </p>
                </details>
              )}

              <a
                href={appSongLink(state.song.shareId)}
                className="block text-center mt-6 py-3 rounded-xl border border-edge bg-wash text-primary font-semibold hover:bg-white transition-colors"
              >
                Open in the Flow app
              </a>
            </div>
          )}

          <div className="text-center mt-10">
            <h2 className="text-xl font-bold">Make your own song with AI</h2>
            <p className="text-ink-body mt-2">
              Describe an idea and Flow turns it into a complete song in about a minute.
            </p>
            <div className="flex justify-center gap-4 mt-5">
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-36 hover:opacity-90 transition-opacity"
              >
                <img src={appstorelogo} alt="Download on the App Store" className="w-full h-auto" />
              </a>
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-36 hover:opacity-90 transition-opacity"
              >
                <img src={playstorelogo} alt="Get it on Google Play" className="w-full h-auto" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SharedSong;
