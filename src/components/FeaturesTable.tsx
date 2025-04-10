import { App } from "../types";

interface FeaturesTableProps {
  apps: App[];
}

export default function FeaturesTable({ apps }: FeaturesTableProps) {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            App
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            E2EE
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Metadata Protection
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID Requirement
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Server Dependence
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {apps.map((app) => (
          <tr key={app.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 font-semibold">
                  {app.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{app.name}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                ${
                  app.e2ee === "Strong"
                    ? "bg-green-100 text-green-800"
                    : app.e2ee === "Optional (default)"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {app.e2ee}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                ${
                  app.metadataProtection === "Strong"
                    ? "bg-green-100 text-green-800"
                    : app.metadataProtection === "Partial"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {app.metadataProtection}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {app.idRequirement}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {app.serverDependence}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
