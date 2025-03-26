"use client";

import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { shipmentsData } from "@/components/data" // Mock data (or fetch from API)

export default function ShipmentList() {
    const [shipments, setShipments] = useState([]);
    const [search, setSearch] = useState("");
    const [filterCarrier, setFilterCarrier] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:8000/api/shipments")
        .then((response) => response.json())
        .then((data) => setShipments(data));
    }, []);

  const shipmentsData = [
    { trackingNumber: "12345", carrier: "FedEx", destination: "New York", date: "2024-03-25" },
    { trackingNumber: "67890", carrier: "DHL", destination: "Los Angeles", date: "2024-03-20" },
    { trackingNumber: "54321", carrier: "FedEx", destination: "Chicago", date: "2024-03-22" },
    { trackingNumber: "98765", carrier: "DHL", destination: "Houston", date: "2024-03-18" },
  ];
  

  // Filtered shipment list based on search & carrier filter
  const filteredShipments = shipmentsData.filter((shipment:any) => {
    return (
      shipment.trackingNumber.toLowerCase().includes(search.toLowerCase()) &&
      (filterCarrier ? shipment.carrier === filterCarrier : true)
    );
  });

  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shipments</h2>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search by Tracking Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2"
        />
        <select
          value={filterCarrier}
          onChange={(e) => setFilterCarrier(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">All Carriers</option>
          <option value="FedEx">FedEx</option>
          <option value="DHL">DHL</option>
        </select>
      </div>

      {/* Shipments Table */}
      <Table className="w-full border rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Tracking Number</TableHead>
            <TableHead>Carrier</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredShipments.length > 0 ? (
            filteredShipments.map((shipment:any) => (
              <TableRow key={shipment.trackingNumber}>
                <TableCell>{shipment.trackingNumber}</TableCell>
                <TableCell>{shipment.carrier}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>{shipment.date}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                No shipments found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
