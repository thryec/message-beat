import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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

          <h2 className="text-xl font-bold mt-6 mb-3">Methodology</h2>
          <p>Our rankings and assessments are based on a combination of:</p>
          <ul className="list-disc ml-6 mt-2 mb-4 space-y-1">
            <li>Public user statistics and download numbers</li>
            <li>Technical analysis of protocols and implementations</li>
            <li>Privacy and security assessments</li>
            <li>Decentralization metrics</li>
          </ul>

          <p className="mt-6 text-gray-600 italic">
            For more information about how we gather and analyze data, please
            visit our Methodology page.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
