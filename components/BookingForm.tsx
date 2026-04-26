"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

const SERVICES = [
  "Body Massage",
  "Facial Treatments",
  "Aromatherapy",
  "Hot Stone Therapy",
  "Couple's Package",
  "Bridal Package",
  "Hair Spa",
  "Foot Reflexology",
  "Membership - Silver",
  "Membership - Gold",
  "Membership - Diamond",
  "Membership - Platinum",
  "Membership - VIP",
];

const TIME_SLOTS = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

const REFERRALS = [
  "Google Search",
  "Instagram",
  "Facebook",
  "Friend / Family Recommendation",
  "Walk-In",
  "Other",
];

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  date: z
    .string()
    .min(1, "Please select a date")
    .refine((d) => new Date(d) >= new Date(new Date().toDateString()), {
      message: "Please select a future date",
    }),
  time: z.string().min(1, "Please select a time slot"),
  guests: z.number().min(1).max(4),
  specialRequests: z.string().optional(),
  referral: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingForm() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { guests: 1, service: prefilledService },
  });

  useEffect(() => {
    if (prefilledService) setValue("service", prefilledService);
  }, [prefilledService, setValue]);

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        ...data,
        access_key: "e49b682f-4a70-4b87-9bb4-4dfc3886f61f"
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.success) throw new Error(json.message || "Something went wrong");

      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unable to submit. Please try again.");
    }
  };

  return (
    <div className="relative">
      {/* Success state */}
      {status === "success" && (
        <div className="absolute inset-0 z-10 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 text-center p-8">
          <div className="w-16 h-16 rounded-full border border-[#c9a84c] flex items-center justify-center">
            <CheckCircle className="text-[#c9a84c]" size={32} />
          </div>
          <h3
            className="font-display text-3xl font-light text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Booking Received!
          </h3>
          <p className="text-[#d4c9b8] text-sm max-w-sm">
            We&apos;ll confirm your booking within 2 hours via WhatsApp and Email.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="booking-form">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
              Full Name *
            </label>
            <input
              {...register("fullName")}
              id="booking-name"
              placeholder="Your full name"
              className="luxury-input w-full"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
              Phone Number *
            </label>
            <div className="flex">
              <span className="luxury-input w-auto px-3 flex items-center text-[#d4c9b8] text-sm border-r-0 shrink-0 bg-[rgba(255,255,255,0.02)]">
                +91
              </span>
              <input
                {...register("phone")}
                id="booking-phone"
                placeholder="10-digit number"
                className="luxury-input flex-1"
                maxLength={10}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
            Email Address *
          </label>
          <input
            {...register("email")}
            id="booking-email"
            type="email"
            placeholder="your@email.com"
            className="luxury-input w-full"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
            Select Service *
          </label>
          <select
            {...register("service")}
            id="booking-service"
            className="luxury-input w-full"
          >
            <option value="">Choose a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
          )}
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
              Preferred Date *
            </label>
            <input
              {...register("date")}
              id="booking-date"
              type="date"
              min={today}
              className="luxury-input w-full"
            />
            {errors.date && (
              <p className="mt-1 text-xs text-red-400">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
              Preferred Time *
            </label>
            <select {...register("time")} id="booking-time" className="luxury-input w-full">
              <option value="">Select a time slot…</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-1 text-xs text-red-400">{errors.time.message}</p>
            )}
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
              Number of Guests
            </label>
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4].map((n) => (
                <label
                  key={n}
                  className="flex items-center justify-center w-10 h-10 border border-[rgba(201,168,76,0.3)] text-sm text-[#d4c9b8] cursor-pointer hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200 has-[:checked]:bg-[#c9a84c] has-[:checked]:text-[#0a0a0a] has-[:checked]:border-[#c9a84c]"
                >
                  <input
                    type="radio"
                    className="sr-only"
                    value={n}
                    {...register("guests", { valueAsNumber: true })}
                  />
                  {n}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
              How Did You Hear About Us?
            </label>
            <select
              {...register("referral")}
              id="booking-referral"
              className="luxury-input w-full"
            >
              <option value="">Select…</option>
              {REFERRALS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 6 */}
        <div>
          <label className="block text-xs font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-2">
            Special Requests
          </label>
          <textarea
            {...register("specialRequests")}
            id="booking-special-requests"
            rows={4}
            placeholder="Any allergies, preferences, or special occasions…"
            className="luxury-input w-full resize-none"
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div className="flex items-center gap-3 p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
            <AlertCircle size={16} />
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          id="booking-submit"
          disabled={status === "loading"}
          className="btn-gold w-full flex items-center justify-center gap-3 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <Send size={14} />
              Confirm Booking Request
            </>
          )}
        </button>

        <p className="text-center text-[rgba(212,201,184,0.5)] text-xs">
          We&apos;ll confirm your booking within 2 hours via WhatsApp & Email
        </p>
      </form>
    </div>
  );
}
