import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT, PROGRAM_OPTIONS, whatsappLink, mailtoLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  mobile: z.string().trim().regex(/^[0-9+\s-]{7,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  qualification: z.string().trim().min(2, "Please enter your qualification").max(80),
  program: z.string().min(1, "Please select a program"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [program, setProgram] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      mobile: String(fd.get("mobile") ?? ""),
      email: String(fd.get("email") ?? ""),
      city: String(fd.get("city") ?? ""),
      qualification: String(fd.get("qualification") ?? ""),
      program,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const message =
      `New Career Guidance Request — KVCE%0A` +
      `Name: ${d.name}%0AMobile: ${d.mobile}%0AEmail: ${d.email}%0A` +
      `City: ${d.city}%0AQualification: ${d.qualification}%0AInterested Program: ${d.program}`;
    const readable = message.replace(/%0A/g, "\n");
    window.open(whatsappLink(readable), "_blank", "noopener");
    toast.success("Opening WhatsApp to send your details", {
      description: "Prefer email? We've also prepared a draft for you.",
      action: {
        label: "Email instead",
        onClick: () =>
          window.open(mailtoLink("Career Guidance Request — KVCE", readable), "_blank"),
      },
    });
    e.currentTarget.reset();
    setProgram("");
  }

  const field = (
    id: keyof z.infer<typeof schema>,
    label: string,
    type = "text",
    placeholder = "",
  ) => (
    <div>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <Input id={id} name={id} type={type} placeholder={placeholder} className="mt-1.5 bg-card" />
      {errors[id] && <p className="mt-1 text-xs text-destructive">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        {field("name", "Full Name", "text", "Your name")}
        {field("mobile", "Mobile Number", "tel", "+91 ...")}
        {field("email", "Email Address", "email", "you@example.com")}
        {field("city", "City", "text", "Your city")}
        {field("qualification", "Current Qualification", "text", "e.g. 12th, Graduate")}
        <div>
          <Label className="text-sm font-medium">Interested Program</Label>
          <Select value={program} onValueChange={setProgram}>
            <SelectTrigger className="mt-1.5 bg-card">
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              {PROGRAM_OPTIONS.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.program && <p className="mt-1 text-xs text-destructive">{errors.program}</p>}
        </div>
      </div>
      <Button type="submit" size="lg" className="w-full kasat-gradient text-white shadow-glow hover:opacity-95">
        <Send className="size-4" /> Get Free Career Guidance
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We'll reach out via WhatsApp or call you at {CONTACT.phone}.
      </p>
    </form>
  );
}
