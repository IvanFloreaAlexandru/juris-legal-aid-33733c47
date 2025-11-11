import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function Login() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4 pt-20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-serif text-3xl">
            {t("Autentificare", "Login")}
          </CardTitle>
          <CardDescription>
            {t(
              "Conectați-vă la contul dumneavoastră",
              "Sign in to your account"
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("Adresă email", "Email address")}
              </label>
              <Input
                type="email"
                placeholder="email@exemplu.ro"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("Parolă", "Password")}
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-0"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded accent-red-500" />
                <span>{t("Ține-mă minte", "Remember me")}</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                {t("Ai uitat parola?", "Forgot password?")}
              </a>
            </div>

            <Button type="submit" size="lg" className="w-full">
              {t("Autentificare", "Sign In")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
