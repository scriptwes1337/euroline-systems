import React, { useState } from "react";
import { Footer } from "../../../components/footer";
import { Nav } from "../../../components/navbar/navbar";
import Link from "next/link";
import { projects } from "../index";
import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  // State for fullscreen image modal
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  if (!project) {
    return (
      <>
        <Nav />
        <main className="project-main">
          <Link href="/projects" className="back-link">
            &larr; Back to Projects
          </Link>
          <h1>Project not found</h1>
          <p>The project you are looking for does not exist.</p>
        </main>
        <Footer />
        <style jsx>{`
          .project-main {
            padding: 2rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          .back-link {
            text-decoration: none;
            color: #0066cc;
            margin-bottom: 1rem;
            display: inline-block;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="project-main">
        <Link href="/projects" className="back-link">
          &larr; Back to Projects
        </Link>
        <h1>{project.title}</h1>
        <div className="project-flex">
          <div className="gallery-wrapper">
            <div className="gallery-scroll">
              {project.images?.gallery?.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  className="gallery-img-wrapper"
                  style={{
                    display: "inline-block",
                    background: "none",
                    border: "none",
                    padding: 0,
                  }}
                  onClick={() => setFullscreenImg(img)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setFullscreenImg(img);
                    }
                  }}
                  onKeyUp={(e) => {
                    // Optionally handle onKeyUp for accessibility
                  }}
                  aria-label={`View ${project.title} image ${
                    idx + 1
                  } fullscreen`}
                >
                  <img
                    src={img}
                    alt={`${project.title} view ${idx + 1}`}
                    className="gallery-img"
                    style={{ cursor: "pointer" }}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="project-details">
            <div className="project-description">
              <h2>Scope Of Work</h2>
              <p style={{ lineHeight: "1.6" }}>{project.description}</p>
            </div>
            <div className="project-meta">
              <div className="meta-box">
                <h3 style={{ marginTop: 0 }}>Time To Complete</h3>
                <p>
                  <strong>Scope:</strong> {project.timeToComplete}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Fullscreen Modal */}
        {fullscreenImg && (
          <div className="fullscreen-modal">
            <button
              type="button"
              className="fullscreen-modal-overlay"
              onClick={() => setFullscreenImg(null)}
              onKeyDown={(e) => {
                if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                  setFullscreenImg(null);
                }
              }}
              onKeyUp={(e) => {
                // Ensures accessibility: handle keyup for closing modal
                if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                  setFullscreenImg(null);
                }
              }}
              aria-label="Close fullscreen modal"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.85)",
                border: "none",
                padding: 0,
                margin: 0,
                zIndex: 1000,
                cursor: "pointer",
              }}
            />
            <img
              src={fullscreenImg}
              alt="Fullscreen view"
              className="fullscreen-img"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1001,
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              aria-label="Close fullscreen view"
            />
            <button
              type="button"
              className="close-btn"
              onClick={() => setFullscreenImg(null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
                  setFullscreenImg(null);
                }
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
        <style jsx>{`
          .project-main {
            padding: 2rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          .back-link {
            text-decoration: none;
            color: #0066cc;
            margin-bottom: 1rem;
            display: inline-block;
          }
          .project-flex {
            display: flex;
            gap: 2rem;
            margin-top: 2rem;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .gallery-wrapper {
            flex: 1 1 100%;
            max-width: 100%;
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .gallery-scroll {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            width: 100%;
          }
          .gallery-img {
            width: 100%;
            max-width: 320px;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
            flex: 1 1 220px;
            cursor: pointer;
            transition: box-shadow 0.2s;
          }
          .gallery-img:hover {
            box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
          }
          .project-details {
            display: flex;
            gap: 2rem;
            flex-direction: row;
            flex: 1 1 100%;
            flex-wrap: wrap;
          }
          .project-description {
            flex: 2;
            min-width: 250px;
          }
          .project-meta {
            flex: 1;
            min-width: 220px;
            margin-top: 1.5rem;
          }
          .meta-box {
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 1.5rem;
            background: #f9f9f9;
          }
          /* Fullscreen Modal Styles */
          .fullscreen-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .fullscreen-img {
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 10px;
            box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
          }
          .close-btn {
            position: absolute;
            top: 32px;
            right: 48px;
            font-size: 2.5rem;
            color: #fff;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1001;
            line-height: 1;
          }
          @media (max-width: 900px) {
            .project-flex,
            .project-details {
              flex-direction: column !important;
              gap: 1.5rem !important;
            }
            .gallery-img {
              max-height: 250px !important;
            }
          }
          @media (max-width: 600px) {
            .project-main {
              padding: 1rem 0.5rem;
            }
            .gallery-scroll {
              flex-wrap: nowrap;
              overflow-x: auto;
              gap: 0.75rem;
              padding-bottom: 0.5rem;
            }
            .gallery-img {
              min-width: 200px;
              max-width: 80vw;
              border-radius: 6px;
            }
            .project-description,
            .project-meta {
              min-width: 0;
            }
            h1 {
              font-size: 1.5rem;
            }
            h2 {
              font-size: 1.2rem;
            }
            .close-btn {
              top: 16px;
              right: 16px;
              font-size: 2rem;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
