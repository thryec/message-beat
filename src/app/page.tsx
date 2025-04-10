"use client";

import { useState } from "react";
import { apps } from "../data/apps";
import { stats } from "../data/stats";
import { App, SortMethod } from "../types";
import StatCard from "@/components/StatCard";
import AppsTable from "@/components/AppsTable";
import FeaturesTable from "@/components/FeaturesTable";

export default function Home() {
  const [sortedApps, setSortedApps] = useState<App[]>(apps);
  const [activeFilter, setActiveFilter] = useState<SortMethod>("userBase");

  const handleFilterChange = (method: SortMethod) => {
    setActiveFilter(method);

    const sorted: App[] = [...apps];

    if (method === "userBase") {
      sorted.sort((a, b) => b.userBaseNumber - a.userBaseNumber);
    } else if (method === "decentralization") {
      sorted.sort((a, b) => b.decentralizationScore - a.decentralizationScore);
    } else if (method === "privacy") {
      // Sort by privacy rating (prioritizing 'Strong')
      const ratingValue = {
        Strong: 3,
        Good: 2,
        Partial: 1,
        Limited: 0,
      };

      sorted.sort((a, b) => {
        return (
          ratingValue[b.privacyRating as keyof typeof ratingValue] -
          ratingValue[a.privacyRating as keyof typeof ratingValue]
        );
      });
    }

    setSortedApps(sorted);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 text-gray-700">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Decentralized Messaging Landscape
          </h1>
          <p className="text-gray-600 max-w-3xl">
            A comprehensive tracker monitoring the status, adoption, and privacy
            features of decentralized messaging applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Active Users"
            value={stats.totalUsers}
            highlight={true}
          />
          <StatCard title="Most Popular App" value={stats.mostPopularApp} />
          <StatCard
            title="Highest Decentralization"
            value={stats.highestDecentralization}
          />
          <StatCard
            title="Featured Protocols"
            value={stats.featuredProtocols.toString()}
          />
        </div>

        <div className="bg-white rounded-lg shadow mb-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-3 sm:mb-0">
              Decentralized Messaging Apps
            </h2>
            <div className="flex space-x-3">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeFilter === "userBase" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => handleFilterChange("userBase")}
              >
                User Base
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeFilter === "decentralization" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => handleFilterChange("decentralization")}
              >
                Decentralization
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeFilter === "privacy" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => handleFilterChange("privacy")}
              >
                Privacy Features
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <AppsTable apps={sortedApps} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">
              Key Privacy Features Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <FeaturesTable apps={apps} />
          </div>
        </div>
      </main>
    </div>
  );
}
