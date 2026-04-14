import type { FeeItem } from "@/lib/types";

interface FeeTableProps {
  fees: FeeItem[];
}

export default function FeeTable({ fees }: FeeTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200">
      <table className="w-full min-w-[400px] text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-brand-50">
            <th className="px-4 py-3 font-semibold text-neutral-900">
              Service
            </th>
            <th className="px-4 py-3 font-semibold text-neutral-900">Fee</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((item, index) => (
            <tr
              key={item.service}
              className={`border-b border-neutral-100 ${
                index % 2 === 1 ? "bg-neutral-50" : "bg-white"
              }`}
            >
              <td className="px-4 py-3 text-neutral-700">{item.service}</td>
              <td className="px-4 py-3 font-medium text-neutral-900">
                {item.fee}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
