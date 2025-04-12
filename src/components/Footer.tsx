export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-gray-700">
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
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:0xcurate@gmail.com"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email me: 0xcurate@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/thryec"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/thryec/message-beat"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
