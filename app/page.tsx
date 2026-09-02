import CloudLab from "../components/CloudLab";
import EngineeringProfile from "../components/EngineeringProfile";
import Guardian from "../components/Guardian";
import Hero from "../components/Hero";
import KubernetesCaseStudy from "../components/KubernetesCaseStudy";
import Navbar from "../components/Navbar";
import Platform3D from "../components/Platform3D";
import PlatformOverview from "../components/PlatformOverview";
import Projects from "../components/Projects";
import SiteFooter from "../components/SiteFooter";
import TargetCursor from "../components/TargetCursor";

export default function Home() {
  return (
    <>
      <TargetCursor />

      <main className="site-shell">
        <Navbar />
        <Hero />
        <PlatformOverview />
        <Projects />
        <KubernetesCaseStudy />
        <CloudLab />
        <Guardian />
        <Platform3D />
        <EngineeringProfile />
        <SiteFooter />
      </main>
    </>
  );
}