import { App } from "../types";

interface AppsTableProps {
  apps: App[];
}

export default function AppsTable({ apps }: AppsTableProps) {
  return (
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            App
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            User Base
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Decentralization
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Privacy Rating
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Business Model
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {apps.map((app, index) => (
          <tr key={app.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 font-semibold">
                  {app.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{app.name}</div>
                  <div className="text-xs text-gray-500">{app.protocol}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div
                className={`font-medium ${app.userBaseNumber > 10000000 ? "text-blue-600" : "text-gray-900"}`}
              >
                {app.userBase}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${app.decentralizationScore}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-700">
                  {app.decentralizationLevel}
                </span>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                ${
                  app.privacyRating === "Strong"
                    ? "bg-green-100 text-green-800"
                    : app.privacyRating === "Good"
                      ? "bg-yellow-100 text-yellow-800"
                      : app.privacyRating === "Partial"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                }`}
              >
                {app.privacyRating}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {app.businessModel}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
