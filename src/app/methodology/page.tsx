export default function MethodologyPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 text-gray-700">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Methodology</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <p>Our rankings and assessments are based on a combination of:</p>
          <ul className="list-disc ml-6 mt-2 mb-4 space-y-1">
            <li>Public user statistics and download numbers</li>
            <li>Technical analysis of protocols and implementations</li>
            <li>Privacy and security assessments</li>
            <li>Decentralization metrics</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
