import React from "react";
import { Footer } from "../../components/footer";
import { Nav } from "../../components/navbar/navbar";
import Link from "next/link";

export const projects = [
  {
    id: "3-&-5_changi-south-singapore",
    title: "3 & 5 Changi South Singapore",
    description:
      "Supply and installation of aluminium cladding, doors, windows, and louvres",
    architect: "AC Consortium Architects",
    images: {
      main: "/Projects/3 & 5 Changi South Singapore/3.png",
      gallery: [
        "/Projects/3 & 5 Changi South Singapore/1.png",
        "/Projects/3 & 5 Changi South Singapore/2.png",
        "/Projects/3 & 5 Changi South Singapore/3.png",
      ],
    },
    timeToComplete: "8 months",
  },
  {
    id: "h-&-m-orchard",
    title: "H & M Orchard",
    description:
      "Supply and installation of aluminium cladding and stainless steel canopy",
    architect: "K2LD Architects",
    images: {
      main: "/Projects/H & M Orchard/1.png",
      gallery: [
        "/Projects/H & M Orchard/1.png",
        "/Projects/H & M Orchard/2.png",
      ],
    },
    timeToComplete: "2.5 months",
  },
  {
    id: "kuwait-embassy-singapore",
    title: "Kuwait Embassy Singapore",
    description:
      "Supply and Installation of stainless steel doors, windows, and screens",
    architect: "ar + d Architects",
    images: {
      main: "/Projects/Kuwait Embassy Singapore/1.png",
      gallery: ["/Projects/Kuwait Embassy Singapore/1.png"],
    },
    timeToComplete: "8 months",
  },
  {
    id: "mandarin-oriental-hotel",
    title: "Mandarin Oriental Hotel",
    description:
      "External Façade GS – EL80E Thermal break System with 55mm Think glazing works. STC – 52 - 55 DB",
    architect: "-",
    images: {
      main: "/Projects/Mandarin Oriental Hotel/1.png",
      gallery: [
        "/Projects/Mandarin Oriental Hotel/1.png",
        "/Projects/Mandarin Oriental Hotel/2.png",
      ],
    },
    timeToComplete: "45 days to complete 1 elevation",
  },
  {
    id: "sunview-way-data-center",
    title: "Sunview Way (Data Center)",
    description:
      "External Façade GS - Aluminium Façade System and glazing works",
    architect: "Mtech Consultant",
    images: {
      main: "/Projects/Sunview Way (data center)/1.png",
      gallery: ["/Projects/Sunview Way (data center)/1.png"],
    },
    timeToComplete: "2 months",
  },
  {
    id: "celavi-restaurant-marina-bay-sands-hotel-singapore",
    title: "Celavi Restaurant Marina Bay Sands Hotel Singapore",
    description:
      "Supply and installation of curved aluminium sliding door with part system - Aluminium & Cladding",
    architect: "-",
    images: {
      main: "/Projects/Celavi Restaurant Marina Bay Sands Hotel Singapore/1.png",
      gallery: [
        "/Projects/Celavi Restaurant Marina Bay Sands Hotel Singapore/1.png",
        "/Projects/Celavi Restaurant Marina Bay Sands Hotel Singapore/2.png",
      ],
    },
    timeToComplete: "2 months",
  },
  {
    id: "lavo-restaurant-marina-bay-sands-hotel-singapore",
    title: "Lavo Restaurant Marina Bay Sands Hotel Singapore",
    description:
      "Supply and installation of aluminium bi-fold doors with glass railing & cladding",
    architect: "New Space Architects",
    images: {
      main: "/Projects/Lavo Restaurant Marina Bay Sands Hotel Singapore/1.png",
      gallery: [
        "/Projects/Lavo Restaurant Marina Bay Sands Hotel Singapore/1.png",
        "/Projects/Lavo Restaurant Marina Bay Sands Hotel Singapore/2.png",
      ],
    },
    timeToComplete: "1.5 months",
  },
  {
    id: "ardmore-park-condominium",
    title: "Ardmore Park Condominium",
    description:
      "GS -Curtainwall Façade System with Tilt & Turn swing in window and glazing works",
    architect: "None",
    images: {
      main: "/Projects/Ardmore Park Condominium/1.png",
      gallery: [
        "/Projects/Ardmore Park Condominium/1.png",
        "/Projects/Ardmore Park Condominium/2.png",
      ],
    },
    timeToComplete: "-",
  },
  {
    id: "white-house-park",
    title: "White House Park",
    description:
      "GS -Aluminium sliding doors & Casement windows, Glass railing, Glass skylight",
    architect: "Arc Studio",
    images: {
      main: "/Projects/White House Park/1.png",
      gallery: [
        "/Projects/White House Park/1.png",
        "/Projects/White House Park/2.png",
      ],
    },
    timeToComplete: "5 months",
  },
  {
    id: "mitsui-house",
    title: "Mitsui House",
    description:
      "GS -Supply and install Aluminium curtainwall, doors and windows",
    architect: "Pearl Architects",
    images: {
      main: "/Projects/Mitsui House/1.png",
      gallery: ["/Projects/Mitsui House/1.png", "/Projects/Mitsui House/2.png"],
    },
    timeToComplete: "3 months",
  },
  {
    id: "golden-house-singapore",
    title: "Golden House Singapore",
    description:
      "All kinds of aluminium and glazing works including external aluminium mesh sun screen",
    architect: "K2LD Architects",
    images: {
      main: "/Projects/Golden House Singapore/1.png",
      gallery: [
        "/Projects/Golden House Singapore/1.png",
        "/Projects/Golden House Singapore/2.png",
      ],
    },
    timeToComplete: "7-8 months",
  },
  {
    id: "dalvey-road",
    title: "Dalvey Road",
    description: "Aluminium & glazing works",
    architect: "GUZ Architects",
    images: {
      main: "/Projects/Dalvey Road/1.png",
      gallery: ["/Projects/Dalvey Road/1.png", "/Projects/Dalvey Road/2.png"],
    },
    timeToComplete: "5-6 months",
  },
  {
    id: "sentosa-cove",
    title: "Sentosa Cove",
    description: "GS -Aluminium & glazing works",
    architect: "GUZ Architects",
    images: {
      main: "/Projects/Sentosa Cove/1.png",
      gallery: ["/Projects/Sentosa Cove/1.png", "/Projects/Sentosa Cove/2.png"],
    },
    timeToComplete: "5-6 months",
  },
  {
    id: "cluny-road",
    title: "Cluny Road",
    description:
      "GS - Slimline sliding door system & glazing works, including Curved glass railing",
    architect: "GUZ Architects",
    images: {
      main: "/Projects/Cluny Road/1.png",
      gallery: ["/Projects/Cluny Road/1.png", "/Projects/Cluny Road/2.png"],
    },
    timeToComplete: "5-6 months",
  },
];

const CARD_HEIGHT = 370;

const ProjectsPage = () => {
  return (
    <>
      <Nav />
      <main
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Our Projects</h1>
        <p style={{ maxWidth: 700, textAlign: "center" }}>
          Euroline Systems specializes in high-quality construction works involving aluminium and glass. Here are some of our recent projects:
        </p>
        <style>{`
          .project-card {
            border: 1px solid #eee;
            border-radius: 8px;
            width: 320px;
            height: ${CARD_HEIGHT}px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            overflow: hidden;
            background: #fff;
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }
          .project-card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 8px 24px rgba(0,0,0,0.13);
            border-color: #d0d0d0;
          }
        `}</style>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "2rem",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                className="project-card"
              >
                <img
                  src={project.images.main}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.25rem" }}>
                    {project.title}
                  </h2>
                  <p style={{ margin: "0 0 0.5rem 0", color: "#555", flex: 1 }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
