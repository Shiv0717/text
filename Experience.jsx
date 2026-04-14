"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController, BarController, DoughnutController,
  LineElement, BarElement, ArcElement,
  PointElement, CategoryScale, LinearScale,
  Filler, Tooltip, Legend,
} from "chart.js";

Chart.register(
  LineController, BarController, DoughnutController,
  LineElement, BarElement, ArcElement,
  PointElement, CategoryScale, LinearScale,
  Filler, Tooltip, Legend
);

function useChart(id, config) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    if (ref.current) ref.current.destroy();
    ref.current = new Chart(canvas, config());
    return () => { if (ref.current) ref.current.destroy(); };
  }, [id]);
}

const isDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const txt = () => (isDark() ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.35)");
const grid = () => (isDark() ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)");

export default function UniversityBento() {
  useChart("sparkEnrol", () => ({
    type: "line",
    data: {
      labels: ["19", "20", "21", "22", "23", "24", "25"],
      datasets: [{
        data: [36200, 37100, 38400, 39800, 41200, 42000, 42810],
        borderColor: "#534AB7", fill: false,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      elements: { point: { radius: 0 }, line: { borderWidth: 2, tension: 0.4 } },
      scales: { x: { display: false }, y: { display: false } },
    },
  }));

  useChart("sparkGrants", () => ({
    type: "line",
    data: {
      labels: ["19", "20", "21", "22", "23", "24"],
      datasets: [{
        data: [220, 248, 275, 300, 340, 380],
        borderColor: "#1D9E75", fill: false,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      elements: { point: { radius: 0 }, line: { borderWidth: 2, tension: 0.4 } },
      scales: { x: { display: false }, y: { display: false } },
    },
  }));

  useChart("donutChart", () => ({
    type: "doughnut",
    data: {
      datasets: [{
        data: [94, 4, 2],
        backgroundColor: ["#1D9E75", "#D3D1C7", "#E24B4A"],
        borderWidth: 0,
        hoverOffset: 4,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: "72%",
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ctx.parsed + "%" } },
      },
    },
    plugins: [{
      id: "centerText",
      afterDraw(chart) {
        const { ctx, chartArea: { width, height, top } } = chart;
        ctx.save();
        ctx.font = "600 26px 'Playfair Display', serif";
        ctx.fillStyle = isDark() ? "#fff" : "#1a1a1a";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("94%", width / 2, top + height / 2);
        ctx.restore();
      },
    }],
  }));

  useChart("lineChart", () => ({
    type: "line",
    data: {
      labels: ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
      datasets: [
        {
          label: "Admissions",
          data: [6200,6580,6900,7200,7600,7100,7800,8400,9100,9800],
          borderColor: "#534AB7",
          backgroundColor: "rgba(83,74,183,0.07)",
          fill: true, tension: 0.4, borderWidth: 2,
          pointRadius: 3, pointBackgroundColor: "#534AB7",
          yAxisID: "y",
        },
        {
          label: "Grad rate %",
          data: [88,89,88,90,91,89,90,91,92,92],
          borderColor: "#1D9E75",
          borderDash: [5, 4],
          fill: false, tension: 0.4, borderWidth: 2,
          pointRadius: 0,
          yAxisID: "y2",
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        x: { ticks: { color: txt(), font: { size: 11 } }, grid: { color: grid() } },
        y: {
          ticks: { color: txt(), font: { size: 11 }, callback: (v) => (+v / 1000).toFixed(1) + "k" },
          grid: { color: grid() },
          min: 5000, max: 11000,
        },
        y2: {
          position: "right",
          ticks: { color: txt(), font: { size: 11 }, callback: (v) => v + "%" },
          grid: { display: false },
          min: 84, max: 96,
        },
      },
    },
  }));

  useChart("barChart", () => ({
    type: "bar",
    data: {
      labels: ["2018","2019","2020","2021","2022","2023","2024"],
      datasets: [{
        data: [3200, 3450, 3300, 3700, 3950, 4200, 4500],
        backgroundColor: (ctx) =>
          ctx.dataIndex === 6
            ? "#534AB7"
            : isDark() ? "rgba(83,74,183,0.35)" : "rgba(83,74,183,0.18)",
        borderRadius: 4,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (ctx) => ctx.parsed.y.toLocaleString() + " papers" } },
      },
      scales: {
        x: { ticks: { color: txt(), font: { size: 11 } }, grid: { display: false } },
        y: {
          ticks: { color: txt(), font: { size: 11 }, callback: (v) => (+v / 1000).toFixed(1) + "k" },
          grid: { color: grid() },
          min: 2800,
        },
      },
    },
  }));

  return (
    <div className="min-h-screen bg-[#f5f3ef] p-5 font-[Jost,sans-serif]">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />

      <div className="grid grid-cols-12 gap-3 max-w-7xl mx-auto">

        {/* ── ROW 1: Hero stats ── */}

        {/* Enrolment */}
        <div className="col-span-12 md:col-span-4 bg-white border border-black/[0.07] rounded-xl p-5">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Total enrolment</p>
          <p className="font-[Playfair_Display,serif] text-[40px] text-neutral-900 leading-none">
            42,<span className="text-[#e05c3a]">810</span>
          </p>
          <p className="text-[12px] text-neutral-400 font-light mt-1">Active students · 2024–25</p>
          <p className="text-[11px] text-[#1D9E75] font-medium mt-2">↑ 8.4% from last year</p>
          <div className="relative h-14 mt-3">
            <canvas id="sparkEnrol" />
          </div>
        </div>

        {/* Research Grants */}
        <div className="col-span-12 md:col-span-4 bg-white border border-black/[0.07] rounded-xl p-5">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Research funding</p>
          <p className="font-[Playfair_Display,serif] text-[40px] text-neutral-900 leading-none">
            £<span className="text-[#1D9E75]">380</span>M
          </p>
          <p className="text-[12px] text-neutral-400 font-light mt-1">Annual grants secured</p>
          <p className="text-[11px] text-[#1D9E75] font-medium mt-2">↑ 22% YoY</p>
          <div className="relative h-14 mt-3">
            <canvas id="sparkGrants" />
          </div>
        </div>

        {/* Global Partnerships */}
        <div className="col-span-12 md:col-span-4 bg-white border border-black/[0.07] rounded-xl p-5">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Global partnerships</p>
          <p className="font-[Playfair_Display,serif] text-[40px] text-neutral-900 leading-none">68</p>
          <p className="text-[12px] text-neutral-400 font-light mt-1">Partner countries</p>
          <p className="text-[11px] text-[#1D9E75] font-medium mt-2">↑ 12 new this year</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {[
              { label: "Europe · 28", bg: "#E1F5EE", color: "#0F6E56" },
              { label: "Asia · 19", bg: "#E6F1FB", color: "#185FA5" },
              { label: "Americas · 14", bg: "#FAEEDA", color: "#854F0B" },
              { label: "Other · 7", bg: "#FAECE7", color: "#993C1D" },
            ].map((p, idx) => (
              <span
                key={idx}
                className="text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full font-medium"
                style={{ background: p.bg, color: p.color }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── ROW 2 ── */}

        {/* Faculty bar chart */}
        <div className="col-span-12 md:col-span-5 bg-white border border-black/[0.07] rounded-xl p-5">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Faculty by department</p>
          <p className="font-[Playfair_Display,serif] text-[16px] text-neutral-900 mb-4">Academic staff distribution</p>
          {[
            { label: "Engineering", pct: 85, val: 412 },
            { label: "Medicine",    pct: 72, val: 348 },
            { label: "Sciences",   pct: 63, val: 305 },
            { label: "Humanities", pct: 51, val: 247 },
            { label: "Business",   pct: 44, val: 213 },
            { label: "Law",        pct: 31, val: 151 },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <span className="text-[11px] text-neutral-400 w-20 flex-shrink-0">{row.label}</span>
              <div className="flex-1 h-[6px] bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#534AB7]" style={{ width: `${row.pct}%` }} />
              </div>
              <span className="text-[11px] text-neutral-800 w-8 text-right">{row.val}</span>
            </div>
          ))}
        </div>

        {/* Satisfaction donut */}
        <div className="col-span-12 md:col-span-3 bg-white border border-black/[0.07] rounded-xl p-5 flex flex-col">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Student satisfaction</p>
          <div className="relative h-40 my-2">
            <canvas id="donutChart" />
          </div>
          <div className="mt-auto space-y-1.5">
            {[
              { color: "#1D9E75", label: "Very satisfied", val: "94%" },
              { color: "#D3D1C7", label: "Neutral",        val: "4%"  },
              { color: "#E24B4A", label: "Dissatisfied",   val: "2%"  },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <span className="text-[12px] text-neutral-500 flex-1">{item.label}</span>
                <span className="text-[12px] text-neutral-800 font-medium">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Endowment */}
        <div className="col-span-12 md:col-span-4 bg-white border border-black/[0.07] rounded-xl p-5">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Endowment fund</p>
          <p className="font-[Playfair_Display,serif] text-[16px] text-neutral-900 mb-4">£2.4B portfolio allocation</p>
          <div className="space-y-2 mb-4">
            {[
              { color: "#534AB7", label: "Equities",     val: "48%" },
              { color: "#1D9E75", label: "Fixed income", val: "26%" },
              { color: "#EF9F27", label: "Real assets",  val: "15%" },
              { color: "#D85A30", label: "Alternatives", val: "11%" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <span className="text-[12px] text-neutral-500 flex-1">{item.label}</span>
                <span className="text-[12px] text-neutral-800 font-medium">{item.val}</span>
              </div>
            ))}
          </div>
          <div className="h-2 rounded-full overflow-hidden flex gap-[2px]">
            <div className="flex-[48] bg-[#534AB7] rounded-l-full" />
            <div className="flex-[26] bg-[#1D9E75]" />
            <div className="flex-[15] bg-[#EF9F27]" />
            <div className="flex-[11] bg-[#D85A30] rounded-r-full" />
          </div>
        </div>

        {/* ── ROW 3 ── */}

        {/* Admissions line chart */}
        <div className="col-span-12 md:col-span-8 bg-white border border-black/[0.07] rounded-xl p-5">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Admissions & graduation</p>
          <p className="font-[Playfair_Display,serif] text-[16px] text-neutral-900 mb-4">10-year cohort trend</p>
          <div className="relative h-44">
            <canvas id="lineChart" />
          </div>
          <div className="flex gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
              <span className="w-5 h-[2px] bg-[#534AB7] inline-block rounded" />
              Admissions
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
              <span className="w-5 inline-block border-t-2 border-dashed border-[#1D9E75]" />
              Grad rate %
            </span>
          </div>
        </div>

        {/* At-a-glance stats */}
        <div className="col-span-12 md:col-span-4 bg-white border border-black/[0.07] rounded-xl p-5 flex flex-col gap-3">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium">At a glance</p>
          {[
            { label: "Spinoff companies (3yr)", val: "14", badge: "↑ record", badgeColor: "#1D9E75" },
            { label: "QS World Ranking",        val: "#47", badge: "↑ 6 places", badgeColor: "#1D9E75" },
            { label: "Graduate employment",     val: "96%", badge: null, badgeColor: "" },
            { label: "Campuses worldwide",      val: "12+", badge: null, badgeColor: "" },
          ].map((stat, i, arr) => (
            <div
              key={i}
              className={`pb-3 ${i < arr.length - 1 ? "border-b border-black/[0.06]" : ""}`}
            >
              <p className="text-[11px] text-neutral-400 mb-0.5">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-[Playfair_Display,serif] text-[26px] text-neutral-900">{stat.val}</span>
                {stat.badge && (
                  <span className="text-[12px] font-medium" style={{ color: stat.badgeColor }}>{stat.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── ROW 4: Full-width bar ── */}
        <div className="col-span-12 bg-white border border-black/[0.07] rounded-xl p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#e05c3a] font-medium mb-1">Research output</p>
              <p className="font-[Playfair_Display,serif] text-[16px] text-neutral-900">Publications per year · 2018–2024</p>
            </div>
            <span className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full font-medium bg-[#EEEDFE] text-[#3C3489]">
              40% growth
            </span>
          </div>
          <div className="relative h-40">
            <canvas id="barChart" />
          </div>
        </div>

      </div>
    </div>
  );
}