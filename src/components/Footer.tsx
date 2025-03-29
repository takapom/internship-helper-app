// components/Footer.tsx

export default function Footer() {
    return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              {/* 仮のBootstrapロゴ */}
              <svg width="30" height="24" viewBox="0 0 16 16" fill="currentColor">
                <rect width="16" height="16" fill="#6c757d" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
          </div>
  
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                {/* 仮のTwitterアイコン */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518..." />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                {/* 仮のInstagramアイコン */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="6" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                {/* 仮のFacebookアイコン */}
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <rect width="16" height="16" rx="2" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
  