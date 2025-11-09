import { useLanguage } from "@/contexts/LanguageContext";
import { Scale, Briefcase, Home, Users, Gavel, Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

import officeImage3 from "@/assets/office-4.jpg";

export default function DomeniiDePractica() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const basePath =
    language === "ro" ? "/domenii-de-practica" : "/legal-services";

  const services = [
    {
      icon: Scale,
      title: t("Drept civil", "Civil Law"),
      description: t(
        "Contracte, litigii civile, executări silite, recuperări creanțe",
        "Contracts, civil litigation, forced executions, debt recovery"
      ),
      path: `${basePath}/${language === "ro" ? "drept-civil" : "civil-law"}`,
    },
    {
      icon: Briefcase,
      title: t("Proprietate intelectuală", "Intellectual Property"),
      description: t(
        "Constituire societăți, fuziuni, achiziții, restructurări",
        "Company formation, mergers, acquisitions, restructuring"
      ),
      path: `${basePath}/${
        language === "ro" ? "proprietate-intelectuala" : "intellectual-property"
      }`,
    },
    {
      icon: Home,
      title: t("Drept societar", "Corporate Law"),
      description: t(
        "Tranzacții imobiliare, verificări juridice, asistență notarială",
        "Real estate transactions, legal checks, notarial assistance"
      ),
      path: `${basePath}/${
        language === "ro" ? "drept-societar" : "corporate-law"
      }`,
    },
    {
      icon: Users,
      title: t("Restructurare și recuperare creanțe", "Debt Recovery"),
      description: t(
        "Divorț, partaj, custodie copii, pensie de întreținere",
        "Divorce, partition, child custody, alimony"
      ),
      path: `${basePath}/${
        language === "ro" ? "restructurare-recuperare" : "debt-recovery"
      }`,
    },
    {
      icon: Gavel,
      title: t("Insolvență", "Insolvency"),
      description: t(
        "Apărare în procese penale, reprezentare victimă, cauțiune",
        "Criminal defense, victim representation, bail"
      ),
      path: `${basePath}/${language === "ro" ? "insolventa" : "insolvency"}`,
    },
    {
      icon: Building,
      title: t(
        "Drept bancar, asigurări, piața de capital și finanțare",
        "Banking & Finance Law"
      ),
      description: t(
        "Contracte bancare, tranzacții financiare, asigurări",
        "Bank contracts, financial transactions, insurance"
      ),
      path: `${basePath}/${
        language === "ro" ? "drept-financiar" : "banking-finance-law"
      }`,
    },
    {
      icon: Building,
      title: t("Arbitraj intern și internațional", "Arbitration"),
      description: t(
        "Soluționarea disputelor prin arbitraj intern și internațional",
        "Resolution of disputes via domestic and international arbitration"
      ),
      path: `${basePath}/${
        language === "ro" ? "arbitraj-executare" : "arbitration"
      }`,
    },
    {
      icon: Building,
      title: t("Proceduri de executare silită", "Enforcement Procedures"),
      description: t(
        "Executarea obligațiilor prin proceduri legale",
        "Enforcement of obligations through legal procedures"
      ),
      path: `${basePath}/${
        language === "ro"
          ? "proceduri-executare-silita"
          : "enforcement-procedures"
      }`,
    },
    {
      icon: Building,
      title: t(
        "Drept administrativ, fiscal și contencios constituțional",
        "Administrative & Constitutional Law"
      ),
      description: t(
        "Asistență în domeniul administrativ, fiscal și contencios",
        "Assistance in administrative, fiscal, and constitutional matters"
      ),
      path: `${basePath}/${
        language === "ro" ? "drept-administrativ-fiscal" : "administrative-law"
      }`,
    },
    {
      icon: Building,
      title: t("Dreptul concurenței și ajutor de stat", "Competition Law"),
      description: t(
        "Achiziții publice și reglementări concurențiale",
        "Public acquisitions and competition regulations"
      ),
      path: `${basePath}/${
        language === "ro" ? "drept-concurenta-ajutor" : "competition-law"
      }`,
    },
    {
      icon: Building,
      title: t(
        "Dreptul muncii și al securității sociale",
        "Labor & Social Security Law"
      ),
      description: t(
        "Contracte de muncă, concedieri, discriminare, hărțuire",
        "Employment contracts, dismissals, discrimination, harassment"
      ),
      path: `${basePath}/${language === "ro" ? "drept-munca" : "labor-law"}`,
    },
    {
      icon: Building,
      title: t("Protecția consumatorului", "Consumer Protection"),
      description: t(
        "Asistență juridică în relația cu consumatorii",
        "Legal assistance in consumer relations"
      ),
      path: `${basePath}/${
        language === "ro" ? "protectia-consumatorului" : "consumer-protection"
      }`,
    },
    {
      icon: Building,
      title: t("Dreptul mediului", "Environmental Law"),
      description: t(
        "Reglementări și litigii în domeniul mediului",
        "Regulations and litigation in environmental law"
      ),
      path: `${basePath}/${
        language === "ro" ? "drept-mediu" : "environmental-law"
      }`,
    },
    {
      icon: Building,
      title: t("Drepturile omului. Proceduri CEDO", "Human Rights & ECHR"),
      description: t(
        "Asistență în litigii privind drepturile omului",
        "Assistance in human rights litigation"
      ),
      path: `${basePath}/${
        language === "ro" ? "drepturile-omului-cedo" : "human-rights"
      }`,
    },
    {
      icon: Building,
      title: t("Drept penal", "Criminal Law"),
      description: t(
        "Apărare în procese penale, reprezentare victimă",
        "Criminal defense, victim representation"
      ),
      path: `${basePath}/${language === "ro" ? "drept-penal" : "criminal-law"}`,
    },
    {
      icon: Building,
      title: t("Achiziții publice", "Public Procurement"),
      description: t(
        "Consultanță și litigii în achiziții publice",
        "Consulting and litigation in public procurement"
      ),
      path: `${basePath}/${
        language === "ro" ? "achizitii-publice" : "public-procurement"
      }`,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-16 min-h-[20vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={officeImage3}
            alt="Professional Office"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-5xl font-bold mb-4 text-white">
            {t("Domenii de practică", "Legal Services")}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t(
              "Oferim asistență juridică complexă în diverse domenii ale dreptului",
              "We provide comprehensive legal assistance in various areas of law"
            )}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(service.path)}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            {t("Cum lucrăm", "How We Work")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t("Consultație inițială", "Initial Consultation"),
                description: t(
                  "Analizăm cazul dumneavoastră",
                  "We analyze your case"
                ),
              },
              {
                step: "02",
                title: t("Strategie juridică", "Legal Strategy"),
                description: t(
                  "Dezvoltăm un plan de acțiune",
                  "We develop an action plan"
                ),
              },
              {
                step: "03",
                title: t("Reprezentare", "Representation"),
                description: t(
                  "Vă reprezentăm în instanță",
                  "We represent you in court"
                ),
              },
              {
                step: "04",
                title: t("Soluționare", "Resolution"),
                description: t(
                  "Obținem rezultatul dorit",
                  "We achieve the desired result"
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-serif font-bold text-accent mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
