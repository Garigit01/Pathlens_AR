import { Hero } from "@/components/pathlens/Hero";
import { Features } from "@/components/pathlens/Features";
import { SiteHeader } from "@/components/pathlens/SiteHeader";
import { SiteFooter } from "@/components/pathlens/SiteFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Map, Wifi } from "lucide-react";

const HowItWorks = () => (
  <section id="how" className="border-t border-border bg-secondary/40 section-spacing">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-xl">From entrance to destination in three steps</h2>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {[
          { icon: Map, title: "Pick a destination", text: "Search rooms, restrooms, cafés or exits across multiple floors." },
          { icon: Wifi, title: "We compute the path", text: "A* pathfinding finds the shortest route over the building graph in milliseconds." },
          { icon: Camera, title: "Follow AR arrows", text: "Point your camera and walk — Three.js arrows guide every turn, online or off." },
        ].map((s, i) => (
          <div key={s.title} className="rounded-xl border border-border bg-card shadow-soft card-spacing flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-elegant">
                {i + 1}
              </span>
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 heading-md">{s.title}</h3>
            <p className="mt-2 text-md text-muted">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="border-t border-border bg-background section-spacing">
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 text-center shadow-elegant md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(0_0%_100%/0.25),transparent_60%)]" />
        <div className="relative">
          <h2 className="heading-xl text-primary-foreground">Ready to find your way?</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90 text-lg">
            Try the live demo with the Pathlens Demo Tower — two floors, eight
            POIs, real A* routing and a working AR overlay.
          </p>
          <Button asChild size="xl" className="mt-8 bg-background text-foreground hover:bg-background/90">
            <Link to="/navigate">
              Open the demo <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen">
    <SiteHeader />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
