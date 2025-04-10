import { App } from "../types";

interface AppsTableProps {
  apps: App[];
}

export default function AppsTable({ apps }: AppsTableProps) {
  // Helper function to get the appropriate color for decentralization level
  const getDecentralizationColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-red-500";
      case "Moderate":
        return "bg-yellow-500";
      case "High":
        return "bg-green-300";
      case "Very High":
        return "bg-green-500";
      case "Extremely High":
        return "bg-green-800";
      default:
        return "bg-gray-500";
    }
  };

  // Helper function to get text color for decentralization level
  const getDecentralizationTextColor = (level: string) => {
    switch (level) {
      case "Low":
        return "text-red-700";
      case "Moderate":
        return "text-yellow-700";
      case "High":
        return "text-green-300";
      case "Very High":
        return "text-green-500";
      case "Extremely High":
        return "text-green-800";
      default:
        return "text-gray-700";
    }
  };

  return (
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            #
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            App
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            User Base
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            Decentralization
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
            Privacy Rating
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
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
                  <div className="text-xs text-gray-700">{app.protocol}</div>
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
                    className={`h-full ${getDecentralizationColor(app.decentralizationLevel)} rounded-full`}
                    style={{ width: `${app.decentralizationScore}%` }}
                  ></div>
                </div>
                <span
                  className={`text-sm font-medium ${getDecentralizationTextColor(app.decentralizationLevel)}`}
                >
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
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {app.businessModel}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
