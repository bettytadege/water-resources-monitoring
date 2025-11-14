import { Activity, Brain, Map, Shield, TriangleAlert, UsersRound } from "lucide-react";
import { CgDatabase } from "react-icons/cg";
import { FiAlertTriangle } from "react-icons/fi";
import { GoDatabase } from "react-icons/go";
import { IoWifiOutline } from "react-icons/io5";

export const systemOverviewData = [
  {
    id: "systems-online",
    title: "Systems Online",
    value: "6/6",
    subtitle: "All systems operational",
    icon: CgDatabase,
    statusColor: "#007A55",
    borderColor: "#00BC7D", 
  },
  {
    id: "average-uptime",
    title: "Average Uptime",
    value: "99.5%",
    // subtitle: "All systems operational",
    icon: IoWifiOutline,
    statusColor: "#007595",
    borderColor: "#00B8DB", 
  },
  {
    id: "data-flow",
    title: "Data Flow Status",
    value: "Healthy",
    subtitle: "Cross-system integration",
    icon: GoDatabase,
    statusColor: "#009966",
    borderColor: "#2B7FFF", 
  },
  {
    id: "active-alerts",
    title: "Active Alerts",
    value: "2",
    subtitle: "Requiring attention",
    icon: FiAlertTriangle,
    statusColor: "#CA3500",
    borderColor: "#FF6900", 
  },
];

export const featureData = [
  {
    "title": "Real-Time Monitoring",
    "icon":Activity,
    "description": "Satellite data, sensor networks, and hydrological tracking",
    "status": "online",
    "uptime": 99.8,
    "lastUpdated": "2 minutes ago"
  },
  {
    "title": "Geospatial APIs",
    "icon": Map ,
    "description": "Ambalay Maps, routing, and geocoding services",
    "status": "online",
    "uptime": 99.5,
    "lastUpdated": "1 minute ago"
  },
  {
    "title": "AI Forecasting",
    "icon": Brain,
    "description": "Flood/drought prediction and natural language queries",
    "status": "online",
    "uptime": 99.9,
    "lastUpdated": "3 minutes ago"
  },
  {
    "title": "Early Warning System",
    "icon": TriangleAlert,
    "description": "SMS alerts, emergency routing, and community notifications",
    "status": "online",
    "uptime": 99.9,
    "lastUpdated": "30 seconds ago"
  },
  {
    "title": "Community Platform",
    "icon":UsersRound,
    "description": "Local committees, reports, and community engagement",
    "status": "online",
    "uptime": 99.2,
    "lastUpdated": "1 minute ago"
  },
  {
    "title": "Administrative Dashboard",
    "icon": Shield,
    "description": "Policy recommendations, compliance, and budget oversight",
    "status": "online",
    "uptime": 99.7,
    "lastUpdated": "2 minutes ago"
  }
];
