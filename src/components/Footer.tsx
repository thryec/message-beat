import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 sticky bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-bold text-blue-600 mb-4">
              MessageBeat
            </div>
            <p className="text-gray-600 max-w-md text-sm">
              Monitoring the decentralized messaging ecosystem. Providing
              transparency on privacy, security, and adoption metrics.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/methodology"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Methodology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/metrics"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Privacy Metrics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/criteria"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Ranking Criteria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sources"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Data Sources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/team"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribute"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
