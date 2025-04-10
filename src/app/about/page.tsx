export default function AboutPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 text-gray-700">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About MessageBeat</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="mb-4">
            Messaging Beat is a platform dedicated to monitoring and analyzing
            the landscape of decentralized messaging applications. Our mission
            is to provide transparency and insights into the adoption, privacy
            features, and decentralization levels of various messaging
            protocols.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-3">Our Mission</h2>
          <p className="mb-4">
            As communication becomes increasingly important in our digital
            lives, so does the need for private, secure, and resilient messaging
            platforms. MessageBeat aims to help users, developers, and
            researchers understand the current state of decentralized messaging
            technology.
          </p>

          <p className="mt-6 text-gray-600 italic">
            For more information about how we gather and analyze data, please
            visit our Methodology page.
          </p>
        </div>
      </main>
    </div>
  );
}
