import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import {
  Target,
  Heart,
  Briefcase,
  FileText,
  Scale,
  Shield,
  Info,
  BookOpen,
  Gavel,
  Landmark,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import officeImage1 from "@/assets/office-1.jpeg";
import officeImage2 from "@/assets/office-2.jpeg";
import officeImage3 from "@/assets/office-4.jpg";
import logo from "@/assets/logo.png";

export default function About() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="w-full h-64 mb-8" />
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
          </div>
          <Skeleton className="w-full h-96" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={officeImage3}
        category={t("DESPRE NOI", "ABOUT US")}
        categoryEn="ABOUT US"
        title={t("Suport și asistență", "Support and Assistance")}
        titleEn="Support and Assistance"
        subtitle={t(
          "promptitudine, seriozitate și inovație",
          "promptness, seriousness and innovation"
        )}
        subtitleEn="promptness, seriousness and innovation"
        language={language}
      />
      {/* Straight Talk Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6 leading-tight">
                {t(
                  "Discuțiile directe sunt discuții bune de afaceri",
                  "Straight Talk Is Good Business Talk"
                )}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "Suntem atenți la rezultate și la relațiile pe care le construim cu clienții noștri. Oferim consiliere juridică de calitate la un preț accesibil. Echipa noastră este dedicată să vă ajute să vă atingeți obiectivele de afaceri prin servicii juridice complete și personalizate.",
                  "We are attentive to results and the relationships we build with our clients. We offer quality legal advice at an affordable price. Our team is dedicated to helping you achieve your business goals through comprehensive and personalized legal services."
                )}
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src={logo}
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Practice Areas Section */}
      <section className="py-4 md:py-5 bg-white">
        <div className="container mx-auto px-4 max-w-12xL">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-center mb-12">
            {t("Domenii de practică", "Practice Areas")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-12xl mx-auto items-stretch">
            {[
              {
                icon: FileText,
                id: "drept-civil",
                title: t("Drept civil", "Civil Law"),
                description: t(
                  "Asistență juridică completă în domeniul dreptului civil, de la tranzacții imobiliare la moșteniri și contracte complexe.",
                  "Complete legal assistance in civil law, from real estate transactions to inheritances and complex contracts."
                ),
              },
              {
                icon: Building,
                id: "drept-comercial",
                title: t("Drept comercial", "Commercial Law"),
                description: t(
                  "Consiliere juridică în domeniul dreptului comercial, acoperind toate aspectele activității comerciale și fuziuni-achiziții.",
                  "Legal advice in commercial law, covering all aspects of commercial activity and mergers-acquisitions."
                ),
              },
              {
                icon: Gavel,
                id: "litigii",
                title: t("Litigii și arbitraj", "Litigation and Arbitration"),
                description: t(
                  "Reprezentare în litigii complexe în fața instanțelor și tribunalelor arbitrale cu strategii eficiente.",
                  "Representation in complex litigation before courts and arbitral tribunals with efficient strategies."
                ),
              },
              {
                icon: Shield,
                id: "drept-penal",
                title: t("Drept penal", "Criminal Law"),
                description: t(
                  "Asistență juridică specializată în toate fazele procesului penal, de la cercetare până la executare.",
                  "Specialized legal assistance in all phases of criminal proceedings, from investigation to execution."
                ),
              },
              {
                icon: Landmark,
                id: "drept-administrativ",
                title: t("Drept administrativ", "Administrative Law"),
                description: t(
                  "Consiliere în relațiile cu autoritățile publice și reprezentare în contenciosul administrativ.",
                  "Advice in relations with public authorities and representation in administrative litigation."
                ),
              },
              {
                icon: Scale,
                id: "drept-proprietate-intelectuala",
                title: t("Proprietate intelectuală", "Intellectual Property"),
                description: t(
                  "Protecție și apărare a drepturilor de proprietate intelectuală, înregistrare mărci și brevete.",
                  "Protection and defense of intellectual property rights, trademark and patent registration."
                ),
              },
            ].map((area, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/domenii-de-practica/${area.id}`)}
                className="bg-white border border-gray-200 p-8 hover:shadow-lg hover:border-red-600 transition-all cursor-pointer flex flex-col h-full group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-700 transition-colors mb-6">
                  <area.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4 group-hover:text-red-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  {area.description}
                </p>
                <div className="mt-4 text-red-600 font-medium text-sm inline-flex items-center">
                  {t("Detalii", "Details")} <span className="ml-1">›</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
