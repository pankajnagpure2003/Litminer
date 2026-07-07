// Reusable Table component
import Badge from './Badge';
import { formatDateTime } from '../../utils/formatters';

export function Table({ columns, data, loading, emptyMessage = 'No data found' }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/5 bg-black/20">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-6 py-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#c7c4d8]/60 font-[Inter] ${col.className || ''}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 font-[Inter]">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4">
                      <div className="h-4 bg-white/5 rounded animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))
            : data.length === 0
            ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center text-[#c7c4d8] text-sm">
                    {emptyMessage}
                  </td>
                </tr>
              )
            : data.map((row, i) => (
                <tr key={row.id || i} className="hover:bg-white/[0.03] transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className={`px-6 py-4 ${col.cellClassName || ''}`}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
