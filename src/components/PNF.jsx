import React from 'react'
import './PNF.css'
import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

function PNF() {
  return (
     <section className="not-found">
      <div className="not-found-card">
        <div className="not-found-icon">
          <SearchX size={38} strokeWidth={1.6} />
        </div>

        <p className="not-found-label">ERROR 404</p>

        <h1>
          Oops! Page <span>not found.</span>
        </h1>

        <p className="not-found-description">
          The page you're looking for may have been moved,
          deleted, or never existed. Let's get you back on track!
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home">
            <Home size={18} />
            Back to Home
          </Link>

          <button
            className="not-found-back"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="not-found-decoration">
          <span>4</span>
          <span className="not-found-zero">0</span>
          <span>4</span>
        </div>

        <p className="not-found-footer">
          Sandra P C <span>·</span> Full Stack Developer
        </p>
      </div>
    </section>
  )
}

export default PNF
