import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { Meteors } from "../ui/Meteors";
import { Reveal } from "../ui/Reveal";
import { profile } from "../../data/portfolio";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("service_ddclsy4", "template_adedo21", form.current, {
        publicKey: "DzHQI_VoICLyCfAau",
      })
      .then(
        () => {
          toast.success("Thanks! I'll get back to you soon.");
          form.current.reset();
        },
        () => toast.error(`Couldn't send. Email me at ${profile.email}`)
      )
      .finally(() => setSending(false));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section-shell">
      <Toaster
        position="bottom-center"
        toastOptions={{ style: { background: "#171717", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" } }}
      />
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-10 md:p-14">
          <Meteors number={18} />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">05 — Contact</p>
              <h2 className="heading-gradient mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Have an ERP or business system to build?
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
                I'm open to full-stack roles and interesting product work. Send a message, or reach me
                directly.
              </p>

              <div className="mt-10 space-y-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex w-full max-w-sm items-center justify-between gap-3 rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-left text-sm text-neutral-200 transition hover:border-white/20"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <FiMail className="h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="truncate">{profile.email}</span>
                  </span>
                  {copied ? (
                    <FiCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  ) : (
                    <FiCopy className="h-4 w-4 shrink-0 text-neutral-500 group-hover:text-white" />
                  )}
                </button>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-200 transition hover:border-white/20"
                >
                  <FiPhone className="h-4 w-4 text-cyan-300" /> {profile.phone}
                </a>
                <div className="flex gap-3 pt-2">
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-neutral-300 transition hover:bg-white/10 hover:text-white">
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-neutral-300 transition hover:bg-white/10 hover:text-white">
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs text-neutral-400">Name</span>
                  <input required type="text" name="to_name" className={inputClass} placeholder="Jane Doe" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs text-neutral-400">Email</span>
                  <input required type="email" name="from_email" className={inputClass} placeholder="jane@company.com" />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-xs text-neutral-400">Message</span>
                <textarea required name="message" rows={6} className={`${inputClass} resize-none`} placeholder="Tell me about the role or project…" />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-medium text-neutral-950 transition hover:bg-neutral-200 disabled:cursor-wait disabled:opacity-60"
              >
                {sending ? "Sending…" : (<>Send message <FiSend className="h-4 w-4" /></>)}
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
