"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [metrics, setMetrics] = useState({
    totalShipments: 0,
    fedexShipments: 0,
    dhlShipments: 0,
    inProgress: 0,
    delivered: 0,
  });

  useEffect(() => {
    // Simulating API Call (Replace with FastAPI endpoint)
    fetch("http://localhost:8000/api/shipments/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard title="Total Shipments" value={metrics.totalShipments} />
      <MetricCard title="FedEx Shipments" value={metrics.fedexShipments} />
      <MetricCard title="DHL Shipments" value={metrics.dhlShipments} />
      <MetricCard title="In Progress" value={metrics.inProgress} />
      <MetricCard title="Delivered" value={metrics.delivered} />
    </div>
  );
}

function MetricCard({ title, value }: { title: string; value: number }) {
  return (
    <Card className="shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-3xl font-semibold">{value}</CardContent>
    </Card>
  );
}
